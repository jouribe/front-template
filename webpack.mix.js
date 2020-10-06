const mix = require('laravel-mix')

require('laravel-mix-twig-to-html')

mix.setPublicPath('dist/')
    .js('src/js/app.js', 'dist/js')
    .postCss('src/css/app.css', 'dist/css', [require('postcss-import')])
    .twigToHtml({
        files: 'src/views/**/*.{twig,html}',
        fileBase: 'src/views',
        twigOptions: {
            namespaces: {
                layouts: 'src/views/_layouts',
                components: 'src/views/_components'
            }
        }
    })
    .options({
        processCssUrls: false
    })
