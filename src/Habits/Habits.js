import axios from "axios";
import React,{ useContext, useEffect, useState } from "react";
import styled from "styled-components";
import TokenContext from "../contexts/TokenContext";
import UserProfileImageContext from "../contexts/UserProfileImageContext";
import Day from "../Day/Day";
import AddHabitButton from "../GlobalStyled/AddHabitButton";
import Footer from "../GlobalStyled/Footer";
import PageTitle from "../GlobalStyled/PageTitle";
import Topo from "../GlobalStyled/Topo";
import AddHabitLayer from "./AddHabitLayer";
import HabitsLayer from "./HabitsLayer";



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

    const week = [0,1,2,3,4,5,6];
    // [domingo, segunda, terça, quarta, quinta, sexta, sábado]

    const [habitTitle, setHabitTitle] = useState("");
    const [chosenDays, setChosenDays] = useState([]);
    const [cleanDays, setCleanDays] = useState(false);
    const [reloadContent, setReloadContent] = useState(false);



    useEffect(() => {
        const promise = axios.get(habitsURL,config);
        promise.then(result => {
            setUserHabits(result.data);
        })
        .catch(error => {
            alert(error.response.data.message);
        })
    }, [reloadContent]);

    function showAddHabit () {
        setCleanDays(false);
        setAddClass("add-habit");
    }

    function hideAddHabit () {
        setAddClass("hidden");
    }

    /* OS DIAS SELECIONADOS NÃO ESTÃO SENDO LIMPOS. RESOLVER!!!*/
    function saveHabit() {
        console.log(chosenDays.sort());
        console.log(habitTitle);
        
        const request = axios.post(habitsURL,{
            name:habitTitle,
            days:chosenDays.sort(),
        }, config );
        request.then((result) => {
            console.log(result.data);
            setHabitTitle("");
            setCleanDays(true);
            setUserHabits([...userHabits, result.data]);
            hideAddHabit();
        });
        request.catch(error => {
            alert(error.response.data.message);
        });
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
                            {week.map((item, index) => {
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
                        userHabits.map((habit,index) => {
                            console.log(habit);
                            return (
                                <HabitsLayer 
                                    key={index}
                                    habitName={habit.name}
                                    habitDays={habit.days}
                                    habitId={habit.id} 
                                    week={week}
                                    habitsURL={habitsURL}
                                    config={config}
                                    reloadContent={reloadContent} 
                                    setReloadContent={setReloadContent}
                                />
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
    background-size: 100% 100%;
    border: 1px solid black;
    height: 100%;
    width: 100%;
    padding-bottom: 95px;

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

    p{
        font-size: 18px;
        line-height: 22.47px;
        color: #666666;
        margin-top: 10px;
    }
`;