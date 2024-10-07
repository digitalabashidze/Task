import Aside from '../../components/Aside/Aside'
import Header from '../../components/Header/Header'
import styles from './Home.module.scss'

const Home = () => {
	return (
		<div className={styles['home']}>
			<div className='container'>
				<div className={styles['home-layout']}>
					<div className={styles['home-content']}>
						<Header />
					</div>

					<aside className={styles['home-aside']}>
						<Aside />
					</aside>
				</div>
			</div>
		</div>
	)
}

export default Home
