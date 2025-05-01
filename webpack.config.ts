import path from 'path'

import { getWebpackConfig } from './webpack/config.webpack'
import { IBuildEnv, TBuildPath } from './webpack/types.webpack'

export default (env: IBuildEnv) => {
	const paths: TBuildPath = {
		entry: path.resolve(__dirname, 'src', 'main.tsx'),
		output: path.resolve(__dirname, 'build'),
		src: path.resolve(__dirname, 'src'),
		public: path.resolve(__dirname, 'public')
	}

	return getWebpackConfig({
		mode: env.mode,
		port: env.port,
		paths
	})
}
