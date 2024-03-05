import { useReducer } from 'react';
import { counterReducer } from '../../reducers/counterReducer';

const Button = ({ dispatch }) => {
	return <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>;
};

const Counter = () => {
	// const [counter, dispatch] = useReducer(counterReducer, 0);
	const [counter, dispatch] = useReducer(counterReducer, {
		value: 0,
		clicks: 0
	});

	return (
		<>
			<h1>Counter: {counter.value}</h1>
			<h1>Clicks: {counter.clicks}</h1>

			<button onClick={() => dispatch({ type: 'increment' })}>+1</button>
			<button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
			{/* <button onClick={() => dispatch({ type: 'decrement' })}>-1</button> */}
			<Button dispatch={dispatch} />
			<button
				onClick={() =>
					dispatch({ type: 'random', payload: Math.round(Math.random() * 100) })
				}
			>
				Counter Random
			</button>
		</>
	);
};

export default Counter;
