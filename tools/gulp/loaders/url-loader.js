const PATHS = require('../../paths')

module.exports = function CreateURLLoader(){
	return {
		test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
		loader: require.resolve('url-loader'),
		options: {
			limit: 10000,
			name: `${PATHS.BUILD_PUBLIC}/[name].[hash:8].[ext]`,
		}
	}
}