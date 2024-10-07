import { Outlet } from 'react-router-dom'
import styles from './AppLayout.module.scss'

const AppLayout = () => {
	return (
		<div className={styles['app-layout']}>
			<Outlet />
		</div>
	)
}

export default AppLayout
