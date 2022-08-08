import React, { useContext, useState } from "react";
import UnderlinedButton from "../GlobalStyled/UnderlinedButton";
import Logo from "../GlobalStyled/Logo";
import Form from "../GlobalStyled/Form";
import { Link } from "react-router-dom";
import axios from "axios";
import TokenContext from "../contexts/TokenContext";
import { useNavigate } from "react-router-dom";
import UserProfileImageContext from "../contexts/UserProfileImageContext";


export default function LoginScreen() {

    const loginURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const navigate = useNavigate();
    const {setUserToken} = useContext(TokenContext);
    const {setUserImage} = useContext(UserProfileImageContext);
    const [formData, setFormData] = useState({
        email:"",
        password:"",
    });

    function handleForm(e) {
        e.preventDefault();
        const promise = axios.post(loginURL, formData);

        promise.then(result => {

            setUserToken(result.data.token);
            setUserImage(result.data.image);
            navigate("/hoje");
        });
        promise.catch(error => {
            console.log(error.response.data.message);
            alert(`${error.response.data.message}`);
        })

        setFormData({
            email:"",
            password:"",
        });
    }

    function handleDataForm(e) {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    return (
        <>
            <Logo/>
            <Form onSubmit={handleForm}>
                    <input
                        type="email" 
                        placeholder="email"
                        name="email"
                        onChange={handleDataForm} 
                        value={formData.email}
                        required
                    />

                    <input 
                        type="password" 
                        placeholder="senha"
                        name="password"
                        onChange={handleDataForm}
                        value={formData.password} 
                        required
                    />
                    <button type="submit">Entrar</button>
            </Form>

            <UnderlinedButton>
                <Link to="/cadastro">
                    <p>Não tem uma conta? Cadastra-se</p>
                </Link>
            </UnderlinedButton>
        </>
    )

}

//UI - STYLED COMPS



