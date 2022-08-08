import React, { useContext, useState } from "react";
import UnderlinedButton from "../GlobalStyled/UnderlinedButton";
import Logo from "../GlobalStyled/Logo";
import Form from "../GlobalStyled/Form";
import { Link } from "react-router-dom";
import axios from "axios";
import TokenContext from "../contexts/TokenContext";
import { useNavigate } from "react-router-dom";
import UserProfileImageContext from "../contexts/UserProfileImageContext";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";


export default function LoginScreen() {

    const loginURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const navigate = useNavigate();
    const {setUserToken} = useContext(TokenContext);
    const {setUserImage} = useContext(UserProfileImageContext);
    const [formData, setFormData] = useState({
        email:"",
        password:"",
    });
    const [textButton, setTextButton] = useState("Entrar");

    function handleForm(e) {
        e.preventDefault();
        setTextButton(<ThreeDots 
            height="40" 
            width="40" 
            radius="9"
            color="#ffffff" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true} />);
        const promise = axios.post(loginURL, formData);

        promise.then(result => {
            console.log(typeof (!result))
            setUserToken(result.data.token);
            setUserImage(result.data.image);
            navigate("/hoje");
        });
        promise.catch(error => {
            console.log(error.response.data.message);
            setTextButton("Entrar");
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
                    <button type="submit">
                        <Button>
                            {textButton}
                        </Button>
                    </button>
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

const Button = styled.div`
    width: auto;
    height: auto;
    display:flex;
    justify-content: center;
    align-items: center;
`;


