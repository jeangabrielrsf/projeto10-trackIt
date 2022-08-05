import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import TokenContext from "../contexts/TokenContext";
import UserProfileImageContext from "../contexts/UserProfileImageContext";
import Day from "../Day/Day";
import AddHabitButton from "../GlobalStyled/AddHabitButton";
import Footer from "../GlobalStyled/Footer";
import PageTitle from "../GlobalStyled/PageTitle";
import Topo from "../GlobalStyled/Topo";
import AddHabitLayer from "./AddHabitLayer";
import HabitsLayer from "./HabitLayer";



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
    const [addClass, setAddClass] = useState("hidden");

    const teste = [0,1,2,3,4,5,6];
    // [domingo, segunda, terça, quarta, quinta, sexta, sábado]

    const [habitTitle, setHabitTitle] = useState("");
    const [chosenDays, setChosenDays] = useState([]);
    const [cleanDays, setCleanDays] = useState(false);



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

    function showAddHabit () {
        setCleanDays(false);
        setAddClass("add-habit");
    }

    function hideAddHabit () {
        setAddClass("hidden");
    }

    function saveHabit() {
        console.log(chosenDays);
        console.log(habitTitle);
        setHabitTitle("");
        setCleanDays(true);
        hideAddHabit();
        alert("salvei po");
    }

    function handleInputData(e) {
        setHabitTitle(e.target.value);
    }
    
    return (
        <>
            <Topo source={userImage}/>
            <Container>
                <div className="pageTitle">
                    <PageTitle title={"Meus Hábitos"}/>
                    <div onClick={showAddHabit}>
                        <AddHabitButton />
                    </div>
                </div>              
                

                <div className={addClass}>
                    <AddHabitLayer>
                        <input type="text" placeholder="nome do hábito" value={habitTitle} onChange={handleInputData} />
                        <div className="days">
                            {teste.map((item, index) => {
                                return (
                                    <Day    
                                        key={index} 
                                        day={item} 
                                        chosenDays={chosenDays}
                                        setChosenDays={setChosenDays}
                                        cleanDays={cleanDays}
                                    />
                                )
                        })}
                        </div>
                        <div className="buttons">
                            <p onClick={hideAddHabit}>Cancelar</p>
                            <button onClick={saveHabit}>Salvar</button>
                        </div>
                    </AddHabitLayer>
                </div>


                <Wrapper>
                    {userHabits.length === 0? (
                        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    ) : 
                    (
                        userHabits.map(habit => {
                            return (
                                <HabitsLayer>
                                    <div>
                                        <p>{habit.name}</p>
                                        <ion-icon name="trash-outline"></ion-icon>
                                    </div>
                    
                                    <span>
                                        {habit.days.map((day, index) => {
                                            {switch (day) {
                                                case 0:
                                                    return (
                                                        <span className="day" key={index}>D</span>
                                                        );
                                                case 1:
                                                case 5:
                                                case 6:
                                                    return (
                                                        <span className="day" key={index}>S</span>
                                                        );
                                                case 2:
                                                    return (
                                                        <span className="day" key={index}>T</span>
                                                        );
                                                case 3:
                                                case 4:
                                                    return (
                                                        <span className="day" key={index}>Q</span>
                                                        );
                                                default:
                                                    console.log("erou");
                                                }
                                            }
                                        })}
                                    </span>
                                </HabitsLayer>
                            );
                        }) 
                    )}


                </Wrapper>

            </Container>
            <Footer />
        </>
    );
}

/* MUDAR DEPOIS PARA UM COMPONENTE ADICIONAR HÁBITO*/

const Container = styled.div`
    background-color: #f2f2f2 ;
    height: 100vmax;
    width: 100%;

    & > * {
        margin: 0 20px;
    }

    .pageTitle{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 90px 0px 0px 0px;
    }

    .selected {
        background-color: #CFCFCF;
        color: #ffffff;
    }

    .hidden {
        display: none;
    }

`;

const Wrapper = styled.div`

    .habit {
        background-color: #ffffff;
        height: 91px;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 20px auto;
        border-radius: 5px;
        font-size: 20px;
        line-height: 25px;
    }

    p{
        font-size: 18px;
        line-height: 22.47px;
        color: #666666;
        margin-top: 10px;
    }
  
    /* .day {
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

    /* .days {
        width: 80%;
        display: flex;
        align-items: center;
        margin: 0 15px;
    } */
`;