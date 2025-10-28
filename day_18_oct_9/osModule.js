const os = require('os');
const { clearScreenDown } = require('readline');

	console.log('Arch :', os.arch());
    console.log('NI :', os.networkInterfaces());
	console.log('Arch :', os.cpus().length);
	console.log('RAM freemem :', os.freemem()/1024/1024/1024 +' GB');
    console.log('release :', os.release());
    console.log('RAM totalmem :', os.totalmem()/1024/1024/1024 +' GB');
    console.log('type :', os.type());
    console.log('uptime :', os.uptime()/60/60);
    console.log('user :', os.userInfo().username);
    console.log('loadavg :', os.loadavg());
	console.log('hostname :', os.hostname());
	console.log('platform :', os.platform());
	console.log('tmpdir :', os.tmpdir());
