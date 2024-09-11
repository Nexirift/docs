import Link from "@docusaurus/Link";
import React from "react";

type BadgeProps = {
  content: string;
  backgroundColor: string;
  textColor: string;
  link?: string;
  as: React.ElementType;
};

export default function Badge({
  content,
  backgroundColor,
  textColor,
  link,
  as: Element = "p",
}: BadgeProps) {
  const badgeContent = (
    <Element className="badge" style={{ backgroundColor, color: textColor }}>
      {content}
    </Element>
  );

  if (link) {
    return <Link to={link}>{badgeContent}</Link>;
  }

  return badgeContent;
}
