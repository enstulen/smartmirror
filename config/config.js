var config = {
	address: "localhost", 	// Address to listen on, can be:
	// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	// - another specific IPv4/6 to listen on a specific interface
	// - "0.0.0.0", "::" to listen on any interface
	// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
	// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
	// or add a specific IPv4 of 192.168.1.5 :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "nb",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
		},
		{
			module: "calendar",
			header: "Kalender",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/stulenmorten%40gmail.com/private-c4b7905a451c9d257be9a7425d0d0f7f/basic.icshttps://calendar.google.com/calendar/ical/stulenmorten%40gmail.com/private-c4b7905a451c9d257be9a7425d0d0f7f/basic.ics"
					},
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/mst%40capraconsulting.no/private-62f3e08f7182cc1946074804203f3da2/basic.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third",
			config: {
				compliments: {
					anytime: [
						"Hey there sexy!",
						"Assa..du ser DIGG ut",
						"WOW 🔥",
						"OMG 😍"
					],
					day_sunny: [
						"Fint vær i dag! 🌞",
						"Kom deg ut og nyt dagen! 🌤",
					],
					morning: [
						"Morn, kjekken!",
						"Ha en fin dag i dag!",
						"Sovet godt eller, bro?",
						"Du er kickass, ta tagen med storm!"
					],
					afternoon: [
						"Looking good, bruh!!",
						"Du ser fantastisk ut 👌🏻",
						"Daaymn 🔥!",
						"Du er on fire 🔥"
					],
					evening: [
						"På tide å legge seg?",
						"Sov godt!",
						"Natta!"
					],
					"....-01-01": [
						"Godt nyttår! 🥳"
					]
				}
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Oslo",
				locationID: "", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "b5439293d85956e817090c6549598c4d",
				
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Værmelding for",
			config: {
				location: "Oslo",
				locationID: "", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "b5439293d85956e817090c6549598c4d"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "VG",
						url: "https://www.vg.no/rss/feed/forsiden/"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: "MMM-Entur-tavle",
			position: "top_right",
			config: {
				stopId: '6056',
				stopType: 'StopPlace',
				numResults: 5,
				showName: true,
				highlightRealtime: true,
    }
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
