import { useContext } from "react";
import TokenContext from "../contexts/TokenContext";

export default function Today () {
    const {userToken} = useContext(TokenContext);
    console.log(userToken);
    return (
        <h1>tela de hoje</h1>
    );
}