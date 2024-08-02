import React from 'react';
import LoginForm from "../../Components/LoginForm/LoginForm";
import Title from "../../Common/Title/Title";

const Login = () => {
    return (
        <div className="min-h-screen flex justify-center items-center flex-col m-0">
        <Title>Zaloguj się</Title>
<LoginForm />
        </div>
    );
};

export default Login;