import React from "react";

import {
  createStyles,
  Header,
  HoverCard,
  Group,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Avatar,
  Center,
  Box,
  Menu,
  TextInput,
} from "@mantine/core";

import {
  IconLogout,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
  IconSearch
} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: 42,
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  user: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.xs}px`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

const mockdata = [
  {
    icon: IconCode,
    title: "Users",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Roles",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Access",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Integration",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "APIs",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
];

export default function HeaderMegaMenu(props) {
  const { classes, theme, cx } = useStyles();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" weight={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box>
      <Header height={46} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          
          {/* brand logo */}
          <Group>
            <img
              src="digital_prudentia_cropped.png"
              alt="digital prudentia"
              height={24}
            />
          </Group>

          <Group className={classes.hiddenMobile}>
            
            <TextInput
              placeholder="Search"
              size="xs"
              icon={<IconSearch size={12} stroke={1.5} />}
              rightSectionWidth={70}
              styles={{ rightSection: { pointerEvents: "none" } }}
            />

            {/* Admin Hover Card */}
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Admin
                    </Box>
                    <IconChevronDown
                      size={16}
                      color={theme.fn.primaryColor()}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>

            {/* User avatar dropdown */}
            <Menu
              width={260}
              position="bottom-end"
              transition="pop-top-right"
            >
              <Menu.Target>
                <UnstyledButton
                  className={cx(classes.user)}
                >
                  <Group spacing={7}>
                    <Avatar
                      src="https://avatars0.githubusercontent.com/u/9947422?s=460&u=3a38d5d262877fcb40b8b8fbaaafdcfbaa2f4b7f&v=4"
                      alt="atharva"
                      radius="xl"
                      size={20}
                    />
                    <Text
                      weight={500}
                      size="sm"
                      sx={{ lineHeight: 1, color: theme.black }}
                      mr={3}
                    >
                      {props.username ? props.username : "username"}
                    </Text>
                    <IconChevronDown size={12} stroke={1.5} />
                  </Group>
                </UnstyledButton>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Settings</Menu.Label>
                <Menu.Item icon={<IconCoin size={14} stroke={1.5} />}>
                  Account settings
                </Menu.Item>
                <Menu.Item icon={<IconCoin size={14} stroke={1.5} />}>
                  Change account
                </Menu.Item>
                <Menu.Item
                  onClick={props.logout}
                  icon={<IconLogout size={14} stroke={1.5} />}
                >
                  Logout
                </Menu.Item>

                <Menu.Divider />

                <Menu.Label>Danger zone</Menu.Label>
                <Menu.Item icon={<IconCoin size={14} stroke={1.5} />}>
                  Pause subscription
                </Menu.Item>
                <Menu.Item
                  color="red"
                  icon={<IconCoin size={14} stroke={1.5} />}
                >
                  Delete account
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>

          </Group>
          
        </Group>
      </Header>
    </Box>
  );
}
