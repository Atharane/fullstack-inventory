import React from "react";
import ProgressCard from "./ProgressCard.tsx";
import StatsGridIcons from "./StatsGridIcons.tsx";
import {
  SimpleGrid,
  Skeleton,
  Container,
  Stack,
  useMantineTheme,
} from "@mantine/core";

const getChild = (height: number) => (
  <Skeleton height={height} radius="md" animate={false} />
);
const BASE_HEIGHT = 360;
const getSubHeight = (children: number, spacing: number) =>
  BASE_HEIGHT / children - spacing * ((children - 1) / children);

let data = [
  {
    title: "Revenue",
    value: "$13,456",
    diff: 34,
  },
  {
    title: "Profit",
    value: "$4,145",
    diff: -13,
  },
  {
    title: "Coupons usage",
    value: "745",
    diff: 18,
  },
];

export default function Subgrid() {
  const theme = useMantineTheme();
  return (
    <SimpleGrid cols={4} breakpoints={[{ maxWidth: "xs", cols: 8 }]}>
      {getChild(BASE_HEIGHT)}
      <Stack>
        {getChild(getSubHeight(2, theme.spacing.md))}
        {getChild(getSubHeight(2, theme.spacing.md))}
      </Stack>
      <Stack>
        <ProgressCard />
        <StatsGridIcons data={data} />

        {getChild(getSubHeight(3, theme.spacing.md))}
      </Stack>
      {getChild(BASE_HEIGHT)}
    </SimpleGrid>
  );
}
