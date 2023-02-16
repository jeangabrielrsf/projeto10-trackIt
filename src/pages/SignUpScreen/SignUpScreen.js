import Logo from "../../GlobalStyled/Logo";
import Form from "../../GlobalStyled/Form";
import UnderlinedButton from "../../GlobalStyled/UnderlinedButton";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

export default function SignUpScreen() {
	const registerURL =
		"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
	const [formData, setFormData] = useState({
		email: "",
		name: "",
		image: "",
		password: "",
	});

	const [textSignUpButton, setTextSignUpButton] = useState("Cadastrar");

	function registerUser(e) {
		e.preventDefault();
		setTextSignUpButton(
			<ThreeDots
				height="40"
				width="40"
				radius="9"
				color="#ffffff"
				ariaLabel="three-dots-loading"
				wrapperStyle={{}}
				wrapperClassName=""
				visible={true}
			/>
		);

		const promise = axios.post(registerURL, formData);
		promise.then((result) => {
			alert("Usuário Cadastrado com Sucesso.");
		});
		promise.catch((error) => {
			alert(error.response.data.message);
			setTextSignUpButton("Cadastrar");
			console.log(error);
		});

		setFormData({
			email: "",
			name: "",
			image: "",
			password: "",
		});
	}

	function handleData(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	function changeButton(e) {}

	return (
		<>
			<Logo />
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

				<button type="submit" onClick={changeButton}>
					<Button>{textSignUpButton}</Button>
				</button>
			</Form>
			<UnderlinedButton>
				<Link to="/">
					<p>Já tem uma conta? Faça login!</p>
				</Link>
			</UnderlinedButton>
		</>
	);
}

const Button = styled.div`
	width: auto;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;
