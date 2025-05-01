import { createRoot } from 'react-dom/client'
import { App } from '@/components/app/App'
import { StrictMode } from 'react'
import '@/styles/global.scss'

createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<App />
	</StrictMode>
)
