import React from 'react';
import RegisterForm from "../../Components/RegisterForm/RegisterForm";
import Title from "../../Common/Title/Title";

const Register = () => {
    return (
        <div className="min-h-screen flex justify-center items-center flex-col m-0">
            <Title>Załóż konto</Title>
            <RegisterForm />
        </div>
    );
};

export default Register;