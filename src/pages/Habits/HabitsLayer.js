import axios from "axios";
import styled from "styled-components";

export default function HabitsLayer({
	habitName,
	habitDays,
	habitId,
	week,
	habitsURL,
	config,
	reloadContent,
	setReloadContent,
}) {
	function deleteHabit() {
		const check = window.confirm("Tem certeza que deseja deletar esse hábito?");
		if (check) {
			axios
				.delete(`${habitsURL}/${habitId}`, config)
				.then((res) => {
					setReloadContent(!reloadContent);
				})
				.catch((error) => {
					console.log(error.response.data.message);
				});
		}
	}

	return (
		<Container>
			<div>
				{habitName}
				<ion-icon name="trash-outline" onClick={deleteHabit}></ion-icon>
			</div>

			<Wrapper>
				{week.map((day, index) => {
					switch (day) {
						case 0:
							return (
								<DaySquare
									className={habitDays.includes(day) ? "selected" : "day"}
									key={index}
								>
									D
								</DaySquare>
							);
						case 1:
						case 5:
						case 6:
							return (
								<DaySquare
									className={habitDays.includes(day) ? "selected" : "day"}
									key={index}
								>
									S
								</DaySquare>
							);
						case 2:
							return (
								<DaySquare
									className={habitDays.includes(day) ? "selected" : "day"}
									key={index}
								>
									T
								</DaySquare>
							);
						case 3:
						case 4:
							return (
								<DaySquare
									className={habitDays.includes(day) ? "selected" : "day"}
									key={index}
								>
									Q
								</DaySquare>
							);
						default:
					}
				})}
			</Wrapper>
		</Container>
	);
}
const Container = styled.div`
	div {
		display: flex;
		justify-content: space-between;
		margin: 0 10px;

		ion-icon:hover {
			cursor: pointer;
		}
	}
	/*     
    span {
        min-width: 30px;
        min-height: 30px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        color: #DBDBDB;
        font-size: 20px;
        margin: 0 3px;
        display: flex;
        justify-content: center;
        align-items: center;
    } */

	.selected {
		background-color: #cfcfcf;
		color: #ffffff;
	}

	background-color: #ffffff;
	margin: 15px 0;
	height: 91px;
	max-height: 91px;
	border-radius: 5px;
	font-size: 20px;
	line-height: 25px;
	color: #666666;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

const Wrapper = styled.span`
	display: flex;
	margin: 0px 10px;
`;

const DaySquare = styled.span`
	min-width: 30px;
	min-height: 30px;
	border-radius: 5px;
	border: 1px solid #d4d4d4;
	color: #dbdbdb;
	font-size: 20px;
	margin: 0 5px 0 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;
