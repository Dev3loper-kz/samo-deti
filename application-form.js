document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('applicationForm');
    const messengerSelect = document.getElementById('messenger');
    const messengerContactGroup = document.getElementById('messengerContactGroup');
    const messengerContactLabel = document.getElementById('messengerContactLabel');

    // Показываем/скрываем поле контакта в зависимости от мессенджера
    messengerSelect.addEventListener('change', () => {
        const selected = messengerSelect.value;

        if (!selected) {
            messengerContactGroup.style.display = 'none';
            return;
        }

        messengerContactGroup.style.display = 'block';

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

    // Отправка формы
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const data = {
            parent_name: document.getElementById('parentName').value,
            child_name: document.getElementById('childName').value,
            child_age: document.getElementById('childAge').value,
            city: document.getElementById('city').value,
            phone: document.getElementById('phone').value,

            // ⚠️ Новые поля
            messenger: document.getElementById('messenger').value || "",
            messenger_contact: document.getElementById('messengerContact').value || "",

            message: document.getElementById('message').value
        };

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
            console.error(error);
            alert("Ошибка отправки! Попробуйте позже.");
        }
    });
});
