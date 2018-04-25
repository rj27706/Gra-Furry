module.exports = {
    entry: "/app.js"
    ,

    output
:
{
    filename: "out.js"
}
,
watch: true,
    module
:
{
    loaders: [{

        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
        ,

        query: {
            preset: ['es2015']
        }
    }]
}
};