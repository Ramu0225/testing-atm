import "./dialpadButton.css";

function DialPadButton({ keypadvalue, onClickHandler }) {
	return (
		<button className="btn" onClick={() => onClickHandler(keypadvalue)}>
			{keypadvalue}
		</button>
	);
}

export default DialPadButton;
