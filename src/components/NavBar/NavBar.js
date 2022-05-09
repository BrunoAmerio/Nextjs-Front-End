import { useMainContext } from '../../context/mainContext';
import { searchDefault, randomSearch } from '../../utils/search';
import style from './NavBar.module.scss';

const NavBar = () => {
	const { setResponse, setFallBack } = useMainContext();

	const search = e => {
		const input = document.querySelector('#search').value;
		if (input.length) {
			searchDefault(input, setResponse, setFallBack);
		}
	};

	return (
		<div className={style.container}>
			<input
				type='text'
				placeholder='Search by name or ingredients'
				id='search'
			/>
			{/* Este boton ejecuta la busqueda */}
			<button onClick={search} className={style.searchButton}>
				Search
			</button>
			{/* Al apretar este boton debe de buscar un cocktail aleatorio */}
			<button
				className={style.randomButton}
				onClick={() => randomSearch(setResponse, setFallBack)}
			>
				¡Sorprendeme!
			</button>
		</div>
	);
};
export default NavBar;
