let mix = require('laravel-mix')

mix
    .setPublicPath('dist/')
    .js('src/js/app.js', 'dist/js')
    .postCss('src/css/app.css', 'dist/css', [
        require('postcss-import')
    ])
    .version()
    .options({
        processCssUrls: false
    })
