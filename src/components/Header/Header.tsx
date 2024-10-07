import styles from './Header.module.scss'
import HeaderImg from '@images/header-img.png'
import HeaderImgMobile from '@images/header-mobile.png'
import Button from '../ui/Button/Button'

const Header = () => {
	return (
		<div className={styles['header']}>
			<div className={styles['header-content']}>
				<div className={styles['desk']}>
					<h1>Fish'N Nudge Slot</h1>
					<p>
						Reel em in and nudge em up! Hook a live one and win bass-cinating
						prizes on the open waters.
					</p>
				</div>
				<div className={styles['btn-container']}>
					<Button label='Play' />
				</div>
			</div>
			<picture className={styles['header-img']}>
				<source media='(max-width: 767px)' srcSet={HeaderImgMobile} />
				<img src={HeaderImg} alt={'Header Image'} />
			</picture>
		</div>
	)
}

export default Header
