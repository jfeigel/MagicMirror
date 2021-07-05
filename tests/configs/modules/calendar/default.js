/* Magic Mirror Test config default calendar
 *
 * By Rodrigo Ramírez Norambuena https://rodrigoramirez.com
 * MIT Licensed.
 */
const configFactory = require('../../default.js')

const config = configFacory({
	timeFormat: 12,

	modules: [
		{
			module: "calendar",
			position: "bottom_bar",
			config: {
				calendars: [
					{
						maximumNumberOfDays: 10000,
						url: "http://localhost:8080/tests/configs/data/calendar_test.ics"
					}
				]
			}
		}
	]
});

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
