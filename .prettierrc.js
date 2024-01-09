module.exports = {
  semi: false,
  singleQuote: false,
  trailingComma: "all",
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
  importOrder: ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
}
