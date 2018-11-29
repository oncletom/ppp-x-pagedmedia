module.exports = {
    map: {
        inline: false,
        annotation: 'dist/css/maps/'
    },
    plugins: [
        require('postcss-import')(),
        // require('postcss-css-variables')(),
        require('pixrem')(),
        require('postcss-color-function')(),
        require('postcss-nested')(),
        require('postcss-merge-rules')(),
        // require('autoprefixer-core')('last 1 version'),
        require('postcss-discard-comments')({
            removeAll: true
        }),
        // require('cssnano')()
    ]
};
