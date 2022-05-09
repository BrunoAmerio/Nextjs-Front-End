import axios from 'axios';
import { useMainContext } from '../context/mainContext';

export const searchDefault = (data, dataSetter, fallbackSetter) => {
	dataSetter({});
	const obj = {};
	fallbackSetter(true);
	axios
		.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${data}`)
		.then(async res => {
			console.log('Primera busqueda', res.data);
			if (res.data.drinks) obj.drinks = [...res.data.drinks];

			const secondResult = await axios.get(
				`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${data}`
			);
			console.log('Segunda busqueda', secondResult.data);
			if (secondResult.data.drinks)
				obj.ingredients = [...secondResult.data.drinks];

			//Evaluamos en caso de que no se encuentre nada, devolvemos una arreglo vacío
			console.log('Esta es lo encontrado', obj);
			dataSetter(obj);
			fallbackSetter(false);
		});
};

export const randomSearch = (dataSetter, fallbackSetter) => {
	dataSetter({});
	fallbackSetter(true);
	axios
		.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
		.then(res => {
			console.log(res.data);
			dataSetter({ random: res.data.drinks });
			fallbackSetter(false);
		});
};
