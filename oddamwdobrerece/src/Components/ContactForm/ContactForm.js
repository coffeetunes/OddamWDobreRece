import React, { useState } from 'react';
import './ContactForm.scss';
import { sendContactForm } from '../../api/api-contact';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
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
        if (!formData.name || formData.name.split(' ').length > 1) {
            newErrors.name = 'Podane imię jest nieprawidłowe!';
        }
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!formData.email || !emailPattern.test(formData.email)) {
            newErrors.email = 'Podany email jest nieprawidłowy!';
        }
        if (!formData.message || formData.message.length < 120) {
            newErrors.message = 'Wiadomość musi mieć conajmniej 120 znaków!';
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        const result = await sendContactForm(formData);
        if (result.success) {
            setSuccessMessage('Wiadomość została wysłana! Wkrótce się skontaktujemy.');
            setErrorMessage('');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } else {
            setSuccessMessage('');
            setErrorMessage(result.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4">
            {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
            {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="form-group">
                    <label htmlFor="name" className="block mb-2">Wpisz swoje imię</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Krzysztof"
                        required
                        className={`input-field ${errors.name ? 'border-red-600' : ''}`}
                    />
                    {errors.name && <p className="text-red-600">{errors.name}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="block mb-2">Wpisz swój email</label>
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
            </div>
            <div className="form-group">
                <label htmlFor="message" className="block mb-2">Wpisz swoją wiadomość</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Twoja wiadomość"
                    required
                    className={`input-field h-32 resize-none ${errors.message ? 'border-red-600' : ''}`}
                ></textarea>
                {errors.message && <p className="text-red-600">{errors.message}</p>}
            </div>
            <div className="text-right">
                <button type="submit" className="submit-button">
                    Wyślij
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
