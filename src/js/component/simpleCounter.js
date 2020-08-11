import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// Funcion Seconds Counter que genera el contador
export function SecondsCounter(props) {
	return (
		<div className="bigCounter">
			<div className="counterClock">
				<i className="far fa-clock" />
			</div>
			<div className="four">{props.digitFour % 10}</div>
			<div className="three">{props.digitThree % 10}</div>
			<div className="two">{props.digitTwo % 10}</div>
			<div className="one">{props.digitOne % 10}</div>
		</div>
	);
}

SecondsCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};
