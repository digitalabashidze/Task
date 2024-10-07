import { useState } from 'react'
import Options from '../Options/Options'
import Button from '../ui/Button/Button'
import styles from './Aside.module.scss'

const Aside = () => {
	const [isExpanded, setIsExpanded] = useState(false)

	const handleToggle = () => {
		setIsExpanded(!isExpanded)
	}

	return (
		<div className={styles['aside']}>
			<div className={styles['aside-title']}>
				<h3>Player’s Balance</h3>
			</div>

			<div className={styles['options-container']}>
				<Options limit={isExpanded ? undefined : 2} />
			</div>

			<Button
				label={isExpanded ? 'See Less' : 'See More'}
				variant='see-more'
				isOpen={isExpanded}
				onClick={handleToggle}
			/>
		</div>
	)
}

export default Aside
