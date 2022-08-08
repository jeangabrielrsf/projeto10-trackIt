import styled from "styled-components";
import logoImage from "../assets/img/logo-trackit.png"
export default function Logo () {
    return (
        <Container>
            <img src={logoImage} alt="" />
            TrackIt
        </Container>
    );
}

const Container = styled.div`
    width: 180px;
    height: 86px;
    font-size: 68.98px;
    line-height: 86.23px;
    color: #126BA5;
    font-family: 'Playball', cursive;
    margin: 60px auto;
    display: flex;
    flex-direction: column;

    img{
        width: 200px;
        height: 100px;
        object-fit: contain;
    }
`;
