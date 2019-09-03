$('section').fireworks({
	sound: false, 
	opacity: 1,
	width: '100%',
	height: '100%',
});

function showRemTime() {
	var today = new Date();
	var eventDate = new Date(2020,0,1,0,0,0,0);
	var currentTime = today.getTime();
	var eventTime = eventDate.getTime();
	var remTime = eventTime - currentTime;
	var sec = Math.floor(remTime/1000);
	var min = Math.floor(sec/60);
	var hrs = Math.floor(min/60);
	var days = Math.floor(hrs/24);
	var mths = Math.floor(days/30.47);


	hrs %= 24;
	min %= 60;
	sec %= 60;
	days = Math.round(days % 30.47);

	hrs = (hrs == 0 ) ? hrs = 12 : hrs;
	hrs = (hrs < 10) ? '0' + hrs : hrs;
	min = (min < 10) ? '0' + min : min;
	sec = (sec < 10) ? '0' + sec : sec;
	days = (days < 10) ? '0' + days : days;
	mths = (mths < 10) ? '0' + mths : mths;

	document.getElementById('months').innerHTML = mths;
	document.getElementById('days').innerHTML = days;
	document.getElementById('hours').innerHTML = hrs;
	document.getElementById('minutes').innerHTML = min;
	document.getElementById('seconds').innerHTML = sec;	
	setTimeout(showRemTime, 1000);
}

	showRemTime();
