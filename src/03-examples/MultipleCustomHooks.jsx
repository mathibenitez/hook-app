import { useCounter, useFetch } from '../Hooks';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {
	const { counter, increment } = useCounter(1);
	const { data, isLoading, hasError } = useFetch(
		`https://www.breakingbadapi.com/api/quotes/${counter}`
	);

	console.log(data);
	const { author, quote } = !!data && data[0];

	return (
		<>
			<h1>BreakingBad Quotes</h1>
			<hr />
			{/* {isLoading ? (
				<div className='alert alert-info text-center'>Loading...</div>
			) : (
				<blockquote className='blockquote text-end'>
					<p className='mb-1'>{author}</p>
					<footer className='blockquote-footer'>{quote}</footer>
				</blockquote>
			)} */}

			{isLoading ? (
				<LoadingQuote isLoading={isLoading} />
			) : (
				<Quote author={author} quote={quote} />
			)}

			{/* 
			{<LoadingQuote isLoading={isLoading} /> && (
				<Quote author={author} quote={quote} />
			)} */}

			<button
				disabled={isLoading}
				onClick={() => increment()}
				className='btn btn-primary'
			>
				Next quote
			</button>
		</>
	);
};
