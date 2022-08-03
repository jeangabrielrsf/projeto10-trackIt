import React from "react";
import styled from "styled-components"
import UnderlinedButton from "../GlobalStyled/UnderlinedButton";
import Logo from "../GlobalStyled/Logo";
import Form from "../GlobalStyled/Form";
import { Link } from "react-router-dom";


export default function LoginScreen() {

    function handleForm(e) {
        e.preventDefault();
        alert("vou ver se você já tem conta.");
    }

    return (
        <>
            <Logo/>
            <Form onSubmit={handleForm}>
                    <input type="email" placeholder="email" required/>
                    <input type="password" placeholder="senha" required/>
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



