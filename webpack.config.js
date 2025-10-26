const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
    },
    mode: "development",
    devServer: {
        static: "./dist",
        open: true,
        port: 8080
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Przykładowy Dashboard",
            templateContent: `
            <!DOCTYPE html>
            <html lang="pl">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>My Dashboard</title>
                </head>
                <body>
                <div class="container">
                    <aside class="sidebar">
                    <h1>Dashboard</h1>
                        <nav></nav>
                    </aside>
                    
                </div>
                </body>
            </html>
            `
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader"]
            }
        ]
    }

}