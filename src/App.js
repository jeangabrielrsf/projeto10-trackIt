import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useContext } from "react";
import LoginScreen from "./LoginScreen/LoginScreen";
import SignUpScreen from "./SignUpScreen/SignUpScreen";
import Habits from "./Habits/Habits";
import Today from "./Today/Today";
import Historic from "./Historic/Historic";
import TokenContext from "./contexts/TokenContext";


export default function App() {
    const [userToken, setUserToken] = useState("");

    return (
        <BrowserRouter>
            <TokenContext.Provider value={{userToken, setUserToken}}>
                <Routes>
                    <Route path="/" element={<LoginScreen />}/>
                    <Route path="/cadastro" element={<SignUpScreen />}/>
                    <Route path="/habitos" element={<Habits />}/>
                    <Route path="/hoje" element={<Today />}/>
                    <Route path="/historico" element={<Historic />}/>
                </Routes>
            </TokenContext.Provider>
        </BrowserRouter>
    );
}