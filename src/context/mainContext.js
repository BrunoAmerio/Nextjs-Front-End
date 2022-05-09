import { createContext, useContext, useState } from 'react';

const MainContext = createContext();

export const useMainContext = () => {
	return useContext(MainContext);
};

export const ContextProvider = ({ children }) => {
	const [response, setResponse] = useState({ drinks: [], ingredients: [] });
	const [fallback, setFallBack] = useState(false);

	return (
		<MainContext.Provider
			value={{ response, setResponse, setFallBack, fallback }}
		>
			{children}
		</MainContext.Provider>
	);
};
