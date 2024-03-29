import styled from "styled-components";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import HabitsPercentageContext from "../contexts/HabitsPercentageContext";

function Footer() {
	const navigate = useNavigate();
	const { percentage } = useContext(HabitsPercentageContext);

	return (
		<Wrapper>
			<p onClick={() => navigate("/habitos")}>Hábitos</p>
			<div onClick={() => navigate("/hoje")}>
				<CircularProgressbar
					value={percentage}
					text={`Hoje`}
					background
					backgroundPadding={6}
					styles={buildStyles({
						backgroundColor: "#52B6FF",
						textColor: "#fff",
						pathColor: "#fff",
						textSize: "18px",
						trailColor: "transparent",
					})}
				/>
			</div>
			<p onClick={() => navigate("/historico")}>Histórico</p>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: fixed;
	left: 0px;
	bottom: 0px;
	width: 100%;
	height: 70px;
	background-color: #ffffff;
	z-index: 10;

	div {
		width: 91px;
		height: 91px;
		margin-bottom: 35px;
		border-radius: 50%;
	}

	div:hover {
		cursor: pointer;
	}

	p {
		font-size: 18px;
		line-height: 22.47px;
		color: #52b6ff;
	}

	p:hover {
		cursor: pointer;
	}
`;

export default Footer;
