import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { RuleSetRule } from 'webpack'

import { IBuildEnv } from './types.webpack'

export function getWebpackLoaders({ mode }: IBuildEnv): RuleSetRule[] {
	const babelLoader = {
		test: /\.(ts|tsx)?$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				targets: 'defaults',
				presets: [
					'@babel/preset-env',
					'@babel/preset-typescript',
					['@babel/preset-react', { runtime: 'automatic' }]
				]
			}
		}
	}

	const cssLoader = {
		loader: 'css-loader',
		options: {
			modules: {
				namedExport: false,
				localIdentName:
					mode === 'production'
						? '[hash:base64:5]'
						: '[name]__[local]--[hash:base64:4]'
			}
		}
	}

	const styleLoader = {
		test: /\.(css|scss|sass)?$/,
		use: [
			mode === 'production'
				? MiniCssExtractPlugin.loader
				: 'style-loader',
			cssLoader,
			'sass-loader'
		]
	}

	const assetsLoader = {
		test: /\.(png|jge?g|gif|webp)$/,
		type: 'asset/resource',
		generator: {
			filename: 'assets/[name][hash][ext]'
		}
	}

	const svgrLoader = {
		test: /\.svg$/,
		use: [
			{
				loader: '@svgr/webpack',
				options: {
					icon: true,
					native: false
				}
			}
		]
	}

	return [babelLoader, styleLoader, assetsLoader, svgrLoader]
}
