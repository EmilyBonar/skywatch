import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [position, setPosition] = useState({
		coords: {
			accuracy: 6026,
			altitude: 0,
			altitudeAccuracy: 0,
			heading: null,
			latitude: 30.2,
			longitude: -97.7,
			speed: null,
		},
		timestamp: 0,
	} as GeolocationPosition);
	useEffect(() => {
		navigator.geolocation.getCurrentPosition((pos) => {
			setPosition(pos);
		});
		console.log("got pos");
	}, []);
	const [time, setTime] = useState(0);
	useEffect(() => {
		let d = new Date();
		setTime(Math.floor((d.getTime() - d.setHours(0, 0, 0, 0)) / 1000));
	});
	useEffect(() => {
		document.documentElement.style.setProperty("--start-time", `-${time}s`);
		console.log(`${time}s`);
	});

	return (
		<div className="App">
			<div className="Sun"></div>
			<div className="Moon"></div>
			<Cloud />
			<div className="Ground"></div>
		</div>
	);
}

export default App;

function Cloud() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			className="cloud"
		>
			<path
				d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
				transform="matrix(.77976 0 0 .78395-299.99-418.63)"
				fill="white"
			/>
		</svg>
	);
}
