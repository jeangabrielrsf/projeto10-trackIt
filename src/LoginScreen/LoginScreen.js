import React, { useContext, useState } from "react";
import styled from "styled-components"
import UnderlinedButton from "../GlobalStyled/UnderlinedButton";
import Logo from "../GlobalStyled/Logo";
import Form from "../GlobalStyled/Form";
import { Link } from "react-router-dom";
import axios from "axios";
import TokenContext from "../contexts/TokenContext";
import { useNavigate } from "react-router-dom";

export default function LoginScreen() {

    const loginURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const navigate = useNavigate();
    const {userToken, setUserToken} = useContext(TokenContext);
    const [formData, setFormData] = useState({
        email:"",
        password:"",
    });

    function handleForm(e) {
        e.preventDefault();
        const promise = axios.post(loginURL, formData);

        promise.then(result => {
            console.log (result.data);
            setUserToken(result.data.token);
            navigate("/hoje");
        });
        promise.catch(error => {
            console.log(error);
            alert(`Erro de login! ${error.response.data.message}`);
        })

        setFormData({
            email:"",
            password:"",
        });
    }

    function handleDataForm(e) {
        setFormData({...formData, [e.target.name]: e.target.value});
        console.log(formData);
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



