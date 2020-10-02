const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: {
        enabled: true,
        layers: ['utilities'],
        content: [
            './src/**/*.html',
            './src/**/*.vue',
            './src/**/*.jsx',
        ],
    },
    theme: {
        extend: {},
    },
    variants: {
        opacity: ['responsive', 'hover', 'focus', 'disabled'],
    },
    plugins: [require('@tailwindcss/ui')],
}
