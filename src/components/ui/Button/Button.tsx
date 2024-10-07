import styles from './Button.module.scss'

type ButtonProps = {
	label: string
	onClick?: () => void
	className?: string
	type?: 'button' | 'submit' | 'reset'
	size?: 'small' | 'medium' | 'large'
	variant?: 'primary' | 'secondary' | 'outlined'
	isActive?: boolean
}

const Button = ({
	label,
	onClick,
	type = 'button',
	size = 'medium',
	variant = 'primary',
	isActive = false,
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
		</button>
	)
}

export default Button
