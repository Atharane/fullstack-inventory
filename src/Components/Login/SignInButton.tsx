import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";
import { Button} from '@mantine/core';
import { IconBrandWindows } from "@tabler/icons";

/**
 * Renders a button which, when selected, will redirect the page to the login prompt
 */
export const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = (loginType) => {
    if (loginType === "redirect") {
      instance.loginRedirect(loginRequest).catch((e) => {
        console.log(e);
      });
    }
  };
  return (
    <Button
      fullWidth
      mt="xl"
      size="md"
      onClick={() => handleLogin("redirect")}
      leftIcon={<IconBrandWindows size={18} />}
      styles={(theme) => ({
        root: {
          backgroundColor: "#181818",
          border: 0,
          height: 42,
          paddingLeft: 20,
          paddingRight: 20,

          "&:hover": {
            backgroundColor: theme.fn.darken("#080808", 0.05),
          },
        },

        leftIcon: {
          marginRight: 15,
        },
      })}
    >
      Login with Microsoft
    </Button>
  );
};
