import { useState } from 'react'
import Options from '../Options/Options'
import Button from '../ui/Button/Button'
import styles from './Aside.module.scss'

const Aside = () => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false)

	// Toggle function for showing more or fewer options
	const handleToggle = () => {
		setIsExpanded(prevState => !prevState)
	}

	return (
		<div className={styles['aside']}>
			<div className={styles['aside-title']}>
				<h3>Player’s Balance</h3>
			</div>

			<div className={styles['options-container']}>
				{/* Pass a limit to the Options component */}
				<Options limit={isExpanded ? undefined : 2} />
			</div>

			{/* Toggle Button for expanding or collapsing the options */}
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
