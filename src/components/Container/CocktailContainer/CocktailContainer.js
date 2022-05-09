import Image from 'next/image';
import Link from 'next/link';
import style from './CocktailContainer.module.scss';

const CocktailContainer = ({ cocktail }) => {
	return (
		<Link href={`/info/${cocktail.idDrink}`}>
			<a>
				<div key={cocktail.idDrink} className={style.container}>
					<Image
						src={cocktail.strDrinkThumb}
						width='150'
						height='150'
						priority={true}
					/>
					<h4>{cocktail.strDrink}</h4>
				</div>
			</a>
		</Link>
	);
};

export default CocktailContainer;
