(function() {
	console.log('💧', 'https://www.youtube.com/watch?v=ARC1w1WWxGY');

	const options = {
		// De eenheden van je doel
		units: 'ml',
		// De hoeveelheid van het dagelijkse doel.
		dailyGoal: 1539,
		// Of je met localStorage of een API wil werken
		mode:'local',
		// Een object met classes voor:
		domRefs: {
			// het huidige percentage.
			percentage: 'js-amount',
			// De tijdstippen 
			timeStampHolder: 'js-time-stamps',
			// De 'voeg toe' buton
			addButton: 'js-log',
			currentGoal: 'js-goal',
			currentUnits: 'js-units'
		},
		afterUpdate: function(newPercentage) {
			console.log('It has been updated!');
		}
	};

	document.addEventListener('DOMContentLoaded', () => {
		new ProgressTracker(options);
	});
})();
