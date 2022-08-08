import axios from "axios";
import styled from "styled-components";


export default function TodayHabit ({
    dayHabit,
    habitsDone,
    setHabitsDone,
    config,
    reloadIcons,
    setReloadIcons,
}) {

    const urlAPI = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${dayHabit.id}`;
    

    function checkHabit() {
        if (dayHabit.done === false) {
            axios.post(`${urlAPI}/check/`, {}, config)
                .then(result => {

                    setHabitsDone([...habitsDone, dayHabit.id ]);
                    
                    setReloadIcons(!reloadIcons);
                })
                .catch(error => console.log(error.response.data));
        } else {
            axios.post(`${urlAPI}/uncheck/`, {}, config)
                .then(result => {
 
                    habitsDone.splice(habitsDone.indexOf(dayHabit.id), 1);
                    
                    setReloadIcons(!reloadIcons);
                })
                .catch(error => console.log(error.response.data));
        }   
    }

    return (
        <Wrapper>
            <HabitText>
                <h3>{dayHabit.name}</h3>
                <Sequences done={dayHabit.done} currentSequence={dayHabit.currentSequence} highestSequence={dayHabit.highestSequence}>
                    <p>Sequência Atual: {dayHabit.currentSequence}</p>
                    <p>Seu recorde: {dayHabit.highestSequence}</p>
                </Sequences>
            </HabitText>
            <HabitIcon done={dayHabit.done}>
                <ion-icon name="checkbox" onClick={checkHabit}></ion-icon>
            </HabitIcon>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 94px;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    margin: 10px 0;
`;

const HabitText = styled.div`
    color: #666666;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    margin: 0px 15px;
    

    h3 {
        font-size: 20px;
        line-height: 25px;
    }
`;

const Sequences = styled.div`
    font-size: 13px;
    line-height: 16.22px;

    p:nth-child(1) {
        color: ${props => (props.done === true ? "#8FC549" : "#666666")};
    }

    p:nth-child(2) {
        color: ${(props) => {
            if (props.done === true && props.currentSequence === props.highestSequence) {
                return "#8FC549";
            } else {
                return "#666666";
            }
        }
        };
    }
`;

const HabitIcon = styled.div`

    border-radius: 5px;

    ion-icon{
        font-size: 70px;
        color: ${props => (props.done === true? "#8FC549" : "#EBEBEB")}
    };
`;