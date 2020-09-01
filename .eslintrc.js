module.exports = {
  root: true,
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    // 全局变量
    store: false,
    Vue: true,
    Vuex: true,
  },
  plugins: ["prettier"],
  ignorePatterns: ["dist/**", ".gitignore", "node_modules"],
  rules: {
    "prettier/prettier": [
      // 内部配置 prettier
      1,
      {
        semi: true, // 格式化不加分号
        printWidth: 200, // 一行的字符数，如果超过会进行换行，默认为80
        singleQuote: false, // 字符串是否使用单引号，默认为false，使用双引号
        trailingComma: "es5", // 是否使用尾逗号，有三个可选值"<none|es5|all>"
        bracketSpacing: true, // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
        jsxBracketSameLine: true, // JSX 标签闭合位置，默认false，换行闭合
      }, // prettier 配置项
    ],
    semi: "off",
    // 公共 rules 配置
  },
};
