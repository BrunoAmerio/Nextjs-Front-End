import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import style from '../../styles/Info.module.scss';

const Info = ({ cocktail, instructions }) => {
	const router = useRouter();
	return (
		<div className={style.container}>
			<button className={style.backButton} onClick={() => router.push('/')}>
				Back
			</button>
			<Head>
				<title>Info {cocktail.strDrink}</title>
			</Head>
			<Image
				src={cocktail?.strDrinkThumb}
				width='300'
				height='300'
				priority={true}
			/>
			<h1>{cocktail.strDrink}</h1>
			<p>
				Category: <b>{cocktail.strCategory}</b>
			</p>

			<h3>Ingredients</h3>
			<ul className={style.ingredients}>
				{instructions.map(item => {
					return <li key={item}>{item}</li>;
				})}
			</ul>

			<div className={style.instructions}>
				<h3>Instructions</h3>
				<h5>{cocktail.strInstructions}</h5>
			</div>
		</div>
	);
};

Info.getInitialProps = async ctx => {
	const instructions = [];
	const { id } = ctx.query;
	const response = await axios
		.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
		.then(res => res.data.drinks[0]);

	for (let i = 1; i < 15; i++) {
		if (response[`strIngredient${i}`])
			instructions.push(response[`strIngredient${i}`]);
	}

	console.log(instructions);
	return { cocktail: response, instructions: instructions };
};

export default Info;
