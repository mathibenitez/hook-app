import { useState } from 'react';
import { useFetch } from '../Hooks/useFetch';

export const MultipleCustomHooks = () => {
	const [value, setValue] = useState('');

	const [quoteId, setQuoteId] = useState('');

	const { data, isLoading, hasError } = useFetch(
		`https://www.breakingbadapi.com/api/quotes/${quoteId}`
	);

	// console.log(data);
	const { author, quote } = !!data && data[0];

	const onChangeValue = (value) => {
		setValue(value);
	};

	const onAddQuote = (value) => {
		setQuoteId(value);
	};

	return (
		<>
			<h1>BreakingBad Quotes</h1>
			<hr />

			{isLoading ? (
				<div className='alert alert-info text-center'>Loading...</div>
			) : (
				<blockquote className='blockquote text-end'>
					<p className='mb-1'>{author}</p>
					<footer className='blockquote-footer'>{quote}</footer>
				</blockquote>
			)}

			<input
				onChange={(e) => {
					onChangeValue(e.target.value);
				}}
				className='mt-100'
			/>
			<button onClick={() => onAddQuote(value)} className='btn, btn-primary'>
				Next quote
			</button>
		</>
	);
};
