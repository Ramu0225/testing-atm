import ArrowIcon from "../../components/icons/arrowIcon";
import MoneyBox from "../../components/moneyBox/moneyBox";
import "./moneytype.css";

function MoneyType({ value, result, backButtonHandler }) {
	const coinsAndNotes = Object.keys(result).map((v) => Number(v));
	const notes = coinsAndNotes.filter((m) => m >= 50);

	const bigCoins = coinsAndNotes.filter((m) => m < 50 && m >= 2 && m !== 10);

	const smallCoins = coinsAndNotes.filter((m) => m === 10 || m === 1);

	return (
		<div className="container">
			<div className="backButton" onClick={backButtonHandler}>
				<ArrowIcon />
			</div>
			<div className="count-container">
				<div className="heading">
					<p>Depositing</p>
				</div>
				<div className="input">£ {value}</div>
				{result && (
					<div className="moneyContainer">
						{!!notes.length && (
							<div className="note">
								{notes.map((n) => (
									<MoneyBox
										imageUrl={require("../../assets/500-bill.png")}
										moneyValue={n}
										numberOfNotesOrcoins={result[n]}
										key={n}
									/>
								))}
							</div>
						)}
						{!!bigCoins.length && (
							<div className="bigCoin">
								{bigCoins.map((n) => (
									<MoneyBox
										moneyValue={n}
										numberOfNotesOrcoins={result[n]}
										key={n}
									/>
								))}
							</div>
						)}
						{!!smallCoins.length && (
							<div className="smallCoin">
								{smallCoins.map((n) => (
									<MoneyBox
										moneyValue={n}
										numberOfNotesOrcoins={result[n]}
										key={n}
									/>
								))}
							</div>
						)}
					</div>
				)}
				<div className="text">
					<p>Thank you for using</p>
					<p>Enalyzer ATM</p>
				</div>
			</div>
		</div>
	);
}

export default MoneyType;
