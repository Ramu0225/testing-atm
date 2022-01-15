import { useState } from "react";
import "./homepage.css";
import DialPadButton from "../../components/dialpad/dialpadButton";
import InputField from "../../components/inputfield/inputField";
import MoneyType from "../moneytypepage/moneyTypePage";
import ArrowIcon from "../../components/icons/arrowIcon";

const keyPadValues = [...new Array(9)];

function Homepage() {
	const [value, setValue] = useState("");
	const [showMoneyView, setShowMoneyView] = useState(false);
	const [result, setResult] = useState();

	const onButtonClick = (e) => {
		setValue(`${value}${e}`);
	};

	const onClear = (e) => {
		const newValue = value.slice(0, -1);
		setValue(newValue);
	};

	const calculateHandler = () => {
		const result = getMultiplies(value);
		setResult(result);
		setShowMoneyView(true);
	};
	const getMultiplies = (value) => {
		let result = {};
		const moneyTypes = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
		moneyTypes.forEach((money) => {
			let mulValue = Math.floor(value / money);
			if (mulValue >= 1) {
				result[money] = mulValue;
				value %= money;
			}
		});
		return result;
	};

	const backButtonHandler = () => {
		setShowMoneyView(false);
	};

	return (
		<div className="homepage">
			{!showMoneyView && (
				<div className="cal-container">
					<div className="heading">
						<p>Select amount</p>
					</div>
					<InputField value={value} />
					<div className="keypad-container">
						{keyPadValues.map((k, i) => (
							<DialPadButton
								key={i}
								keypadvalue={i + 1}
								onClickHandler={onButtonClick}
							/>
						))}
						<ArrowIcon onClickHandler={onClear} />
						<DialPadButton keypadvalue={"0"} onClickHandler={onButtonClick} />
					</div>
					<button
						className={`submit ${value ? "" : "disabled"}`}
						onClick={calculateHandler}
					>
						submit
					</button>
				</div>
			)}
			{showMoneyView && (
				<MoneyType
					value={value}
					result={result}
					backButtonHandler={backButtonHandler}
				/>
			)}
		</div>
	);
}

export default Homepage;
