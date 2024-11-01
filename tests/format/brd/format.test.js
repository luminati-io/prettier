runFormatTest(import.meta, ["babel"], {
  trailingComma: "es5",
  tabWidth: 4,
  jsxTabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  printWidth: 79,
  bracketSpacing: false,
  arrowParens: "avoid",
  brdFormatting: true,
});
