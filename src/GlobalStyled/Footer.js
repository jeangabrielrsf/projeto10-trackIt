import styled from "styled-components";
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from "react-router-dom";
import HabitsPercentageContext from "../contexts/HabitsPercentageContext";
import { useContext } from "react";



function Footer () {

    const navigate = useNavigate();

    const {percentage} = useContext(HabitsPercentageContext);

    return (
        <Wrapper>
            <p onClick={() => navigate("/habitos")}>Hábitos</p>
            <div onClick={() => navigate("/hoje")}>
                <CircularProgressbar value={percentage} text={`Hoje`} background backgroundPadding={6} styles={buildStyles({
                    backgroundColor:"#52B6FF",
                    textColor: "#fff",
                    pathColor:"#fff",
                    textSize:"18px",
                    trailColor: "transparent",
                })} />
            </div>
            <p onClick={() => navigate("/historico")}>Histórico</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;


    div {
        width: 91px;
        height: 91px;
        margin-bottom: 35px;
        border-radius: 50%;
    }

    div:hover{
        cursor: pointer;
    }

    p {
        font-size: 18px;
        line-height: 22.47px;
        color: #52B6FF;
    }

`;

export default Footer;