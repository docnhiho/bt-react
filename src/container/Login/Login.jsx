import styled from "styled-components";
import Logo from "assets/Logo.svg";

const LoginStyle = styled.div`
    width: 1920px;
    height: 1080px;
    background-image: linear-gradient(to right,rgba(255, 255, 255, 1), rgba(187, 170, 255, 1));

`;
const LoginForm = styled.div`
    padding-top: 255px;
    padding-left: 265px;
  
`;
const FormStyle = styled.div`
    width: 478px;
    .Log{
        font-family: 'Poppins', sans-serif;
        font-size: 56px;
        line-height: 45px;
        font-weight: bold;
    }
`;


function Login() {
    return (
        <LoginStyle>
            <LoginForm>
                <FormStyle>
                    <img src={Logo}></img>
                    <p className="Log">Log In</p>
                </FormStyle>


            </LoginForm>
        </LoginStyle>
    )
}

export default Login;