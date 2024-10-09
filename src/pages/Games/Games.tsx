import { useMemo, useState } from 'react'
import Filter from '../../components/Filters/Filter'
import GoldenCatch from '@images/games/golden-catch.png'
import BassBoss from '@images/games/bass-boss.png'
import ZeusIII from '@images/games/zeus-III.png'
import Gemza from '@images/games/gemza.png'
import RedHotLuck from '@images/games/red-hot-luck.png'
import WildVoodoo from '@images/games/wild-voodoo.png'
import styles from './Games.module.scss'

// Example games data
const gamesData = [
	{ id: 1, name: 'Golden Catch', img: GoldenCatch, type: 'Slot' },
	{ id: 2, name: 'Bass Boss', img: BassBoss, type: 'Fish Hunter' },
	{ id: 3, name: 'Zeus III', img: ZeusIII, type: 'Slot' },
	{ id: 4, name: 'Gemza', img: Gemza, type: 'Wheel' },
	{ id: 5, name: 'Red Hot Luck', img: RedHotLuck, type: 'Slot' },
	{ id: 6, name: 'Wild Voodoo', img: WildVoodoo, type: 'Fish Hunter' },
]

const Games = () => {
	const [currentFilter, setCurrentFilter] = useState<string>('All Games')

	// Filter games based on the current filter
	const filteredGames = useMemo(
		() =>
			gamesData.filter(game => {
				if (currentFilter === 'All Games') return true
				return game.type === currentFilter
			}),
		[currentFilter]
	)

	return (
		<main className={styles['games']}>
			<h2>Games</h2>

			<Filter currentFilter={currentFilter} onFilterChange={setCurrentFilter} />

			<div className={styles['games-container']}>
				{filteredGames.map(game => (
					<div key={game.id} className={styles['game-item']}>
						<img src={game.img} alt={game.name} />
					</div>
				))}
			</div>
		</main>
	)
}

export default Games
