import { React } from 'react';
// import { memo } from 'react';

const Small = ({ value }) => {
	console.log('Noooooo :(');

	return <small>{value}</small>;
};

export default React.memo(Small);
