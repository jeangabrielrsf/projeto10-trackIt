import Logo from "../GlobalStyled/Logo";
import Form from "../GlobalStyled/Form";
import UnderlinedButton from "../GlobalStyled/UnderlinedButton";
import { Link } from "react-router-dom";
export default function SignUpScreen () {

    function registerUser(e) {
        e.preventDefault();
        alert("vou te cadastrar.");
    } 

    return (
        <>
        <Logo/>
            <Form onSubmit={registerUser}>
                <input type="email" placeholder="email" required/>
                <input type="password" placeholder="senha" required/>
                <input type="text" placeholder="nome" required/>
                <input type="url" placeholder="url de imagem para perfil" required/>
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