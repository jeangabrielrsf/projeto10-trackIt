import Logo from "../GlobalStyled/Logo";
import Form from "../GlobalStyled/Form";
import UnderlinedButton from "../GlobalStyled/UnderlinedButton";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";




export default function SignUpScreen () {

    const registerURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const [formData, setFormData] = useState({
        email:"",
        name:"",
        image:"",
        password:"",
    });

    function registerUser(e) {
        e.preventDefault();


        const promise = axios.post(registerURL, formData);
        promise.then(result => {
            alert("Usuário Cadastrado com Sucesso.");
            console.log(result);
        });
        promise.catch(error => {
            alert(error.response.data.message);
            console.log(error);
        });

        setFormData({
            email:"",
            name:"",
            image:"",
            password:"",
        });

    } 

    function handleData (e) {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    return (
        <>
        <Logo/>
            <Form onSubmit={registerUser}>
                <input 
                    type="email" 
                    placeholder="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleData}
                    required
                />
                <input 
                    type="password" 
                    placeholder="senha" 
                    name="password"
                    value={formData.password}
                    onChange={handleData}
                    required
                />
                <input 
                    type="text" 
                    placeholder="nome" 
                    name="name"
                    value={formData.name}
                    onChange={handleData}
                    required
                />
                <input 
                    type="url" 
                    placeholder="url de imagem para perfil" 
                    name="image"
                    value={formData.image}
                    onChange={handleData}
                    required
                />

                <button type="submit">Cadastrar</button>
            </Form>
            <UnderlinedButton>
                <Link to="/">
                    <p>Já tem uma conta? Faça login!</p>
                </Link>
            </UnderlinedButton>
        </>
    );
}