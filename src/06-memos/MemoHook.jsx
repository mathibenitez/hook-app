import { useState, useMemo } from 'react';
import { useCounter } from '../Hooks';

const heavyStuff = (iterationNumber = 100) => {
	for (let i = 0; i < iterationNumber; i++) {
		console.log('Go go go');
	}

	return `${iterationNumber} interations finished.`;
};

export const MemoHook = () => {
	const { counter, increment } = useCounter(200);
	const [show, setShow] = useState(true);

	const memorizeValue = useMemo(() => heavyStuff(counter), [counter]);

	return (
		<>
			<h1>
				Counter: <small>{counter}</small>
			</h1>
			<hr />

			<h4>{memorizeValue}</h4>

			<button className='btn btn-primary' onClick={() => increment()}>
				+1
			</button>

			<button
				className='btn btn-outline-primary'
				onClick={() => setShow(!show)}
			>
				Show/Hide {JSON.stringify(show)}
			</button>
		</>
	);
};
