export const counterReducer = (state, action) => {
    
	switch (action.type) {
		case 'increment':
			// return state + 1;
			return { value: state.value + 1, clicks: state.clicks + 1 };
		case 'decrement':
			// return state - 1;
			return { value: state.value - 1, clicks: state.clicks + 1 };
		case 'reset':
			// return 0;
			return { value: 0, clicks: 0 };
		case 'random':
            // Cuando pulsamos el boton random, action.payload guarda el valor random generado
			return { value: action.payload, clicks: state.clicks + 1 };
	}
};
