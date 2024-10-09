import NavItem from './NavItem'
import ClubIcon from '../ui/icons/ClubIcon'
import CupIcon from '../ui/icons/CupIcon'
import StarIcon from '../ui/icons/StarIcon'
import styles from './Nav.module.scss'

const navItems = [
	{ icon: ClubIcon, label: 'Games', path: '/' },
	{ icon: CupIcon, label: 'Leaderboards', path: 'leaderboards' },
	{ icon: StarIcon, label: 'Missions', path: 'missions' },
]

const Nav = () => {
	return (
		<nav className={styles['navigation']}>
			<ul>
				{navItems.map(item => (
					<NavItem
						key={item.label}
						Icon={item.icon}
						label={item.label}
						path={item.path}
					/>
				))}
			</ul>
		</nav>
	)
}

export default Nav
