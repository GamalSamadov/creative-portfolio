import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { RuleSetRule } from 'webpack'

import path from 'path'
import { IBuildEnv } from './types.webpack'

export function getWebpackLoaders({ mode, paths }: IBuildEnv): RuleSetRule[] {
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
          ['@babel/preset-react', { runtime: 'automatic' }],
        ],
      },
    },
  }

  const cssLoader = {
    loader: 'css-loader',
    options: {
      modules: {
        namedExport: false,
        localIdentName:
          mode === 'production' ? '[hash:base64:5]' : '[name]__[local]--[hash:base64:4]',
      },
    },
  }

  const sassResourcesLoader = {
    loader: 'sass-resources-loader',
    options: {
      resources: [
        path.resolve(paths.src, 'styles', 'sass', '_variables.scss'),
        path.resolve(paths.src, 'styles', 'sass', '_spacing.scss'),
        path.resolve(paths.src, 'styles', 'sass', '_typography.scss'),
        path.resolve(paths.src, 'styles', 'sass', '_styles.scss'),
        path.resolve(paths.src, 'styles', 'sass', 'mixins', '*.scss'),
      ],
    },
  }

  const styleLoader = {
    test: /\.(css|scss|sass)?$/,
    use: [
      mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
      cssLoader,
      'sass-loader',
      sassResourcesLoader,
    ],
  }

  const assetsLoader = {
    test: /\.(png|jpg|jpeg|gif)$/,
    type: 'asset/resource',
    generator: {
      filename: 'assets/[name][hash][ext]',
    },
  }

  const svgrLoader = {
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          native: false,
        },
      },
    ],
  }

  return [babelLoader, styleLoader, assetsLoader, svgrLoader]
}
