import "./moneyBox.css";
import "../../assets/500-bill.png"

function MoneyBox({ moneyValue, numberOfNotesOrcoins, imageUrl }) {
	return (
		<div className="moneybox">
			{imageUrl && <img src={imageUrl} alt="money-note" />}
			{!imageUrl && <span className="circle"></span>}{`${numberOfNotesOrcoins} x ${moneyValue}`}
		</div>
	);
}

export default MoneyBox;
