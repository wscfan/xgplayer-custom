const webpack = require('webpack')
module.exports = {
	lintOnSave: false,
	publicPath: './',
    chainWebpack: config => {
        const svgRule = config.module.rule('svg')
        // 清除已有的所有 loader。
        svgRule.uses.clear()
        // 添加要替换的 loader
        svgRule
            .use('raw-loader')
            .loader('raw-loader')
    }
}