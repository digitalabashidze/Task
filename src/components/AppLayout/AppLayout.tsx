import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
import Aside from '../Aside/Aside'
import Nav from '../Nav/Nav'
import DotsIcon from '@images/icons/dots.svg'
import ColorWheelIcon from '../ui/icons/ColorWheelIcon'
import styles from './AppLayout.module.scss'

const AppLayout = () => {
	const navigate = useNavigate()

	// Navigate to the Color Picker page when ColorWheelIcon is clicked
	const handleClick = (): void => {
		navigate('color-picker')
	}

	return (
		<div className={styles['app-layout']}>
			<div className={styles['home']}>
				<div className='container'>
					{/* Color Picker Icon */}
					<ColorWheelIcon
						className={styles['color-picker-icon']}
						onClick={handleClick}
					/>

					{/* Main Layout */}
					<div className={styles['home-layout']}>
						<div className={styles['home-content']}>
							<div className={styles['wrapper']}>
								{/* Header Section */}
								<Header />

								{/* Navigation */}
								<div className={styles['home-navigation']}>
									<Nav />
									<div className={styles['icon']}>
										<img src={DotsIcon} alt='Dots Icon' />
									</div>
								</div>
							</div>

							{/* Main Outlet for Pages */}
							<Outlet />
						</div>

						{/* Aside Section */}
						<aside className={styles['home-aside']}>
							<Aside />
						</aside>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AppLayout
