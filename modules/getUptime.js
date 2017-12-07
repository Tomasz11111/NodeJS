var os = require('os');
function getUptime() {
	
	
	var totalTime = os.uptime().toFixed(0),
		mins = Math.floor(totalTime/60),
		remSecs = totalTime % 60,
		printResult = remSecs + ' sek.';
		if ( (mins > 0) && (mins < 60) ) {
			printResult = mins + 'min. ' + printResult; 
		}
		else if (mins >= 60) {
			var hrs = Math.floor(mins/60);
			var remMins = mins % 60;
			if(hrs <24) {
				printResult = hrs + 'godz. ' + remMins + 'min. ' + printResult;

			}
			else if(hrs >=24) {
				var days = Math.floor(hrs/24),
					remHrs = hrs % 24,
					daysString;
				if (days === 1) {
					daysString = ' dzień';
				}
				else {
					daysString = ' dni';
				}
				printResult = days + '' + daysString + ' ' + remHrs + ' godz. ' + remMins + ' min. ' + printResult;
			}
		}
		else {
			printResult = totalTime + ' sek.';
		}

	return printResult;
	}


exports.print = getUptime;
