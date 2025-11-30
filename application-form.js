document.addEventListener('DOMContentLoaded', () => {
    // Элементы формы
    const form = document.getElementById('applicationForm');
    const messengerSelect = document.getElementById('messenger');
    const messengerContactGroup = document.getElementById('messengerContactGroup');
    const messengerContactLabel = document.getElementById('messengerContactLabel');
    const messengerContactInput = document.getElementById('messengerContact');

    // Скрываем поле контакта по умолчанию
    if (messengerContactGroup) messengerContactGroup.style.display = 'none';

    // Показ/скрытие поля контакта в зависимости от выбранного мессенджера
    if (messengerSelect) {
        messengerSelect.addEventListener('change', () => {
            const selected = messengerSelect.value;

            if (!selected) {
                messengerContactGroup.style.display = 'none';
                return;
            }

            messengerContactGroup.style.display = 'block';

            if (selected === 'telegram') {
                messengerContactLabel.textContent = "Telegram username";
                messengerContactInput.placeholder = "@username";
            } else if (selected === 'whatsapp') {
                messengerContactLabel.textContent = "Номер WhatsApp";
                messengerContactInput.placeholder = "+7 (___) ___-__-__";
            } else if (selected === 'viber') {
                messengerContactLabel.textContent = "Viber номер";
                messengerContactInput.placeholder = "+7 (___) ___-__-__";
            }
        });
    }

    // Обработка отправки формы
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const data = {
                parent_name: document.getElementById('parentName').value.trim(),
                child_name: document.getElementById('childName').value.trim(),
                child_age: document.getElementById('childAge').value.trim(),
                city: document.getElementById('city').value.trim(),
                phone: document.getElementById('phone').value.trim(),
                messenger: messengerSelect.value || '',
                messenger_contact: messengerContactInput.value.trim() || '',
                message: document.getElementById('message').value.trim()
            };

            // Проверка на пустые поля (можно добавить свои правила)
            if (!data.parent_name || !data.child_name || !data.phone) {
                alert("Пожалуйста, заполните обязательные поля: Имя родителя, Имя ребенка, Телефон.");
                return;
            }

            try {
                // Отправка на сервер
                const response = await fetch("/send-application", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (result.success) {
                    alert("Заявка успешно отправлена! С вами скоро свяжутся.");
                    form.reset();
                    messengerContactGroup.style.display = 'none';
                } else {
                    alert("Ошибка отправки: " + result.message);
                }
            } catch (err) {
                console.error("Ошибка отправки формы:", err);
                alert("Ошибка отправки! Попробуйте позже.");
            }
        });
    }
});
