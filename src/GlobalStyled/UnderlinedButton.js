import styled from "styled-components";

const UnderlinedButton = styled.div`
    p{
    color: #52B6FF;
    font-size: 14px;
    line-height: 17.5px;
    text-decoration: underline;
    }
  
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25px auto;

    p:hover{
        cursor: pointer;
    }
`;

export default UnderlinedButton;