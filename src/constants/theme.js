import { defineStyle, defineStyleConfig, extendTheme } from "@chakra-ui/react";

const primary = defineStyle({
  bg: "black",
  color: "white",
  _hover: {
    bg: "blackAlpha.800",
  },
  _dark: {
    bg: "white",
    color: "gray.800",
    _hover: {
      bg: "whiteAlpha.800",
    },
  },
});

export const theme = extendTheme({
  components: {
    Button: defineStyleConfig({
      baseStyle: {
        fontWeight: "medium",
      },
      variants: {
        primary,
      },
    }),
  },
});
