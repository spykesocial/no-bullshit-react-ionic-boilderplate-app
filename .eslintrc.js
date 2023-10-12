module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "prettier",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: [
    "prettier",
    "unused-imports",
    "@typescript-eslint",
    "react",
    "react-hooks",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
  ignorePatterns: ["node_modules", "build", "dist", "public"],
};
