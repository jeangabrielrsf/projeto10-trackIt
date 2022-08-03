import { useContext } from "react";
import styled from "styled-components";
import TokenContext from "../contexts/TokenContext";
import UserProfileImageContext from "../contexts/UserProfileImageContext";
import Footer from "../GlobalStyled/Footer";
import Topo from "../GlobalStyled/Topo";


export default function Habits () {
    const {userToken} = useContext(TokenContext);
    const {userImage} = useContext(UserProfileImageContext);
    
    return (
        <>
            <Topo source={userImage}/>
            <Container>


            </Container>
            <Footer />
        </>
    );
}

const Container = styled.div`
    background-color: #f2f2f2 ;
    height: 100vmax;
    width: 100%;
`;