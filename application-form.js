document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('applicationForm');
    const messengerSelect = document.getElementById('messenger');
    const messengerContactGroup = document.getElementById('messengerContactGroup');
    const messengerContactLabel = document.getElementById('messengerContactLabel');

    messengerSelect.addEventListener('change', () => {
        const selected = messengerSelect.value;
        messengerContactGroup.style.display = selected ? 'block' : 'none';

        if (selected === 'telegram') {
            messengerContactLabel.textContent = "Telegram username";
            document.getElementById('messengerContact').placeholder = "@username";
        } else if (selected === 'whatsapp') {
            messengerContactLabel.textContent = "Номер WhatsApp";
            document.getElementById('messengerContact').placeholder = "+7...";
        } else if (selected === 'viber') {
            messengerContactLabel.textContent = "Viber номер";
            document.getElementById('messengerContact').placeholder = "+7...";
        }
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const data = {
            parent_name: document.getElementById('parentName').value,
            child_name: document.getElementById('childName').value,
            child_age: document.getElementById('childAge').value,
            city: document.getElementById('city').value,
            phone: document.getElementById('phone').value,
            messenger: document.getElementById('messenger').value || "",
            messenger_contact: document.getElementById('messengerContact').value || "",
            message: document.getElementById('message').value
        };

        console.log('Отправка формы:', data);

        try {
            const response = await fetch("https://kindsofmillionkzxyz.onrender.com/send-application", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.success) {
                alert("Заявка успешно отправлена!");
                form.reset();
                messengerContactGroup.style.display = 'none';
            } else {
                alert("Ошибка: " + result.message);
            }
        } catch (error) {
            console.error('Ошибка отправки заявки:', error);
            alert("Ошибка отправки! Попробуйте позже.");
        }
    });
});
