import dayjs from "dayjs";
import { useContext } from "react";
import styled from "styled-components";
import TokenContext from "../contexts/TokenContext";
import UserProfileImageContext from "../contexts/UserProfileImageContext";
import Footer from "../GlobalStyled/Footer";
import PageTitle from "../GlobalStyled/PageTitle";
import Topo from "../GlobalStyled/Topo";



export default function Today () {
    const {userToken} = useContext(TokenContext);
    const {userImage} = useContext(UserProfileImageContext);
    

    function showDayName() {
        require("dayjs/locale/pt-br");
        dayjs.locale("pt-br");
        let weekday = dayjs().locale("pt-br").format("dddd, DD/MM");
        return weekday;
    }
    
    return (
        <>
            <Topo source={userImage}/>
            <Container>
                <PageTitle title={showDayName()} />

            </Container>
            <Footer />
        </>
    );
}

const Container = styled.div`
    background-color: #f2f2f2 ;
    height: 100vmax;
    width: 100%;
    padding: 90px 0;
`;