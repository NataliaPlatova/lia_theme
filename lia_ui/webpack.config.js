module.exports = {
    module: {
        rules: [
            {
                test: /\.(css)$/i,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                //exportLocalsConvention: "camelCaseOnly",
                                localIdentName: "[name]__[local]",
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
        ],
    },
};
