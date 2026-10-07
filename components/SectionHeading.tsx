import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  link?: { href: string; label: string };
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, link, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <div className="section-heading__copy">
        <span className="eyebrow"><span className="eyebrow__pip" />{eyebrow}</span>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {link && <Link className="text-link section-heading__link" href={link.href}>{link.label}<ArrowUpRight size={16} /></Link>}
    </div>
  );
}
