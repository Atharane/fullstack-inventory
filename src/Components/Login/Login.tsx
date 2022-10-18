import React, { useState } from "react";
import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    maxHeight: "100vh",
    backgroundSize: "cover",
    backgroundImage: "url(servers.jpg)",
  },

  form: {
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    height: "100vh",
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));


export default function AuthenticationImage(props) {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title
          order={2}
          className={classes.title}
          align="center"
          mt="md"
          mb={50}
        >
          <img
            src="digital_prudentia.png"
            alt="digital prudentia"
            className={classes.logo}
          />
          Welcome back!
        </Title>

        <TextInput placeholder="user@gmail.com" size="md" />
        <PasswordInput placeholder="password" mt="md" size="md" />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />

        <Button fullWidth mt="xl" size="md" onClick={props.login}>
          Login
        </Button>

        <Text align="center" mt="md">
          Don&apos;t have an account?{" "}
          <Anchor<"a">
            href="#"
            weight={700}
            onClick={(event) => event.preventDefault()}
          >
            Register
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}
