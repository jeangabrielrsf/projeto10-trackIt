import axios from "axios";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import DayTotalHabitsContext from "../../contexts/DayTotalHabitsContext";
import HabitsDoneContext from "../../contexts/HabitsDoneContext";
import HabitsPercentageContext from "../../contexts/HabitsPercentageContext";
import TokenContext from "../../contexts/TokenContext";
import UserProfileImageContext from "../../contexts/UserProfileImageContext";
import Footer from "../../GlobalStyled/Footer";
import PageTitle from "../../GlobalStyled/PageTitle";
import Topo from "../../GlobalStyled/Topo";
import TodayHabit from "../../components/TodayHabit/TodayHabit";

export default function Today() {
	const { userToken } = useContext(TokenContext);
	const { userImage } = useContext(UserProfileImageContext);
	const { totalHabits, setTotalHabits } = useContext(DayTotalHabitsContext);
	const todayURL =
		"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
	const config = {
		headers: {
			Authorization: `Bearer ${userToken}`,
		},
	};
	const { habitsDone, setHabitsDone } = useContext(HabitsDoneContext);
	const [reloadIcons, setReloadIcons] = useState(false);
	const { percentage, setPercentage } = useContext(HabitsPercentageContext);

	useEffect(() => {
		axios
			.get(todayURL, config)
			.then((result) => {
				setTotalHabits(result.data);
				setHabitsDone(result.data.filter((item) => item.done === true));
				if (totalHabits.length === 0) {
					setPercentage(0);
				} else {
					setPercentage(
						Number(Math.ceil((habitsDone.length / totalHabits.length) * 100))
					);
				}
			})
			.catch((error) => {
				console.log(error.response.data);
			});
	}, [reloadIcons, percentage]);

	function showDayName() {
		require("dayjs/locale/pt-br");
		dayjs.locale("pt-br");
		let weekday = dayjs().locale("pt-br").format("dddd, DD/MM");
		weekday = weekday.replace(weekday[0], weekday[0].toUpperCase());
		return weekday;
	}

	return (
		<>
			<Topo source={userImage} />
			<Container>
				<PageTitle title={showDayName()} />
				<SubTitle percentage={percentage}>
					{percentage > 0
						? `${percentage}% dos hábitos concluídos`
						: "Nenhum hábito concluído ainda"}
				</SubTitle>
				<div>
					{totalHabits.map((dayHabit, index) => {
						return (
							<TodayHabit
								key={index}
								dayHabit={dayHabit}
								habitsDone={habitsDone}
								setHabitsDone={setHabitsDone}
								config={config}
								reloadIcons={reloadIcons}
								setReloadIcons={setReloadIcons}
								totalHabits={totalHabits}
							/>
						);
					})}
				</div>
			</Container>
			<Footer percentage={percentage} />
		</>
	);
}

const Container = styled.div`
	width: 100%;
	padding: 90px 20px;
`;

const SubTitle = styled.p`
	color: ${(props) => (props.percentage > 0 ? "#8FC549" : "#BABABA")};
	margin-bottom: 25px;
`;
