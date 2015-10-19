function dateString( date ){
	var actualDate = new Date(); //Replace for your actual Date
	var str = '';
	var timeRemaining = 0;

	actualDate = actualDate.getTime(); //Preferably the original date must be in milliseconds
	date = date.getTime();

	timeRemaining = actualDate - date;

	if( timeRemaining <  3600000){
		timeRemaining = parseInt(timeRemaining / 60000);
		str = 'Hace '+timeRemaining+' min';
	}else{
		var actualMins = actualDate / 3600000;
		var dateMins = date/ 3600000;
		var dateRemaining, dateDate, dateHours, dateMinutes;
		var months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

		actualDate = new Date(actualDate);
		date = new Date(date);

		dateDate = date.getDate();
		dateHours = date.getHours();
		dateMinutes = date.getMinutes();

		dateRemaining = actualDate.getDate() - dateDate;

		timeRemaining = actualMins - dateMins;

		if( timeRemaining < 24 ){
			timeRemaining = parseInt(timeRemaining);
			str = 'Hace '+timeRemaining+' h';
		}else if( timeRemaining < 48 && dateRemaining == 1 ){
			str = 'Ayer a las '+dateHours+':'+dateMinutes;
		}else{
			str = dateDate+' de '+months[date.getMonth()]+' a las '+dateHours+':'+dateMinutes;
		}
	}
	return str;
}
