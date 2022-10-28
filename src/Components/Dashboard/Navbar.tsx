import {
  createStyles,
  Header,
  Menu,
  Group,
  Center,
  Burger,
  Container,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  header: {
      backgroundImage: `linear-gradient(-60deg, ${
      theme.colors[theme.primaryColor][4]
    } 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,
    borderBottom: 0,
  },

  inner: {
    height: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.white,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundImage: theme.fn.linearGradient(90, "rgba(51,51,51,0.1)"),
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

interface HeaderSearchProps {
  links: {
    link: string;
    label: string;
    links: { link: string; label: string }[];
  }[];
}

export default function HeaderMenuColored() {
  const links = [
    {
      link: "/about",
      label: "Features",
    },
    {
      link: "#1",
      label: "Learn",
      links: [
        {
          link: "/docs",
          label: "Documentation",
        },
        {
          link: "/resources",
          label: "Resources",
        },
        {
          link: "/community",
          label: "Community",
        },
        {
          link: "/blog",
          label: "Blog",
        },
      ],
    },
    {
      link: "/about",
      label: "About",
    },
    {
      link: "/pricing",
      label: "Pricing",
    },
    {
      link: "#2",
      label: "Support",
      links: [
        {
          link: "/faq",
          label: "FAQ",
        },
        {
          link: "/demo",
          label: "Book a demo",
        },
        {
          link: "/forums",
          label: "Forums",
        },
      ],
    },
  ];

  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={12} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header height={56} className={classes.header} mb={20}>
      <Container>
        {" "}
        <div className={classes.inner}>
          <h4 style={{ color: "white" }}>📦 Inventory Management system</h4>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
            color="#fff"
          />
        </div>
      </Container>
    </Header>
  );
}
