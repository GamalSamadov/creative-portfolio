import { type Configuration as DevConfiguration } from 'webpack-dev-server'

import { IBuildEnv } from './types.webpack'

export function getWebpackDevServer({ mode }: IBuildEnv): DevConfiguration {
	if (mode === 'production') return {}

	return {
		port: 3000,
		open: true,
		hot: true,
		compress: true
	}
}
