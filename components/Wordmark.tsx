import Image from "next/image";
import Link from "next/link";

interface WordmarkProps {
  href?: string;
  showSub?: boolean;
}

/**
 * AI Does My Work brand wordmark — uses the actual project logo PNG
 * (the triangular green mark), not a reconstruction.
 */
export function Wordmark({ href = "/#top", showSub = true }: WordmarkProps) {
  return (
    <Link href={href} className="wordmark" aria-label="AI Does My Work — Home">
      <Image
        src="/assets/aidmw-mark.png"
        alt=""
        className="wordmark__icon"
        width={36}
        height={36}
        priority
      />
      <span className="wordmark__lockup">
        <span className="wordmark__name">AI&nbsp;Does&nbsp;My&nbsp;Work</span>
        {showSub && <span className="wordmark__sub">Automate · Optimize · Scale</span>}
      </span>
    </Link>
  );
}
