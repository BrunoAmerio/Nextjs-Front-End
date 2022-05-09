import CocktailContainer from './CocktailContainer/CocktailContainer';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';
import style from './Container.module.scss';

const Container = ({ array, fallback }) => {
	console.log('Container', fallback);
	return (
		<div className={style.container}>
			{fallback ? <LoaderSpinner /> : ''}
			{!array?.length
				? ''
				: array.map(recipe => (
						<CocktailContainer cocktail={recipe} key={recipe.idDrink + 2} />
				  ))}
		</div>
	);
};

export default Container;
