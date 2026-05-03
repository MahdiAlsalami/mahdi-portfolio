import { socialLinks } from "@/data/portfolio";

type SocialKind = (typeof socialLinks)[number]["kind"];

function SocialIcon({ kind }: { kind: SocialKind }) {
  if (kind === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.68.5.1.68-.22.68-.49 0-.24-.01-1.04-.02-1.89-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.86.09-.66.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.94c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
        />
      </svg>
    );
  }

  if (kind === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9.75h3.95V21H3V9.75Zm6.2 0h3.78v1.54h.05c.53-1 1.81-1.83 3.73-1.83 3.99 0 4.73 2.63 4.73 6.05V21h-3.94v-4.87c0-1.16-.02-2.66-1.62-2.66-1.62 0-1.87 1.27-1.87 2.58V21H9.2V9.75Z"
        />
      </svg>
    );
  }

  if (kind === "x") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M13.76 10.47 21.17 2h-1.76l-6.43 7.35L7.84 2H1.92l7.77 11.1L1.92 22h1.76l6.79-7.77L15.9 22h5.92l-8.06-11.53Zm-2.4 2.75-.79-1.1L4.3 3.3H7l5.06 7.12.79 1.1 6.57 9.24h-2.7l-5.36-7.54Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M7 3.8h7.2L19 8.6v11.6H7zM14 4v5h5M9.5 14h7M9.5 17h5"
      />
    </svg>
  );
}

export function SocialFooter() {
  return (
    <footer className="mt-16 flex items-center gap-5 text-zinc-500">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
          title={link.label}
          className="h-5 w-5 transition hover:text-zinc-100"
        >
          <SocialIcon kind={link.kind} />
        </a>
      ))}
    </footer>
  );
}
