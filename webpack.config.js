module.exports = {
  rules: [
    {
      test: /\.less$/,
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: "css-loader", // translates CSS into CommonJS
        },
        {
          loader: "less-loader", // compiles Less to CSS
          options: {
            lessOptions: {
              // Ant Design Customize Theme
              modifyVars: {
                "primary-color": "#2ea44f",
              },
              javascriptEnabled: true,
            },
          },
        },
      ],
    },
  ],
}
