import styled from "styled-components";

const HabitsLayer = styled.div`
    div {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    div p{
        
    }

    
  
    .day {
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
    } 

    span {
        display: flex;
    }

    background-color: #ffffff;
    margin: 10px 0;
    max-height: 91px;
    border-radius: 5px;
`;

export default HabitsLayer;