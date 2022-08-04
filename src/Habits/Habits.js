import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import TokenContext from "../contexts/TokenContext";
import UserProfileImageContext from "../contexts/UserProfileImageContext";
import AddHabitButton from "../GlobalStyled/AddHabitButton";
import Footer from "../GlobalStyled/Footer";
import PageTitle from "../GlobalStyled/PageTitle";
import Topo from "../GlobalStyled/Topo";


export default function Habits () {
    const {userToken} = useContext(TokenContext);
    const {userImage} = useContext(UserProfileImageContext);
    const habitsURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const config = {
        headers: {
            "Authorization": `Bearer ${userToken}`
        }
    };
    const [userHabits, setUserHabits] = useState([]);

    const teste = [0,1,2,3,4,5,6];
    // [domingo, segunda, terça, quarta, quinta, sexta, sábado]


    useEffect(() => {
        const promise = axios.get(habitsURL,config);
        promise.then(result => {
            console.log(result.data);
            setUserHabits(result.data);
        })
        .catch(error => {
            alert(error.responde.data);
        })
    }, []);

    function addHabit () {

    }
    
    return (
        <>
            <Topo source={userImage}/>
            <Container>
                <div className="pageTitle">
                    <PageTitle title={"Meus Hábitos"}/>
                    <AddHabitButton />
                </div>              
                <Wrapper>

                    <div className="add-habit">
                        <input type="text" placeholder="nome do hábito" />
                        <span className="days">
                            {teste.map(item => {
                                {switch (item) {
                                    case 0:
                                        return (
                                            <span className="day">D</span>
                                            );
                                        break;
                                    case 1:
                                    case 5:
                                    case 6:
                                        return (
                                            <span className="day">S</span>
                                            );
                                        break;
                                    case 2:
                                        return (
                                            <span className="day">T</span>
                                            );
                                        break;
                                    case 3:
                                    case 4:
                                        return (
                                            <span className="day">Q</span>
                                            );
                                        break;
                                    default:
                                        console.log("erou");
                                    }
                                }
                        })}
                        </span>
                        <p>Cancelar</p>
                        <p>Salvar</p>
                    </div>
                    {/* {userHabits.length === 0? (
                        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    ) : 
                    (
                        userHabits.map(habit => {
                            <div className="habit">
                                <p>{habit.name}</p>
                                <span>{habit.days}</span>
                            </div>
                        }) 
                    )} */}


                </Wrapper>

            </Container>
            <Footer />
        </>
    );
}

const Container = styled.div`
    background-color: #f2f2f2 ;
    height: 100vmax;
    width: 100%;

    .pageTitle{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 90px 15px 0px 15px;
    }
`;

const Wrapper = styled.div`

    input{
        height: 45px;
        width: 85%;
        margin: 10px 20px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
    }

    input::placeholder{
        color: #DBDBDB;
        font-size: 20px;
        line-height: 25px;
    }

    div.add-habit{
        background-color: #ffffff;
        height: 180px;
        width: 90%;
        display: flex;
        flex-direction: column;
        margin: 20px auto;
        border-radius: 5px;
    }
  
    .day {
        width: 30px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        color: #DBDBDB;
        font-size: 20px;
        margin: 0 3px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .days {
        width: 80%;
        display: flex;
        align-items: center;
        margin: 0 20px;
    }
`;