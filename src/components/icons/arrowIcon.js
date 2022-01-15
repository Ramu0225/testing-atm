import "./arrowIcon.css";

function ArrowIcon({ onClickHandler }) {
	const onClick = () => {
		if (onClickHandler) {
			onClickHandler();
		}
	};
	return (
		<button className="btn-back" onClick={() => onClick()}>
			<img src={require(`../../assets/back-arrow-icon.png`)} alt="back-arrow" />
		</button>
	);
}

export default ArrowIcon;
