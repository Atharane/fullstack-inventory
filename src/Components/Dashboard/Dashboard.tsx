import React from "react";
import Navbar from "./Navbar.tsx";
import ProgressCard from "./ProgressCard.tsx";
import StatsGridIcons from "./StatsGridIcons.tsx";
import StatsGroup from "./StatsGroup.tsx";
import StatsDivision from "./StatsDivision.tsx";
import TableSort from "./TableSort.tsx";
import {
  Grid,
  Skeleton,
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

const banner_data = [
  {
    title: "New users",
    stats: "2,175",
    description:
      "13% less compared to last month, new user engagement up by 6%",
  },
  {
    title: "Completed orders",
    stats: "1,994",
    description: "1994 orders were completed this month, 97% satisfaction rate",
  },
];

const table_data = [
  {
    "item_id": "1",
    "item_name": "Apple iPhone 12 Pro Max",
    "price": "$1,299.00",
    "quantity": "8",
  },
  {
    "item_id": "2",
    "item_name": "Apple iPhone 11",
    "price": "$699.00",
    "quantity": "5",
  },
  {
    "item_id": "3",
    "item_name": "Apple iPhone 11 Pro",
    "price": "$999.00",
    "quantity": "3",
  },
]
  
const division_data = {
  total: "345,765",
  diff: 18,
  data: [
    {
      label: "Abundent items",
      count: "204,001",
      part: 59,
      color: "#47d6ab",
    },
    {
      label: "Low stock items",
      count: "121,017",
      part: 35,
      color: "yellow",
    },
    {
      label: "Out of stock items",
      count: "31,118",
      part: 6,
      color: "red",
    },
  ]
};

export default function Subgrid() {
  const theme = useMantineTheme();
  return (
    <Grid columns={24}>
      <Grid.Col span={24} p={0}>
        <Navbar />
      </Grid.Col>

      <Grid.Col span={9}>
        <ProgressCard />
        <StatsGridIcons data={data} />
        <StatsDivision
          total={division_data.total}
          diff={division_data.diff}
          data={division_data.data}
        />
        <StatsGroup data={banner_data} />
      </Grid.Col>

      {/* <Grid.Col span={6}>
        {getChild(getSubHeight(3, theme.spacing.md))}
      </Grid.Col> */}

      <Grid.Col span={15}>
        {/* {getChild(getSubHeight(3, theme.spacing.md))} */}
        <TableSort data={table_data} />
      </Grid.Col>
    </Grid>
  );
}
