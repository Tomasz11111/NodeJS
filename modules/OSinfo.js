var os = require('os'); //moduł, którego uzywamy
var getUptime = require('./getUptime');
var colors = require('colors/safe');

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
				console.log (colors.grey('System:'), type);
				console.log (colors.red('Release:'), release);
				console.log (colors.blue('CPU model:'), cpu);
				console.log (colors.green('Uptime:'), uptime);
				console.log (colors.yellow('User name:'), userInfo.username);
				console.log (colors.white('Home dir:'), userInfo.homedir);
				
}
exports.print = getOSinfo; // kod służący do eksportu modułu, tak aby użyć go w innym pliku, print to nazwa eksportowanej funkcji
