import { NavLink } from 'react-router-dom'
import styles from './NavItem.module.scss'

type NavItemProps = {
	label: string
	path: string
	Icon: React.ComponentType<{ fill?: string; className?: string }>
}

const NavItem = ({ label, path, Icon }: NavItemProps) => {
	return (
		<li className={styles['nav-item']}>
			<NavLink
				to={path}
				className={({ isActive }) =>
					`${styles['nav-link']} ${isActive ? styles['active'] : ''}`
				}
			>
				<Icon className={styles['icon']} />
				<span>{label}</span>
			</NavLink>
		</li>
	)
}

export default NavItem
