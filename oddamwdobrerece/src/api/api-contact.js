export const sendContactForm = async (formData) => {
    try {
        const response = await fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        if (response.status === 200 && data.status === 'success') {
            return { success: true };
        } else {
            return { success: false, message: 'Wystąpił błąd podczas wysyłania wiadomości.' };
        }
    } catch (error) {
        return { success: false, message: 'Wystąpił błąd podczas wysyłania wiadomości.' };
    }
};
