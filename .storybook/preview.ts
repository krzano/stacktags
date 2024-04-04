import type { Preview } from "@storybook/react";

import { withThemeFromJSXProvider } from "@storybook/addon-themes";

import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../src/styles/theme";
import "@fontsource/source-sans-3/400.css";
import "@fontsource/source-sans-3/500.css";
import "@fontsource/source-sans-3/700.css";
import "@fontsource/material-icons";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: theme,
      },
      defaultTheme: "light",
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline,
    }),
  ],
};

export default preview;
