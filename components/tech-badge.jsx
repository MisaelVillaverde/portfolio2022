import { Badge, Kbd, Tag } from "@chakra-ui/react";

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "cyan",
  "purple",
  "pink",
];

const TechBadge = ({ children }) => (
  <Tag
    variant="outline"
    colorScheme={colors[Math.floor(Math.random() * colors.length)]}
    m={1}
  >
    {children}
  </Tag>
);

export default TechBadge;
