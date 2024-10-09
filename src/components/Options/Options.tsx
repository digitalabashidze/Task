import OptionItem from './OptionItem'
import DiamondIcon from '@images/icons/diamond.svg'
import LightningIcon from '@images/icons/Lightning.svg'
import styles from './Options.module.scss'

const options = [
	{
		icon: DiamondIcon,
		alt: 'Diamond icon',
		label: '12 Freespins',
		buttonLabel: 'Withdraw',
	},
	{
		icon: LightningIcon,
		alt: 'Lightning icon',
		label: '8 Flash',
		buttonLabel: 'Collect',
	},
	{
		icon: DiamondIcon,
		alt: 'Diamond icon',
		label: '34 Freespins',
		buttonLabel: 'Withdraw',
	},
	{
		icon: LightningIcon,
		alt: 'Lightning icon',
		label: 'Flash',
		buttonLabel: 'Collect',
	},
]

type OptionsProps = {
	limit?: number
}

const Options = ({ limit }: OptionsProps) => {
	const displayedOptions = limit ? options.slice(0, limit) : options

	return (
		<ul className={styles['options']}>
			{displayedOptions.map(option => (
				<OptionItem
					key={option.label}
					icon={option.icon}
					alt={option.alt}
					label={option.label}
					buttonLabel={option.buttonLabel}
				/>
			))}
		</ul>
	)
}

export default Options
