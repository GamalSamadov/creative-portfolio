import path from 'path'
import { ResolveOptions } from 'webpack'

import { IBuildEnv } from './types.webpack'

export function getWebpackResolvers({ paths }: IBuildEnv): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@': paths?.src,
      '@assets': path.resolve(paths.public, 'assets'),
    },
  }
}
