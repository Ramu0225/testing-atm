import "./inputField.css";

function InputField({ value }) {
	return (
		<input className="input" type="text" defaultValue={`£ ${value}`} key={value} autoFocus={true}></input>
	);
}

export default InputField;
