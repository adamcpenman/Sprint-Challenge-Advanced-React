import React from 'react';

function RunnerCard(props) {
	return (
		<div className="runnerContainer">
			<div className="runnerCard">
				<h1>Name:{props.name}</h1>
				<h1>Country: {props.country}</h1>
				<h1>Searches: {props.searches}</h1>
			</div>
		</div>
	);
}
export default RunnerCard;

