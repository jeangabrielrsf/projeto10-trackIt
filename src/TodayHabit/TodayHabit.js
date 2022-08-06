import styled from "styled-components";

export default function TodayHabit ({
    dayHabit,
}) {


    return (
        <Wrapper>
            <HabitText>
                <h3>{dayHabit.name}</h3>
                <Sequences>
                    <p>Sequência Atual: {dayHabit.currentSequence}</p>
                    <p>Seu recorde: {dayHabit.highestSequence}</p>
                </Sequences>
            </HabitText>
            <HabitIcon>
                <ion-icon name="checkbox"></ion-icon>
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
`;

const HabitIcon = styled.div`

    border-radius: 5px;

    ion-icon{
        font-size: 70px;
        color: ${dayHabit => dayHabit.done? ("#8FC549") : ("#EBEBEB")};
    }
`;