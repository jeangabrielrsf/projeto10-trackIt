import styled from "styled-components";
const Form = styled.form`

    input,
    button {
        width: 80%;
        height: 45px;
        margin: 5px auto;
        border-radius: 5px;
    }

    input {
        border: 1px solid #D4D4D4;
    }

    input::placeholder{
        color: #DBDBDB;
        font-size: 20px;
        line-height: 25px;
    }

    button {
        background-color:#52B6FF;
        border: none;
        font-size: 21px;
        line-height: 26px;
        color: #FFFFFF;
    }

    button:hover {
        cursor: pointer;
        filter: brightness(90%);
    }

    &{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export default Form;