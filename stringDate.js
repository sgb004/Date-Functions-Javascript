//Date form is 'YYYY-mm-dd HH:ii:ss' '2015-10-19 12:57:36'
function stringDate( date ){
	var date = date.split(' ');
	date[0] = date[0].split('-');
	date[1] = (date[1] == undefined) ? [0, 0, 0] : date[1].split(':');

	for(var i=0; i<2; i++){
		for(var j=0; j<3; j++){
			date[i][j] = (date[i][j] == undefined) ? 0 : parseInt(date[i][j]);
		}
	}

	date[0][1]--;

	if( date[0][1] < 0 ){ date[0][1] = 0; }
	if( date[0][2] < 1 ){ date[0][2] = 1; }

	date = new Date( date[0][0], date[0][1], date[0][2], date[1][0], date[1][1], date[1][2] );
	return date;
}
