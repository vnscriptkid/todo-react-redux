const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, 'dist', 'assets'),
		filename: "bundle.js"
	},
	devtool: '#source-map',
	module: {
		rules: [
		    {
		      test: /\.js$/,
		      exclude: /(node_modules|bower_components)/,
		      use: {
		        loader: 'babel-loader',
		        options: {
		          presets: ['env', 'react', 'stage-3']
		        }
		      }
		    }
		]
	},
	plugins: [
	    new HtmlWebpackPlugin({
	    	template: 'dist/assets/template.html'
	    })
	]
}