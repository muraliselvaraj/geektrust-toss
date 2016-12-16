var teams = ["Lengaburu", "Enchai"];
var input_1 = (process.argv[2]) ? process.argv[2] : null;
var input_2 = (process.argv[3]) ? process.argv[3] : null;

var generateRandomNumber = function(max, min){
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

var toss = function(inputs){
	var tosswonTeam = generateRandomNumber(1, 0);
	var weatherDay = ['clear', 'cloudy', 'day', 'night'];
	var bat_bowl_opts = ['bats', 'bowls', 'bats', 'bowls'];
	if (tosswonTeam == 1) {
		bat_bowl_opts = bat_bowl_opts.reverse();
	}
	var opts = [];
	for (var i in weatherDay) {
		if (weatherDay[i] === inputs[0]) {
			opts.push(bat_bowl_opts[i]);
		}

		if (weatherDay[i] === inputs[1]) {
			opts.push(bat_bowl_opts[i]);
		}
	}
	if (opts[0] === opts[1]) {
		return teams[tosswonTeam]+' wins toss and '+opts[0];
	} else {
		return teams[tosswonTeam]+' wins toss and bats';
	}
};

if (input_1 && input_1.indexOf(',') > -1) {
	var inputs = input_1.split(',');
	console.log(toss(inputs));
} else if(input_1 && input_2) {
	console.log(toss([input_1, input_2]));
} else {
	console.log('input is required');
}
