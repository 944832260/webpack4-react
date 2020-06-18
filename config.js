const proxy = [
	{ path: ['/api/v1'], target: 'http://192.168.11.193:9999' }
];

module.exports = {
	ip: "0.0.0.0",
	port: 8002,
	proxy
};
