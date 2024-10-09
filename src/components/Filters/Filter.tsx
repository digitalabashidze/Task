import Button from '../ui/Button/Button'
import styles from './Filter.module.scss'

type FilterProps = {
	currentFilter: string
	onFilterChange: (filter: string) => void
}

const filters = ['All Games', 'Slot', 'Fish Hunter', 'Wheel']

const Filter = ({
	currentFilter = 'All Games',
	onFilterChange,
}: FilterProps) => {
	return (
		<div className={styles['filter']}>
			{filters.map(filter => (
				<Button
					key={filter}
					label={filter}
					variant='secondary'
					size='large'
					className={`${styles['filter-btn']} ${
						currentFilter === filter ? styles.active : ''
					}`}
					onClick={() => onFilterChange && onFilterChange(filter)}
					isActive={currentFilter === filter}
				/>
			))}
		</div>
	)
}

export default Filter
