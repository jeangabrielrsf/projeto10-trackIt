import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useContext } from "react";
import LoginScreen from "./LoginScreen/LoginScreen";
import SignUpScreen from "./SignUpScreen/SignUpScreen";
import Habits from "./Habits/Habits";
import Today from "./Today/Today";
import Historic from "./Historic/Historic";
import TokenContext from "./contexts/TokenContext";
import UserProfileImageContext from "./contexts/UserProfileImageContext";
import HabitsPercentageContext from "./contexts/HabitsPercentageContext";


export default function App() {
    const [userToken, setUserToken] = useState("");
    const [userImage, setUserImage] = useState("");
    const [percentage, setPercentage] = useState();

    return (
        <BrowserRouter>
            <TokenContext.Provider value={{userToken, setUserToken}}>
                <UserProfileImageContext.Provider value={{userImage, setUserImage}}>
                    <HabitsPercentageContext.Provider value={{percentage, setPercentage}}>
                        <Routes>
                            <Route path="/" element={<LoginScreen />}/>
                            <Route path="/cadastro" element={<SignUpScreen />}/>
                            <Route path="/habitos" element={<Habits />}/>
                            <Route path="/hoje" element={<Today />}/>
                            <Route path="/historico" element={<Historic />}/>
                        </Routes>
                    </HabitsPercentageContext.Provider>
                </UserProfileImageContext.Provider>
            </TokenContext.Provider>
        </BrowserRouter>
    );
}