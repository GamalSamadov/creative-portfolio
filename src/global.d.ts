declare module '*.module.scss' {
	interface IClassNames {
		[className: string]: string
	}
	const classNames: IClassNames
	export = classNames
}

declare module '*.png' {
	const content: string
	export default content
}

declare module '*.jpg' {
	const content: string
	export default content
}

declare module '*.jpeg' {
	const content: string
	export default content
}

declare module '*.svg' {
	import { FC, SVGProps } from 'react'

	const SVG: FC<SVGProps<SVGSVGElement>>
	export default SVG
}

declare module '*.gif' {
	const content: string
	export default content
}
