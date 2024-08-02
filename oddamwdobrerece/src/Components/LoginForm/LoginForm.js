import React, { useState } from 'react';
import './LoginForm.scss';
import { Link } from 'react-router-dom'; // Upewnij się, że masz zainstalowany react-router-dom

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!formData.email || !emailPattern.test(formData.email)) {
            newErrors.email = 'Podany email jest nieprawidłowy!';
        }
        if (!formData.password) {
            newErrors.password = 'Hasło jest wymagane!';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        setSuccessMessage('Logowanie powiodło się!');
        setErrorMessage('');
        // tutaj można dodać dalszą logikę
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl min-w-[500px] mx-auto p-4">
            {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
            {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}
            <div className="form-group">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="abc@xyz.pl"
                    required
                    className={`input-field ${errors.email ? 'border-red-600' : ''}`}
                />
                {errors.email && <p className="text-red-600">{errors.email}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="password" className="block mb-2">Hasło</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Twoje hasło"
                    required
                    className={`input-field ${errors.password ? 'border-red-600' : ''}`}
                />
                {errors.password && <p className="text-red-600">{errors.password}</p>}
            </div>
            <div className="flex justify-between items-center">
                <Link to="/register" className="register-link">
                    Załóż konto
                </Link>
                <button type="submit" className="submit-button">
                    Zaloguj się
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
