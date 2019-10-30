import React from 'react';

function RunnerCard({runner}) {
	return (
		<div className="runnerContainer">
			<div className="runnerCard">
				<h1>Name:{runner.name}</h1>
				<h1>Country: {runner.country}</h1>
				<h1>Searches: {runner.searches}</h1>
			</div>
		</div>
	);
}
export default RunnerCard;

