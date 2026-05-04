import { blogItems } from "@/data/portfolio";

const MEDIUM_FEED_URL = "https://medium.com/feed/@mahdialsalami0";

export type BlogPost = {
  title: string;
  href: string;
  date: string;
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

function parseMediumRss(xml: string): BlogPost[] {
  const items = xml.match(/<item>[\s\S]*?<\/item>/gi) ?? [];

  return items
    .map((item) => {
      const title = getTagValue(item, "title");
      const href = getTagValue(item, "link");
      const publishedAt = getTagValue(item, "pubDate");

      return {
        title,
        href: normalizeMediumLink(href),
        date: formatDate(publishedAt)
      };
    })
    .filter((post) => post.title && post.href);
}

export async function getMediumPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(MEDIUM_FEED_URL, {
      next: {
        revalidate: 21600
      }
    });

    if (!response.ok) {
      return [...blogItems];
    }

    const xml = await response.text();
    const posts = parseMediumRss(xml);

    return posts.length > 0 ? posts : [...blogItems];
  } catch {
    return [...blogItems];
  }
}
