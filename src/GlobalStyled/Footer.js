import styled from "styled-components";
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Footer () {

    const percentage = 50;
    return (
        <Wrapper>
            <p>Hábitos</p>
            <div>
                <CircularProgressbar value={percentage} text={`Hoje`} background backgroundPadding={6} styles={buildStyles({
                    backgroundColor:"#52B6FF",
                    textColor: "#fff",
                    pathColor:"#fff",
                    textSize:"18px",
                    trailColor: "transparent",
                })} />
            </div>
            <p>Histórico</p>
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
    }

    p {
        font-size: 18px;
        line-height: 22.47px;
        color: #52B6FF;
    }

`;

export default Footer;