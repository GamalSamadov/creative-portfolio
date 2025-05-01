import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniSccExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'
import { ProgressPlugin, WebpackPluginInstance } from 'webpack'

import { IBuildEnv } from './types.webpack'

export function getWebpackPlugins({
	paths,
	mode
}: IBuildEnv): WebpackPluginInstance[] {
	const htmlPlugin = new HtmlWebpackPlugin({
		template: path.resolve(paths.public, 'index.html'),
		favicon: path.resolve(paths.public, 'favicon.ico')
	})

	const plugins: WebpackPluginInstance[] = [htmlPlugin]

	if (mode === 'development') {
		plugins.push(new ProgressPlugin())
		plugins.push(new ReactRefreshWebpackPlugin())
	}

	if (mode === 'production') {
		plugins.push(
			new MiniSccExtractPlugin({
				filename: 'css/[name].[contenthash].css',
				chunkFilename: 'css/[name].[contenthash].css'
			})
		)
	}

	return plugins
}
