module.exports = {
	baseUrl: process.env.NODE_ENV === 'production'
	  ? './beta/' // prod
	  : '/', // dev
	 }