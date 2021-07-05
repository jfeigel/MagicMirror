/* Magic Mirror Test config default weather
 *
 * By fewieden https://github.com/fewieden
 * MIT Licensed.
 */
const configFactory = require('../../default.js')

const config = configFacory({
	timeFormat: 12,

	modules: [
		{
			module: "weather",
			position: "bottom_bar",
			config: {
				location: "Munich",
				apiKey: "fake key",
				initialLoadDelay: 3000
			}
		}
	]
});

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
