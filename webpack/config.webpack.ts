import { type Configuration } from 'webpack'

import { getWebpackDevServer } from './dev-server.webpack'
import { getWebpackLoaders } from './loaders.webpack'
import { getWebpackPlugins } from './plugins.webpack'
import { getWebpackResolvers } from './resolvers.webpack'
import { IBuildEnv } from './types.webpack'

export function getWebpackConfig(options: IBuildEnv): Configuration {
	const config: Configuration = {
		mode: options.mode,
		entry: options.paths.entry,
		output: {
			path: options.paths.output,
			filename: '[name].[contenthash].bundle.js',
			chunkFilename: '[name].[contenthash].chunk.js',
			clean: true
		},
		plugins: getWebpackPlugins(options),
		module: {
			rules: getWebpackLoaders(options)
		},
		resolve: getWebpackResolvers(options),
		devServer: getWebpackDevServer(options)
	}

	return config
}
