const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "/vue_tweet", //リポジトリ名を指定
  outputDir: "docs", //GitHubPagesで公開するにはdistではなくdocs配下にコンパイルする
  transpileDependencies: true,
});
