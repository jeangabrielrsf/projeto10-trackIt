import { useContext } from "react";
import styled from "styled-components";
import UserProfileImageContext from "../../contexts/UserProfileImageContext";
import PageTitle from "../../GlobalStyled/PageTitle";
import Topo from "../../GlobalStyled/Topo";
import Footer from "../../GlobalStyled/Footer";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Historic() {
	const { userImage } = useContext(UserProfileImageContext);
	const [value, setValue] = useState(new Date());

	return (
		<>
			<Topo source={userImage} />
			<Wrapper>
				<PageTitle title={"Histórico"} />
				<CalendarContainer>
					<Calendar className="calendar" onChange={setValue} value={value} />
				</CalendarContainer>
			</Wrapper>
			<Footer />
		</>
	);
}

const Wrapper = styled.div`
	padding: 90px 20px;
	background-color: #f2f2f2;
	height: 100%;
	p {
		font-size: 18px;
		line-height: 22.47px;
		color: #666666;
		margin: 10px 0px;
	}
`;

const CalendarContainer = styled.div`
	margin-top: 20px;
	display: flex;
	justify-content: center;

	.calendar {
		border-radius: 10px;
	}
`;
