import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import TokenContext from "../contexts/TokenContext";
import UserProfileImageContext from "../contexts/UserProfileImageContext";
import Footer from "../GlobalStyled/Footer";
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

    
    
    return (
        <>
            <Topo source={userImage}/>
            <Container>
                <div>
                    <h3>Meus Hábitos</h3>
                    <span >+</span>
                </div>              
                <Wrapper>
                    {userHabits.length === 0? (
                        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    ) : 
                    (
                        userHabits.map(habit => {
                            <div className="habit">
                                <p>{habit.name}</p>
                                <span>{habit.days}</span>
                            </div>
                        }) 
                    )}
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

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 90px 15px 0px 15px;
    }

    h3 {
        color: #126BA5;
        font-size: 23px;
        line-height: 28.72px;
    }

    span{
        background-color: #52B6FF;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 35px;
        border-radius: 4.5px;
        color: #FFFFFF;
        font-size: 27px;
    }

    span:hover{
        cursor: pointer;
    }
`;

const Wrapper = styled.div`
    &&{
    }

    p{
        font-size:18px;
        line-height: 22.47px;
        color: #666666;
    }
    

`;