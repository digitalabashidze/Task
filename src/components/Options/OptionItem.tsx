import Button from '../ui/Button/Button'
import styles from './OptionItem.module.scss'

export type OptionItemProps = {
	icon: string
	alt: string
	label: string
	buttonLabel: string
}

const OptionItem = ({ icon, alt, label, buttonLabel }: OptionItemProps) => {
	return (
		<li className={styles['option-item']}>
			<div className={styles['option-item-desk']}>
				<img src={icon} alt={alt} />
				<span>{label}</span>
			</div>
			<div className={styles['option-item-btn']}>
				<Button label={buttonLabel} variant='outlined' />
			</div>
		</li>
	)
}

export default OptionItem
