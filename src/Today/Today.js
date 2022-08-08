import axios from "axios";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HabitsPercentageContext from "../contexts/HabitsPercentageContext";
import TokenContext from "../contexts/TokenContext";
import UserProfileImageContext from "../contexts/UserProfileImageContext";
import Footer from "../GlobalStyled/Footer";
import PageTitle from "../GlobalStyled/PageTitle";
import Topo from "../GlobalStyled/Topo";
import TodayHabit from "../TodayHabit/TodayHabit";

export default function Today () {
    const navigate = useNavigate();
    const {userToken} = useContext(TokenContext);
    const {userImage} = useContext(UserProfileImageContext);
    const [dayHabits, setDayHabits] = useState([]);
    const todayURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const config = {
        headers: {
            "Authorization": `Bearer ${userToken}`
        }
    };
    const [habitsDone, setHabitsDone] = useState([]);
    const [reloadIcons , setReloadIcons] = useState(false);
    const {setPercentage} = useContext(HabitsPercentageContext);
    

    useEffect(() => {
        axios.get(todayURL, config)
            .then(result => {
                console.log(result.data);

                setDayHabits(result.data);

                setPercentage((habitsDone.length / dayHabits.length) * 100);

            })
            .catch(error => {
                console.log(error.response.data);
            })
        
    },[reloadIcons]);
    

    function showDayName() {
        require("dayjs/locale/pt-br");
        dayjs.locale("pt-br");
        let weekday = dayjs().locale("pt-br").format("dddd, DD/MM");
        return weekday;
    }
    
    return (
        <>
            <Topo source={userImage}/>
            <Container>
                <PageTitle title={showDayName()} />
                <div>
                    {dayHabits.map((dayHabit,index) => {
                        return (
                            <TodayHabit
                                key={index}
                                dayHabit={dayHabit}
                                habitsDone={habitsDone}
                                setHabitsDone={setHabitsDone}
                                config={config}
                                reloadIcons={reloadIcons}
                                setReloadIcons={setReloadIcons}
                                dayHabits={dayHabits}
                            />
                        )
                 
                    })}

                </div>

            </Container>
            <Footer />
        </>
    );
}

const Container = styled.div`
    background-color: #f2f2f2 ;
    height: 100vmax;
    width: 100%;
    padding: 90px 20px;

`;