# 1. Create a folder and initialize Yarn

```
yarn init
```

# 2. Install the following packages

```
yarn add react react-dom
```

```
yarn add -D @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader html-webpack-plugin sass sass-loader style-loader url-loader webpack webpack-cli webpack-dev-server
```

# 3. Create .babelrc file

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

# 4. Create a webpack.config.js file

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    // the bundle output path
    path: path.join(__dirname, "/dist"),
    // the name of the bundle
    filename: "bundle.js",
  },
  plugins: [
    // to import index.html file inside index.js
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  devServer: {
    // could change the port
    port: 3030,
  },
  module: {
    rules: [
      {
        // .js and .jsx files
        test: /\.(js|jsx)$/,
        // excluding the node_modules folder
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        // styles files
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        // to import images and fonts
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },
};
```

# 5. Create an /src folder and create the following files inside it

```
|-- src
  |-- App.js
  |-- App.scss
  |-- index.html
  |-- index.js
```

```js
// App.js
import React from "react";
const App = () => {
  return <h1>ThinhMD Web Movies</h1>;
};

export default App;
```

```scss
// App.scss
h1 {
  color: red;
}
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ThinhMD Web Movies</title>
  </head>
  <body>
    <div id="app"></div>

    <!-- Notice we are pointing to `bundle.js` file -->
    <script src="bundle.js"></script>
  </body>
</html>
```

```js
// index.js
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.scss";

const root = createRoot(document.getElementById("app"));

root.render(<App />);
```

# 6. Create serve and build scripts

```json
{
  "scripts": {
    "serve": "webpack serve --mode development",
    "build": "webpack --mode production"
  }
}
```
