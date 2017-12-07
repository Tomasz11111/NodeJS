var os = require('os'); //moduł, którego uzywamy
	getUptime = require('./getUptime');

function getOSinfo() {
			var type = os.type(),
				release = os.release(),
				cpu = os.cpus()[0].model,
				uptime = getUptime.print(),
				userInfo = os.userInfo();
				if (type === 'Darwin') {
					type = 'OSX';
				}
				else if (type === 'Windows_NT') {
					type = 'Windows'
				}
				console.log ('System:', type);
				console.log ('Release:', release);
				console.log ('CPU model:', cpu);
				console.log ('Uptime:', uptime);
				console.log ('User name:', userInfo.username);
				console.log ('Home dir:', userInfo.homedir);
				
}
exports.print = getOSinfo; // kod służący do eksportu modułu, tak aby użyć go w innym pliku, print to nazwa eksportowanej funkcji
