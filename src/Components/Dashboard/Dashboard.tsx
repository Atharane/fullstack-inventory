import React from "react";
import Navbar from "./Navbar.tsx";
import Sidepanel from "./Sidepanel.tsx";
import Stats from "./Stats.tsx";
import Footer from "./Footer.tsx";

import { Skeleton, Grid, useMantineTheme } from "@mantine/core";

let stat_props = {
  data: [
    {
      label: "Page views",
      stats: "456,578",
      progress: 65,
      color: "teal",
      icon: "up",
    },
    {
      label: "New users",
      stats: "2,550",
      progress: 72,
      color: "blue",
      icon: "up",
    },
    {
      label: "Orders",
      stats: "4,735",
      progress: 52,
      color: "red",
      icon: "down",
    },
  ],
};

export default function Dashboard(props) {
  // const child = <Skeleton height={140} radius="md" animate={false} />;
  let logout = props.logout;
  let username = props.username;

  return (
    <>
      <Navbar logout={logout} username={username} />

      <Grid>
        <Grid.Col xs={3}>
          <Sidepanel />
        </Grid.Col>

        <Grid.Col xs={9}>
          <Grid.Col xs={8}>
            <Stats data={stat_props.data} />
          </Grid.Col>
          <Grid.Col xs={6}>
            <img
              src="https://cdn.corporatefinanceinstitute.com/assets/line-graph.jpg"
              alt="graph"
              height={280}
            />
          </Grid.Col>
          {/* <Grid.Col xs={3}>{child}</Grid.Col> */}
        </Grid.Col>
      </Grid>

      {/* <Footer /> */}
    </>
  );
}
