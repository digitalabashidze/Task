import Button from '../ui/Button/Button'
import HeaderImg from '@images/header-img.png'
import HeaderImgMobile from '@images/header-mobile.png'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles['header']}>
			<div className={styles['header-content']}>
				<div className={styles['desk']}>
					{/* Heading and description */}
					<h1>Fish'N Nudge Slot</h1>
					<p>
						Reel 'em in and nudge 'em up! Hook a live one and win bass-cinating
						prizes on the open waters.
					</p>
				</div>

				{/* Play Button */}
				<div className={styles['btn-container']}>
					<Button label='Play' variant='primary' />
				</div>
			</div>

			{/* Responsive Image for header */}
			<picture className={styles['header-img']}>
				<source media='(max-width: 767px)' srcSet={HeaderImgMobile} />
				<img src={HeaderImg} alt='Fishing slot machine banner' />
			</picture>
		</header>
	)
}

export default Header
