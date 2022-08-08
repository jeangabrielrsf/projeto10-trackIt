import { useContext } from "react";
import styled from "styled-components";
import UserProfileImageContext from "../contexts/UserProfileImageContext";
import Footer from "../GlobalStyled/Footer";
import PageTitle from "../GlobalStyled/PageTitle";
import Topo from "../GlobalStyled/Topo";



export default function Historic () {

    const {userImage} = useContext(UserProfileImageContext);
    return (
        <>
            <Topo source={userImage} />
            <Wrapper>
                <PageTitle title={"Histórico"} />
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Wrapper>
            <Footer />
        </>
    );
}

const Wrapper = styled.div`
    padding: 90px 20px;
    background-color: #F2F2F2;
    height: 100vh;

    p{
        font-size: 18px;
        line-height: 22.47px;
        color: #666666;
        margin: 10px 0px;
    }
`;