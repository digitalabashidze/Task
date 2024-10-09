import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/Button/Button'
import styles from './ColorPicker.module.scss'

const DEFAULT_COLORS = {
	accent: '#189541',
	background1: '#00141e',
	background2: '#062733',
}

const ColorPickerPage = () => {
	// Initialize state using default colors or values from localStorage
	const [color1, setColor1] = useState(
		() => localStorage.getItem('color1') || DEFAULT_COLORS.accent
	)
	const [color2, setColor2] = useState(
		() => localStorage.getItem('color2') || DEFAULT_COLORS.background1
	)
	const [color3, setColor3] = useState(
		() => localStorage.getItem('color3') || DEFAULT_COLORS.background2
	)
	const navigate = useNavigate()

	// Update CSS variables on color change
	useEffect(() => {
		document.documentElement.style.setProperty('--color-accent', color1)
		document.documentElement.style.setProperty('--color-base', color2)
		document.documentElement.style.setProperty('--color-secondary', color3)
	}, [color1, color2, color3])

	// Save colors to localStorage and navigate to the home page
	const handleSave = () => {
		localStorage.setItem('color1', color1)
		localStorage.setItem('color2', color2)
		localStorage.setItem('color3', color3)
		navigate('/')
	}

	// Reset colors to default values
	const handleReset = () => {
		setColor1(DEFAULT_COLORS.accent)
		setColor2(DEFAULT_COLORS.background1)
		setColor3(DEFAULT_COLORS.background2)
		localStorage.setItem('color1', DEFAULT_COLORS.accent)
		localStorage.setItem('color2', DEFAULT_COLORS.background1)
		localStorage.setItem('color3', DEFAULT_COLORS.background2)
	}

	return (
		<div className={styles['container']}>
			<h1 className={styles['title']}>Customize Your Theme</h1>
			<div className={styles['picker-section']}>
				<ColorPicker
					label='Accent Color:'
					color={color1}
					onChange={setColor1}
				/>
				<ColorPicker
					label='Background Color 1:'
					color={color2}
					onChange={setColor2}
				/>
				<ColorPicker
					label='Background Color 2:'
					color={color3}
					onChange={setColor3}
				/>
			</div>

			<div className={styles['color-picker-btns']}>
				<Button
					label='Save Colors'
					size='large'
					variant='primary'
					onClick={handleSave}
				/>
				<Button
					label='Reset Colors'
					size='large'
					variant='outlined'
					onClick={handleReset}
				/>
			</div>
		</div>
	)
}

type ColorPickerProps = {
	label: string
	color: string
	onChange: (color: string) => void
}

const ColorPicker = ({ label, color, onChange }: ColorPickerProps) => (
	<div className={styles['picker']}>
		<label className={styles['label']}>{label}</label>
		<input
			type='color'
			value={color}
			onChange={e => onChange(e.target.value)}
		/>
	</div>
)

export default ColorPickerPage
