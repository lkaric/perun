import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../docs/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  staticDirs: ["./public"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    check: true,
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      propFilter: (prop) => {
        if (prop.name === "children") {
          return true;
        }

        if (prop.name === "disabled") {
          return true;
        }

        if (prop.parent) {
          return (
            !/@types\/react/.test(prop.parent.fileName) &&
            !/@emotion/.test(prop.parent.fileName)
          );
        }
        return true;
      },
      shouldExtractLiteralValuesFromEnum: true,
    },
  },
};
export default config;
