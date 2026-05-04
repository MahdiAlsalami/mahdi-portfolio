import { blogItems } from "@/data/portfolio";

const MEDIUM_FEED_URL = "https://medium.com/feed/@mahdialsalami0";

export type BlogPost = {
  title: string;
  href: string;
  slug: string;
  date: string;
  contentHtml: string;
};

function decodeHtml(value: string) {
  return value
    .replaceAll("<![CDATA[", "")
    .replaceAll("]]>", "")
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .trim();
}

function getTagValue(item: string, tag: string) {
  const match = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));

  return match ? decodeHtml(match[1]) : "";
}

function formatDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(date);
}

function normalizeMediumLink(value: string) {
  return value.split("?")[0];
}

function getSlugFromHref(value: string) {
  try {
    const url = new URL(value);
    const segments = url.pathname.split("/").filter(Boolean);

    return segments.at(-1) ?? "";
  } catch {
    return value.split("/").filter(Boolean).at(-1) ?? "";
  }
}

function sanitizeMediumHtml(value: string) {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, "")
    .replace(/<object[\s\S]*?<\/object>/gi, "")
    .replace(/<embed[\s\S]*?<\/embed>/gi, "")
    .replace(/<link[\s\S]*?>/gi, "")
    .replace(/<meta[\s\S]*?>/gi, "")
    .replace(/\s+on\w+=(["']).*?\1/gi, "")
    .replace(/\s+on\w+=\S+/gi, "")
    .replace(/\s+(href|src)=(["'])javascript:[\s\S]*?\2/gi, "")
    .trim();
}

function getFallbackPosts(): BlogPost[] {
  return blogItems.map((item) => ({
    title: item.title,
    href: item.href,
    slug: getSlugFromHref(item.href),
    date: item.date,
    contentHtml: ""
  }));
}

function parseMediumRss(xml: string): BlogPost[] {
  const items = xml.match(/<item>[\s\S]*?<\/item>/gi) ?? [];

  return items
    .map((item) => {
      const title = getTagValue(item, "title");
      const href = getTagValue(item, "link");
      const publishedAt = getTagValue(item, "pubDate");
      const contentHtml = getTagValue(item, "content:encoded");
      const normalizedHref = normalizeMediumLink(href);

      return {
        title,
        href: normalizedHref,
        slug: getSlugFromHref(normalizedHref),
        date: formatDate(publishedAt),
        contentHtml: sanitizeMediumHtml(contentHtml)
      };
    })
    .filter((post) => post.title && post.href && post.slug);
}

export async function getMediumPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(MEDIUM_FEED_URL, {
      next: {
        revalidate: 21600
      }
    });

    if (!response.ok) {
      return getFallbackPosts();
    }

    const xml = await response.text();
    const posts = parseMediumRss(xml);

    return posts.length > 0 ? posts : getFallbackPosts();
  } catch {
    return getFallbackPosts();
  }
}

export async function getMediumPost(slug: string) {
  const posts = await getMediumPosts();

  return posts.find((post) => post.slug === slug) ?? null;
}
