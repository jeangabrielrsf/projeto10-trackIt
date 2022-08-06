import { useState } from "react";
import styled from "styled-components";

export default function Day({
    day, 
    chosenDays, 
    setChosenDays,
    cleanDays,
    daysAPI
}) {

    const [dayClass, setDayClass] = useState("day");


    
    function chooseDay() {
        if (cleanDays === false) {
            if (dayClass === "day") {
                setDayClass("day selected");
                setChosenDays([...chosenDays, day]);
            } else {
                setDayClass("day");
                chosenDays.splice(chosenDays.indexOf(day),1);
            }
        } else {
            return;
        }
        
    }

    function resetDays() {
        if (cleanDays) {
            setDayClass("day");
        }
    }


    {switch (day) {
        case 0:
            
            return (
                <Wrapper className={dayClass} onClick={chooseDay}>D</Wrapper>
                );
        case 1:
        case 5:
        case 6:
            return (
                <Wrapper className={dayClass} onClick={chooseDay}>S</Wrapper>
                );
        case 2:
            return (
                <Wrapper className={dayClass} onClick={chooseDay}>T</Wrapper>
                );
        case 3:
        case 4:
            return (
                <Wrapper className={dayClass} onClick={chooseDay}>Q</Wrapper>
                );
        default:
            console.log("erou");
        }
    }
}

const Wrapper = styled.span`
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

    .selected {
        background-color: #CFCFCF;
        color: #ffffff;
    }
`;
