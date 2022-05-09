import Head from 'next/head';
import { useMainContext } from '../context/mainContext';

//Componentes
import NavBar from '../components/NavBar/NavBar';
import Container from '../components/Container/Container';
import style from '../styles/Home.module.scss';

export default function Home() {
	const { response, fallback } = useMainContext();
	console.log(response);
	return (
		<div className={style.container}>
			<Head>
				<title>The cocktail Search - Home</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={style.main}>
				<NavBar />

				{response.random ? (
					<div className={style.randomContainer}>
						<h2>Random Drink</h2>
						<Container array={response.random} />
					</div>
				) : (
					<div className={style.resultContainer}>
						<div className={style.drinks}>
							<h2>Drinks</h2>
							<Container array={response.drinks} fallback={fallback} />
						</div>

						<div className={style.withContain}>
							<h2>Drinks that contain it</h2>
							<Container array={response.ingredients} fallback={fallback} />
						</div>
					</div>
				)}
			</main>
		</div>
	);
}
