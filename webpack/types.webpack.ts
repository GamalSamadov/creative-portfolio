export type TBuildMode = 'development' | 'production'

export interface Env {
  mode: TBuildMode
  port: number
}

export interface TBuildPath {
  entry: string
  output: string
  src: string
  public: string
}

export interface IBuildEnv {
  paths: TBuildPath
  port: number
  mode: TBuildMode
}
