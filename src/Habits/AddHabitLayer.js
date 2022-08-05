import styled from "styled-components";


const AddHabitLayer = styled.div`
    background-color: #ffffff;
    height: 180px;
    margin: 10px 0;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    input {
        min-height: 45px;
        min-width: 90%;
        margin: 10px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
    }

    input::placeholder{
        color: #DBDBDB;
        font-size: 20px;
        line-height: 25px;
    }

    div {
        display: flex;
        align-items: center;
        margin: 0px 7px;
    }

    button {
        background-color: #52B6FF;
        border-radius: 5px;
        width: 84px;
        height: 35px;
        color: #ffffff;
        font-size: 16px;
        line-height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
    }


    .buttons {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 20px;
        margin-right: 5px;
        
    }

    .buttons > * {
        margin: 10px;
    }

    .buttons p{
        color: #52B6FF;
        font-size: 16px;
        line-height: 20px;
    }

`;

export default AddHabitLayer;