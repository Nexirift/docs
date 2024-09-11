import Badge from "./Badge";

const badges = [
  {
    content: "Instance Variation",
    textColor: "black",
    backgroundColor: "#F3CA20",
    link: "/badges/instance-variation",
  },
  {
    content: "Specific to Nexirift",
    textColor: "white",
    backgroundColor: "#8A2BE2",
    link: "/badges/specific-to-nexirift",
  },
];

type BadgeProps = {
  selected: "Instance Variation" | "Specific to Nexirift";
  as: React.ElementType;
  link?: boolean;
};

export default function BadgeWrapper({
  selected,
  as: Element = "p",
  link = true,
}: BadgeProps) {
  const badge = badges.filter((badge) => badge.content === selected);

  if (badge.length === 0) {
    throw new Error(`Badge ${badge} not found`);
  }

  return (
    <Badge {...badge[0]} link={link ? badge[0].link : undefined} as={Element} />
  );
}
