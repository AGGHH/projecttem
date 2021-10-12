// import url from './src/service/url'
// import Vue from 'vue'


// var urls = require('./public/url.json')
module.exports = {
    publicPath: './',
    lintOnSave: false,
    chainWebpack: config => {
        // config.output.filename('js/[name].js').end();
        // config.output.chunkFilename('js/[name].js').end();
        // // 修改生产配置
        // config.plugin('extract-css').tap(args => [{
        //     filename: `css/[name].css`
        // }])
        config.module
            .rule('css')
            .test(/\.css$/)
            .oneOf('vue')
            .resourceQuery(/\?vue/)
            .use('px2rem')
            .loader('px2rem-loader')
            .options({
                remUnit: 246.8 //此处修改为设计稿的宽度除以10
            })
    }
}