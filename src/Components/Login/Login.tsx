import React from 'react';

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

import { IconBrandGoogle } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 900,
    backgroundSize: "cover",
    backgroundImage: "url(images/inventory.jpg)",
  },

  form: {
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: 900,
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

  loginButton: {
    root: {
      backgroundColor: "#24282c",
      border: 0,
      height: 42,
      paddingLeft: 20,
      paddingRight: 20,

      "&:hover": {
        backgroundColor: theme.fn.darken("#121416", 0.05),
      },
    },

    leftIcon: {
      marginRight: 15,
    },
  },
}));

export default function AuthenticationImage() {
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
          Welcome back to Inventory Dashboard!
        </Title>

        <TextInput
          label="Email address"
          placeholder="hello@gmail.com"
          size="md"
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
        />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button fullWidth mt="xl" size="md">
          Login
        </Button>

        <Button
          fullWidth
          mt="xl"
          size="md"
          component="a"
          rel="noopener noreferrer"
          href="/dashboard"
          leftIcon={<IconBrandGoogle size={18} />}
          styles={(theme) => ({
            root: {
              backgroundColor: "#24282c",
              border: 0,
              height: 42,
              paddingLeft: 20,
              paddingRight: 20,

              "&:hover": {
                backgroundColor: theme.fn.darken("#121416", 0.05),
              },
            },

            leftIcon: {
              marginRight: 15,
            },
          })}
        >
          Login with Google
        </Button>

        <Text align="center" mt="md">
          Don&apos;t have an account?{" "}
          <Anchor
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
