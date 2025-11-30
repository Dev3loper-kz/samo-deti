// Program Modal Functionality
function openProgramModal(group) {
    const modal = document.createElement('div');
    modal.className = 'program-modal active';
    modal.id = 'programModal';

    const content = group === 'junior' ? getJuniorProgramContent() : getSeniorProgramContent();

    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeProgramModal()"></div>
        <div class="program-modal-content">
            <button class="modal-close" onclick="closeProgramModal()">
                <i class="fas fa-times"></i>
            </button>
            <div class="program-modal-body">
                ${content}
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

function closeProgramModal() {
    const modal = document.getElementById('programModal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

function getJuniorProgramContent() {
    return `
        <h2 class="program-modal-title">📚 Программа для младшей группы (5-8 классы)</h2>
        
        <div class="semester-block">
            <h3 class="semester-title">🎯 Первый семестр: Раскрытие потенциала ребенка</h3>
            <p class="semester-desc">Помогаем детям раскрыть их таланты, научиться ставить цели и управлять временем! 🌟</p>
            
            <div class="lessons-list">
                <div class="lesson-item"><strong>Урок 1:</strong> Учимся учиться <em>(Альбина Имашева)</em></div>
                <div class="lesson-item"><strong>Урок 2:</strong> Формирование мышления победителя <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 3:</strong> Обсуждение и вопросы (Практикум)</div>
                <div class="lesson-item"><strong>Урок 4:</strong> Богатое или активное мышление <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 5:</strong> Эмоциональный интеллект <em>(Альбина Имашева)</em></div>
                <div class="lesson-item"><strong>Урок 6:</strong> Дискуссионный клуб (Обсуждение книг Давлатова)</div>
                <div class="lesson-item"><strong>Урок 7:</strong> Управление временем <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 8:</strong> Циферблат жизни <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 9:</strong> Дневник желаний <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 10:</strong> Бизнес-игра «Я и деньги»</div>
                <div class="lesson-item"><strong>Урок 11:</strong> Составление плана <em>(Альбина Имашева)</em></div>
                <div class="lesson-item"><strong>Урок 12:</strong> Развитие творческого мышления <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 13:</strong> Обсуждение и вопросы (Практикум)</div>
                <div class="lesson-item"><strong>Урок 14:</strong> Как стать самостоятельным <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 15:</strong> Постановка целей <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 16:</strong> Дискуссионный клуб</div>
                <div class="lesson-item"><strong>Урок 17:</strong> Отношения с родителями <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 18:</strong> Онлайн-обучение для родителей <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 19:</strong> Развитие лидерства <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 20:</strong> Обсуждение и вопросы (Практикум)</div>
                <div class="lesson-item"><strong>Урок 21:</strong> Философия денег <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 22:</strong> Формирование сильного характера <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 23:</strong> Творческий полет: Восприятие линий <em>(Лариса Арюткина)</em></div>
                <div class="lesson-item"><strong>Урок 24:</strong> План развития мечты <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 25:</strong> Бизнес-игра «Я и деньги»</div>
                <div class="lesson-item"><strong>Урок 26:</strong> Духовный интеллект <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 27:</strong> Управление карманными деньгами <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 28:</strong> Обсуждение и вопросы (Практикум)</div>
                <div class="lesson-item"><strong>Урок 29:</strong> Бизнес-практикум</div>
                <div class="lesson-item"><strong>Урок 30:</strong> Заключение семестра (Тестирование, вручение дипломов)</div>
            </div>
        </div>
        
        <div class="semester-block">
            <h3 class="semester-title">💼 Второй семестр: Моя будущая профессия</h3>
            <p class="semester-desc">Помогаем выбрать профессию и развить навыки для будущего успеха! 🚀</p>
            
            <div class="lessons-list">
                <div class="lesson-item"><strong>Урок 1:</strong> Выбор профессии <em>(Альбина Имашева)</em></div>
                <div class="lesson-item"><strong>Урок 2:</strong> Развитие уверенности <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 3:</strong> Дискуссионный клуб</div>
                <div class="lesson-item"><strong>Урок 4:</strong> Постановка целей <em>(Толкун Сальпиева)</em></div>
                <div class="lesson-item"><strong>Урок 5:</strong> Высокий уровень жизни <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 6:</strong> Обсуждение и вопросы (Практикум)</div>
                <div class="lesson-item"><strong>Урок 7:</strong> Служение и добро <em>(Альбина Имашева)</em></div>
                <div class="lesson-item"><strong>Урок 8:</strong> Как стать отличником <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 9:</strong> Бизнес-игра «Я и деньги»</div>
                <div class="lesson-item"><strong>Урок 10:</strong> Дневник благодарности <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 11:</strong> Улаживание конфликтов <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 12:</strong> Творческий полет: Цвета и свет <em>(Лариса Арюткина)</em></div>
                <div class="lesson-item"><strong>Урок 13:</strong> Жизненные ценности <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 14:</strong> Ответственность и дисциплина <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 15:</strong> Дискуссионный клуб</div>
                <div class="lesson-item"><strong>Урок 16:</strong> Кто такой лидер? <em>(Альбина Имашева)</em></div>
                <div class="lesson-item"><strong>Урок 17:</strong> Благотворительность <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 18:</strong> Бизнес-практикум</div>
                <div class="lesson-item"><strong>Урок 19:</strong> Ораторское мастерство <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 20:</strong> Раскрытие талантов <em>(Альбина Имашева)</em></div>
                <div class="lesson-item"><strong>Урок 21:</strong> Бизнес-игра «Я и деньги»</div>
                <div class="lesson-item"><strong>Урок 22:</strong> Стратегия жизни до 100 лет</div>
                <div class="lesson-item"><strong>Урок 23:</strong> Планирование путешествий <em>(Альбина Имашева)</em></div>
                <div class="lesson-item"><strong>Урок 24:</strong> Дискуссионный клуб</div>
                <div class="lesson-item"><strong>Урок 25:</strong> Как приобрести свой голос <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 26:</strong> Выбор бизнес-идеи <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 27:</strong> Множество видов дохода <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 28:</strong> Бизнес-практикум</div>
                <div class="lesson-item"><strong>Урок 29:</strong> Обсуждение и вопросы (Практикум)</div>
                <div class="lesson-item"><strong>Урок 30:</strong> Заключение семестра (Тестирование, вручение дипломов)</div>
            </div>
        </div>
        
        <div class="semester-block">
            <h3 class="semester-title">🌟 Третий семестр: Жизненные навыки для лидера</h3>
            <p class="semester-desc">Учим быть лидером, управлять финансами и общаться эффективно! 💪</p>
            
            <div class="lessons-list">
                <div class="lesson-item"><strong>Урок 1:</strong> Ораторское искусство и мастерство общения <em>(Альбина Имашева)</em></div>
                <div class="lesson-item"><strong>Урок 2:</strong> Управление семейным бюджетом <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 3:</strong> Дискуссионный клуб</div>
                <div class="lesson-item"><strong>Урок 4:</strong> Отношения со взрослыми <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 5:</strong> День пира (Практическое занятие) <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 6:</strong> Итоги Дня пира (Подготовка к экзамену)</div>
                <div class="lesson-item"><strong>Урок 7:</strong> Выбор специальности <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 8:</strong> Управление ресурсами <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 9:</strong> Бизнес-игра «Я и деньги»</div>
                <div class="lesson-item"><strong>Урок 10:</strong> Навыки сохранения денег <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 11:</strong> Откладывание денег <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 12:</strong> Творческий полет: Живопись <em>(Лариса Арюткина)</em></div>
                <div class="lesson-item"><strong>Урок 13:</strong> Инвестиции <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 14:</strong> Бизнес-практикум</div>
                <div class="lesson-item"><strong>Урок 15:</strong> Опасность долгов <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 16:</strong> Избавление от страха <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 17:</strong> Эффективные переговоры <em>(Альбина Имашева)</em></div>
                <div class="lesson-item"><strong>Урок 18:</strong> Дискуссионный клуб</div>
                <div class="lesson-item"><strong>Урок 19:</strong> Эмоциональный интеллект, часть 2 <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 20:</strong> Бизнес-практикум</div>
                <div class="lesson-item"><strong>Урок 21:</strong> Повышение самооценки <em>(Альбина Имашева)</em></div>
                <div class="lesson-item"><strong>Урок 22:</strong> Целеполагание <em>(Альбина Имашева)</em></div>
                <div class="lesson-item"><strong>Урок 23:</strong> Бизнес-игра «Я и деньги»</div>
                <div class="lesson-item"><strong>Урок 24:</strong> Тайм-менеджмент <em>(Альбина Имашева)</em></div>
                <div class="lesson-item"><strong>Урок 25:</strong> Мой путь и секреты успеха <em>(Альбина Имашева)</em></div>
                <div class="lesson-item"><strong>Урок 26:</strong> Дискуссионный клуб</div>
                <div class="lesson-item"><strong>Урок 27:</strong> Бизнес-практикум</div>
                <div class="lesson-item"><strong>Урок 28:</strong> Бизнес-экскурсия</div>
                <div class="lesson-item"><strong>Урок 29:</strong> Обсуждение и вопросы (Практикум)</div>
                <div class="lesson-item"><strong>Урок 30:</strong> Заключение семестра (Тестирование, вручение дипломов)</div>
            </div>
        </div>
    `;
}

function getSeniorProgramContent() {
    return `
        <h2 class="program-modal-title">🚀 Программа для старшей группы (9-11 классы)</h2>
        
        <div class="semester-block">
            <h3 class="semester-title">🎯 Первый семестр: Раскрытие потенциала ребенка</h3>
            <p class="semester-desc">Раскрываем внутренний потенциал и учим ставить амбициозные цели! 🌟</p>
            
            <div class="lessons-list">
                <div class="lesson-item"><strong>Урок 1:</strong> Учимся учиться <em>(Альбина Имашева)</em></div>
                <div class="lesson-item"><strong>Урок 2:</strong> Формирование мышления победителя <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 3:</strong> Обсуждение и вопросы (Практикум)</div>
                <div class="lesson-item"><strong>Урок 4:</strong> Богатое или активное мышление <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 5:</strong> Эмоциональный интеллект <em>(Альбина Имашева)</em></div>
                <div class="lesson-item"><strong>Урок 6:</strong> Дискуссионный клуб (Обсуждение книг Давлатова)</div>
                <div class="lesson-item"><strong>Урок 7:</strong> Управление временем <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 8:</strong> Циферблат жизни <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 9:</strong> Дневник желаний <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 10:</strong> Бизнес-игра «Я и деньги»</div>
                <div class="lesson-item"><strong>Урок 11:</strong> Составление плана <em>(Альбина Имашева)</em></div>
                <div class="lesson-item"><strong>Урок 12:</strong> Развитие творческого мышления <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 13:</strong> Обсуждение и вопросы (Практикум)</div>
                <div class="lesson-item"><strong>Урок 14:</strong> Как стать самостоятельным <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 15:</strong> Постановка целей <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 16:</strong> Дискуссионный клуб</div>
                <div class="lesson-item"><strong>Урок 17:</strong> Отношения с родителями <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 18:</strong> Онлайн-обучение для родителей <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 19:</strong> Развитие лидерства <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 20:</strong> Обсуждение и вопросы (Практикум)</div>
                <div class="lesson-item"><strong>Урок 21:</strong> Философия денег <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 22:</strong> Формирование сильного характера <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 23:</strong> Творческий полет: Восприятие линий <em>(Лариса Арюткина)</em></div>
                <div class="lesson-item"><strong>Урок 24:</strong> План развития мечты <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 25:</strong> Бизнес-игра «Я и деньги»</div>
                <div class="lesson-item"><strong>Урок 26:</strong> Духовный интеллект <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 27:</strong> Управление карманными деньгами <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 28:</strong> Обсуждение и вопросы (Практикум)</div>
                <div class="lesson-item"><strong>Урок 29:</strong> Бизнес-практикум</div>
                <div class="lesson-item"><strong>Урок 30:</strong> Заключение семестра (Тестирование, вручение дипломов)</div>
            </div>
        </div>
        
        <div class="semester-block">
            <h3 class="semester-title">💼 Второй семестр: Моя будущая профессия</h3>
            <p class="semester-desc">Готовимся к будущей карьере, изучая профессии и навыки! 🚀</p>
            
            <div class="lessons-list">
                <div class="lesson-item"><strong>Урок 1:</strong> Выбор профессии <em>(Альбина Имашева)</em></div>
                <div class="lesson-item"><strong>Урок 2:</strong> Развитие уверенности <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 3:</strong> Дискуссионный клуб</div>
                <div class="lesson-item"><strong>Урок 4:</strong> Постановка целей <em>(Толкун Сальпиева)</em></div>
                <div class="lesson-item"><strong>Урок 5:</strong> Высокий уровень жизни <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 6:</strong> Обсуждение и вопросы (Практикум)</div>
                <div class="lesson-item"><strong>Урок 7:</strong> Служение и добро <em>(Альбина Имашева)</em></div>
                <div class="lesson-item"><strong>Урок 8:</strong> Как стать отличником <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 9:</strong> Бизнес-игра «Я и деньги»</div>
                <div class="lesson-item"><strong>Урок 10:</strong> Дневник благодарности <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 11:</strong> Улаживание конфликтов <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 12:</strong> Творческий полет: Цвета и свет <em>(Лариса Арюткина)</em></div>
                <div class="lesson-item"><strong>Урок 13:</strong> Жизненные ценности <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 14:</strong> Ответственность и дисциплина <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 15:</strong> Дискуссионный клуб</div>
                <div class="lesson-item"><strong>Урок 16:</strong> Кто такой лидер? <em>(Альбина Имашева)</em></div>
                <div class="lesson-item"><strong>Урок 17:</strong> Благотворительность <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 18:</strong> Бизнес-практикум</div>
                <div class="lesson-item"><strong>Урок 19:</strong> Ораторское мастерство <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 20:</strong> Раскрытие талантов <em>(Альбина Имашева)</em></div>
                <div class="lesson-item"><strong>Урок 21:</strong> Бизнес-игра «Я и деньги»</div>
                <div class="lesson-item"><strong>Урок 22:</strong> Стратегия жизни до 100 лет</div>
                <div class="lesson-item"><strong>Урок 23:</strong> Планирование путешествий <em>(Альбина Имашева)</em></div>
                <div class="lesson-item"><strong>Урок 24:</strong> Дискуссионный клуб</div>
                <div class="lesson-item"><strong>Урок 25:</strong> Как приобрести свой голос <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 26:</strong> Выбор бизнес-идеи <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 27:</strong> Множество видов дохода <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 28:</strong> Бизнес-практикум</div>
                <div class="lesson-item"><strong>Урок 29:</strong> Обсуждение и вопросы (Практикум)</div>
                <div class="lesson-item"><strong>Урок 30:</strong> Заключение семестра (Тестирование, вручение дипломов)</div>
            </div>
        </div>
        
        <div class="semester-block">
            <h3 class="semester-title">🌟 Третий семестр: Жизненные навыки для лидера</h3>
            <p class="semester-desc">Развиваем лидерские качества и финансовую грамотность! 💪</p>
            
            <div class="lessons-list">
                <div class="lesson-item"><strong>Урок 1:</strong> Ораторское искусство <em>(Альбина Имашева)</em></div>
                <div class="lesson-item"><strong>Урок 2:</strong> Управление семейным бюджетом <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 3:</strong> Дискуссионный клуб</div>
                <div class="lesson-item"><strong>Урок 4:</strong> Отношения со взрослыми <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 5:</strong> День пира (Практическое занятие) <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 6:</strong> Итоги Дня пира (Подготовка к экзамену)</div>
                <div class="lesson-item"><strong>Урок 7:</strong> Выбор специальности <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 8:</strong> Управление ресурсами <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 9:</strong> Бизнес-игра «Я и деньги»</div>
                <div class="lesson-item"><strong>Урок 10:</strong> Навыки сохранения денег <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 11:</strong> Откладывание денег <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 12:</strong> Творческий полет: Живопись <em>(Лариса Арюткина)</em></div>
                <div class="lesson-item"><strong>Урок 13:</strong> Инвестиции <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 14:</strong> Бизнес-практикум</div>
                <div class="lesson-item"><strong>Урок 15:</strong> Опасность долгов <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 16:</strong> Избавление от страха <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 17:</strong> Эффективные переговоры <em>(Альбина Имашева)</em></div>
                <div class="lesson-item"><strong>Урок 18:</strong> Дискуссионный клуб</div>
                <div class="lesson-item"><strong>Урок 19:</strong> Эмоциональный интеллект, часть 2 <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 20:</strong> Бизнес-практикум</div>
                <div class="lesson-item"><strong>Урок 21:</strong> Повышение самооценки <em>(Альбина Имашева)</em></div>
                <div class="lesson-item"><strong>Урок 22:</strong> Целеполагание <em>(Альбина Имашева)</em></div>
                <div class="lesson-item"><strong>Урок 23:</strong> Бизнес-игра «Я и деньги»</div>
                <div class="lesson-item"><strong>Урок 24:</strong> Тайм-менеджмент <em>(Альбина Имашева)</em></div>
                <div class="lesson-item"><strong>Урок 25:</strong> Мой путь и секреты успеха <em>(Альбина Имашева)</em></div>
                <div class="lesson-item"><strong>Урок 26:</strong> Дискуссионный клуб</div>
                <div class="lesson-item"><strong>Урок 27:</strong> Бизнес-практикум</div>
                <div class="lesson-item"><strong>Урок 28:</strong> Бизнес-экскурсия</div>
                <div class="lesson-item"><strong>Урок 29:</strong> Обсуждение и вопросы (Практикум)</div>
                <div class="lesson-item"><strong>Урок 30:</strong> Заключение семестра (Тестирование, вручение дипломов)</div>
            </div>
        </div>
        
        <div class="semester-block">
            <h3 class="semester-title">💰 Четвертый семестр: Мой успешный бизнес</h3>
            <p class="semester-desc">Учим создавать бизнес с нуля и управлять им! 📈</p>
            
            <div class="lessons-list">
                <div class="lesson-item"><strong>Урок 1:</strong> Как разработать бизнес-план <em>(Лунара Сагыналиева)</em></div>
                <div class="lesson-item"><strong>Урок 2:</strong> Бизнес-план: Финансовый анализ <em>(Лунара Сагыналиева)</em></div>
                <div class="lesson-item"><strong>Урок 3:</strong> SWOT-анализ <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 4:</strong> Практика SWOT-анализа</div>
                <div class="lesson-item"><strong>Урок 5:</strong> Ценные бумаги <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 6:</strong> Создание рынка с нуля <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 7:</strong> Итоги: Создание бизнеса с нуля</div>
                <div class="lesson-item"><strong>Урок 8:</strong> Создание сайта для бизнеса <em>(Чынгыз Борбиев)</em></div>
                <div class="lesson-item"><strong>Урок 9:</strong> Учет рисков и гарантий <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 10:</strong> Грамотный маркетинг и реклама <em>(Екатерина Лужанская)</em></div>
                <div class="lesson-item"><strong>Урок 11:</strong> Расчет бюджета и финансовый прогноз <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 12:</strong> Мой путь и секреты успеха <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 13:</strong> Эмоциональный интеллект: Часть 3 <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 14:</strong> Управление активами и пассивами <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 15:</strong> Творческий Полет: Свет и тень <em>(Лариса Арюткина)</em></div>
                <div class="lesson-item"><strong>Урок 16:</strong> Покупка бизнес-недвижимости <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 17:</strong> Бизнес-практикум</div>
                <div class="lesson-item"><strong>Урок 18:</strong> Первые шаги стартапа <em>(Лунара Сагыналиева)</em></div>
                <div class="lesson-item"><strong>Урок 19:</strong> Выбор бизнеса и инвестиции <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 20:</strong> Упаковка бизнеса <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 21:</strong> Рекомендации для выпускника <em>(Лунара Сагыналиева)</em></div>
                <div class="lesson-item"><strong>Урок 22:</strong> Презентация бизнеса <em>(Саидмурод Давлатов)</em></div>
                <div class="lesson-item"><strong>Урок 23:</strong> Выбор ВУЗа <em>(Лунара Сагыналиева)</em></div>
                <div class="lesson-item"><strong>Урок 24:</strong> Продажи сердцем <em>(Лунара Сагыналиева)</em></div>
                <div class="lesson-item"><strong>Урок 25:</strong> Карьерный рост <em>(Лунара Сагыналиева)</em></div>
                <div class="lesson-item"><strong>Урок 26:</strong> Мой путь и секреты успеха <em>(Лунара Сагыналиева)</em></div>
                <div class="lesson-item"><strong>Урок 27:</strong> Клиентоориентированность <em>(Лунара Сагыналиева)</em></div>
                <div class="lesson-item"><strong>Урок 28:</strong> Бизнес-экскурсия</div>
                <div class="lesson-item"><strong>Урок 29:</strong> Презентации учеников</div>
                <div class="lesson-item"><strong>Урок 30:</strong> Прощальный урок <em>(Саидмурод Давлатов)</em></div>
            </div>
        </div>
    `;
}

// Close modal on Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeProgramModal();
    }
});
