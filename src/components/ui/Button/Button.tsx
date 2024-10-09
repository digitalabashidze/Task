import ArrowIcon from '../icons/ArrowIcon'
import styles from './Button.module.scss'

type ButtonProps = {
	label: string
	onClick?: () => void
	className?: string
	type?: 'button' | 'submit' | 'reset'
	size?: 'small' | 'medium' | 'large'
	variant?: 'primary' | 'secondary' | 'outlined' | 'see-more'
	isActive?: boolean
	isOpen?: boolean
}

const Button = ({
	label,
	onClick,
	type = 'button',
	size = 'medium',
	variant = 'primary',
	isActive = false,
	isOpen = false,
}: ButtonProps) => {
	return (
		<button
			className={`${styles.btn} ${styles[`btn--${variant}`]} ${
				styles[`btn--${size}`]
			} ${isActive ? styles.active : ''}`}
			type={type}
			onClick={onClick}
		>
			{label}
			{variant === 'see-more' && (
				<ArrowIcon className={`${styles.icon} ${isOpen ? styles.open : ''}`} />
			)}
		</button>
	)
}

export default Button
