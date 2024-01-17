import { Options } from "prettier";

const config: Options = {
      endOfLine: "lf",
      printWidth: 80,
      tabWidth: 6,
      trailingComma: "es5",
      singleQuote: false,
      jsxSingleQuote: false,
      semi: true,
      importOrder: ["^@/(.*)$", "^[./]"],
      importOrderSeparation: true,
      importOrderSortSpecifiers: true,
      plugins: ["@trivago/prettier-plugin-sort-imports"],
};

export = config;
