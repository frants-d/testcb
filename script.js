const state = {
    page: 'home',
    faqExpanded: false,
    docsExpanded: false,
    faqQuery: '',
    docsQuery: ''
};

const newsItems = [
    {
        date: '12.03.2026',
        weekday: 'Четверг',
        paragraphs: [
            'Руководителям подведомственных Минобрнауки России учреждений.',
            'Минобрнауки России в целях ежегодного запроса ООО «Газпром межрегионгаз» в части представления объемов потребления в 2027 году природного газа сообщает об открытии сбора информации о расчетных объемах поставки газа подведомственными Минобрнауки России организациями, финансируемыми за счет средств федерального бюджета.',
            'Сбор данных о планируемых объёмах потребления газа в 2027 году реализован в информационно-аналитической системе в разделе «Сбор и обработка плановых и отчетных показателей» / «Расчетные объемы поставки газа на 2027 год». Информацию необходимо представить не позднее 27 марта 2026 года.'
        ]
    },
    {
        date: '10.02.2026',
        weekday: 'Вторник',
        paragraphs: [
            'Федеральным органам исполнительной власти, имеющим в своем ведении государственные образовательные организации высшего образования.',
            'Минобрнауки России информирует о проведении предварительного мониторинга установления стоимости платных образовательных услуг по программам высшего образования и среднего профессионального образования на 2026/2027 учебный год.',
            'Сбор сведений организаций о стоимости обучения для поступающих на первый курс, а также для обучающихся второго и последующих курсов будет осуществляться в срок по 20 февраля 2026 года.'
        ]
    },
    {
        date: '05.01.2026',
        weekday: 'Понедельник',
        paragraphs: [
            'Руководителям организаций, подведомственных Минобрнауки России. Письмо Минобрнауки России от 15 апреля 2026 года № МН-18/198 «О предоставлении информации».',
            'Согласно постановлению Правительства Российской Федерации от 11 ноября 2023 г. № 1896 «Об утверждении Правил предоставления из федерального бюджета субсидий бюджетным и автономным учреждениям на иные цели» в части расчета коэффициента платной деятельности Департамент экономической политики Минобрнауки России (далее – Департамент) просит предоставить сведения для расчета указанного показателя путем заполнения форм на портале cbias.ru в разделе «Сбор и обработка плановых и отчетных показателей / Сведения для расчета коэффициента платной деятельности / Апрель 2026» в срок до 5 мая 2026 года включительно.',
            'По вопросам заполнения сведений обращаться в службу поддержки Портала путем заполнения формы обращения (http://www.cbias.ru/sso_app/support.spf) и по телефонам 8 (495) 225-14-43, 8 (495) 225-14-47.',
            'Департамент обращает внимание на необходимость качественного планирования показателей, учитываемых при определении планируемого объема доходов от платной деятельности.',
            'Учитывая изложенное, Департамент просит обеспечить предоставление достоверных данных и обращает внимание, что руководители организаций несут персональную ответственность за предоставленные сведения.'
        ]
    }
];

const faqs = [
    {
        date: '13.02.2026',
        views: 358,
        question: 'Где найти значения нормативных затрат на оказание государственных услуг и территориальные корректирующие коэффициенты?',
        answer: 'Нормативы опубликованы на Едином портале бюджетной системы Российской Федерации в разделе «Бюджетная система» → «Бюджетное законодательство». Для быстрого поиска можно воспользоваться фильтром «Принявший орган» — «Министерство науки и высшего образования».'
    },
    {
        date: '13.02.2026',
        views: 123,
        question: 'Нужно ли негосударственным образовательным учреждениям высшего образования заполнять предварительный мониторинг платных образовательных услуг?',
        answer: 'Нет, это не обязательно. Однако предварительное заполнение уменьшит объём работы при основном мониторинге в мае-июне.'
    },
    {
        date: '10.02.2026',
        views: 88,
        question: 'Куда обращаться при возникновении технической ошибки при заполнении формы на портале?',
        answer: 'Необходимо обратиться в службу поддержки портала по электронной почте support@cbias.ru или по телефонам (495) 225-14-43 и (495) 225-14-47.'
    },
    {
        date: '05.02.2026',
        views: 64,
        question: 'Можно ли использовать тестовый контур для предварительной проверки данных?',
        answer: 'Да, тестовый контур предназначен для проверки сценариев ввода и отладки данных без влияния на рабочий контур.'
    }
];

const documents = [
    {
        date: '26.03.2026',
        level: 'Федеральный',
        number: '21-08-06/24891',
        title: 'Письмо Минфина России от 26 марта 2026 года №21-08-06/24891'
    },
    {
        date: '25.03.2026',
        level: 'Ведомственный',
        number: 'МН-18/177',
        title: 'Письмо Минобрнауки России от 25 марта 2026 года №МН-18/177 «О наличии просроченной кредиторской задолженности по состоянию на 01.04.2026»'
    },
    {
        date: '20.03.2026',
        level: 'Ведомственный',
        number: 'МН-17/165',
        title: 'Письмо Минобрнауки России от 20 марта 2026 года №МН-17/165 «О предоставлении уточненных плановых показателей»'
    },
    {
        date: '18.03.2026',
        level: 'Федеральный',
        number: '02-12-11/22014',
        title: 'Письмо Федерального казначейства от 18 марта 2026 года №02-12-11/22014 «О порядке отражения отдельных операций в отчетности»'
    }
];

const workingTools = [
    { title: 'УВБА', description: 'Учет и ведение бюджетных ассигнований', accent: '#1E63C6' },
    { title: 'Паспорта работ', description: 'Формирование и ведение паспортов выполнения работ', accent: '#00A67D' },
    { title: 'Реестр', description: 'Сведения из ЕГРЮЛ участников бюджетного процесса', accent: '#1E63C6' },
    { title: 'Форумы', description: 'Форумы по экономическим вопросам', accent: '#D45500' }
];

const testTools = [
    { title: 'УВБА', description: 'Тестирование', accent: '#94A3B8', isTest: true },
    { title: 'Паспорта работ', description: 'Тестирование', accent: '#94A3B8', isTest: true }
];

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function iconFor(title, color, isTest) {
    const safeColor = escapeHtml(color);

    if (isTest) {
        return '<svg width="32" height="32" viewBox="0 -960 960 960" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
            '<path d="M739-83.5q-7-2.5-13-8.5L522-296q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l85-85q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l204 204q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13l-85 85q-6 6-13 8.5T754-81q-8 0-15-2.5Zm-549.5.5q-7.5-3-13.5-9l-84-84q-6-6-9-13.5T80-205q0-8 3-15t9-13l212-212h85l34-34-165-165h-57L80-765l113-113 121 121v57l165 165 116-116-43-43 56-56H495l-28-28 142-142 28 28v113l56-56 142 142q17 17 26 38.5t9 45.5q0 24-9 46t-26 39l-85-85-56 56-42-42-207 207v84L233-92q-6 6-13 9t-15 3q-8 0-15.5-3Z" fill="#5B6F95"/>' +
            '<path d="M739-83.5q-7-2.5-13-8.5L522-296q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l85-85q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l204 204q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13l-85 85q-6 6-13 8.5T754-81q-8 0-15-2.5Zm-549.5.5q-7.5-3-13.5-9l-84-84q-6-6-9-13.5T80-205q0-8 3-15t9-13l212-212h85l34-34-165-165h-57L80-765l113-113 121 121v57l165 165 116-116-43-43 56-56H495l-28-28 142-142 28 28v113l56-56 142 142q17 17 26 38.5t9 45.5q0 24-9 46t-26 39l-85-85-56 56-42-42-207 207v84L233-92q-6 6-13 9t-15 3q-8 0-15.5-3Z" fill="url(#testToolAccent)" fill-opacity="0.22"/>' +
            '<defs>' +
            '<linearGradient id="testToolAccent" x1="80" y1="-880" x2="878" y2="-80" gradientUnits="userSpaceOnUse">' +
            '<stop stop-color="#EEF3FB"/>' +
            '<stop offset="1" stop-color="#003385"/>' +
            '</linearGradient>' +
            '</defs>' +
            '</svg>';
    }

    if (title === 'УВБА') {
        return '<svg width="32" height="32" viewBox="0 -960 960 960" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
            '<path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z" fill="#1E63C6"/>' +
            '<path d="M120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z" fill="#00CD90" fill-opacity="0.22"/>' +
            '<path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80Z" fill="url(#uvbaAccent)" fill-opacity="0.18"/>' +
            '<defs>' +
            '<linearGradient id="uvbaAccent" x1="120" y1="-840" x2="840" y2="-120" gradientUnits="userSpaceOnUse">' +
            '<stop stop-color="#EEF3FB"/>' +
            '<stop offset="1" stop-color="#003385"/>' +
            '</linearGradient>' +
            '</defs>' +
            '</svg>';
    }

    if (title === 'Паспорта работ') {
        return '<svg width="32" height="32" viewBox="0 -960 960 960" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
            '<path d="M400-400h160v-80H400v80Zm0-120h320v-80H400v80Zm0-120h320v-80H400v80Zm-80 400q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" fill="#00A67D"/>' +
            '<path d="M400-400h160v-80H400v80Zm0-120h320v-80H400v80Zm0-120h320v-80H400v80Z" fill="#ffffff" fill-opacity="0.9"/>' +
            '<path d="M320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880Z" fill="url(#passportAccent)" fill-opacity="0.18"/>' +
            '<defs>' +
            '<linearGradient id="passportAccent" x1="240" y1="-880" x2="880" y2="-240" gradientUnits="userSpaceOnUse">' +
            '<stop stop-color="#EEF3FB"/>' +
            '<stop offset="1" stop-color="#003385"/>' +
            '</linearGradient>' +
            '</defs>' +
            '</svg>';
    }

    if (title === 'Реестр') {
        return '<svg width="32" height="32" viewBox="0 -960 960 960" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
            '<path d="M348.5-291.5Q360-303 360-320t-11.5-28.5Q337-360 320-360t-28.5 11.5Q280-337 280-320t11.5 28.5Q303-280 320-280t28.5-11.5Zm0-160Q360-463 360-480t-11.5-28.5Q337-520 320-520t-28.5 11.5Q280-497 280-480t11.5 28.5Q303-440 320-440t28.5-11.5Zm0-160Q360-623 360-640t-11.5-28.5Q337-680 320-680t-28.5 11.5Q280-657 280-640t11.5 28.5Q303-600 320-600t28.5-11.5ZM440-280h240v-80H440v80Zm0-160h240v-80H440v80Zm0-160h240v-80H440v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" fill="#1E63C6"/>' +
            '<path d="M348.5-291.5Q360-303 360-320t-11.5-28.5Q337-360 320-360t-28.5 11.5Q280-337 280-320t11.5 28.5Q303-280 320-280t28.5-11.5Zm0-160Q360-463 360-480t-11.5-28.5Q337-520 320-520t-28.5 11.5Q280-497 280-480t11.5 28.5Q303-440 320-440t28.5-11.5Zm0-160Q360-623 360-640t-11.5-28.5Q337-680 320-680t-28.5 11.5Q280-657 280-640t11.5 28.5Q303-600 320-600t28.5-11.5Z" fill="#00CD90" fill-opacity="0.28"/>' +
            '<path d="M440-280h240v-80H440v80Zm0-160h240v-80H440v80Zm0-160h240v-80H440v80Z" fill="#ffffff" fill-opacity="0.92"/>' +
            '<path d="M200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840Z" fill="url(#registryAccent)" fill-opacity="0.18"/>' +
            '<defs>' +
            '<linearGradient id="registryAccent" x1="120" y1="-840" x2="840" y2="-120" gradientUnits="userSpaceOnUse">' +
            '<stop stop-color="#EEF3FB"/>' +
            '<stop offset="1" stop-color="#003385"/>' +
            '</linearGradient>' +
            '</defs>' +
            '</svg>';
    }

    if (title === 'Форумы') {
        return '<svg width="32" height="32" viewBox="0 -960 960 960" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
            '<path d="M880-80 720-240H320q-33 0-56.5-23.5T240-320v-40h440q33 0 56.5-23.5T760-440v-280h40q33 0 56.5 23.5T880-640v560ZM160-473l47-47h393v-280H160v327ZM80-280v-520q0-33 23.5-56.5T160-880h440q33 0 56.5 23.5T680-800v280q0 33-23.5 56.5T600-440H240L80-280Zm80-240v-280 280Z" fill="#475569"/>' +
            '<path d="M160-473l47-47h393v-280H160v327Z" fill="#ffffff" fill-opacity="0.9"/>' +
            '<path d="M880-80 720-240H320q-33 0-56.5-23.5T240-320v-40h440q33 0 56.5-23.5T760-440v-280h40q33 0 56.5 23.5T880-640v560Z" fill="#1E63C6" fill-opacity="0.14"/>' +
            '<path d="M160-880h440q33 0 56.5 23.5T680-800v280q0 33-23.5 56.5T600-440H240L80-280v-520q0-33 23.5-56.5T160-880Z" fill="url(#forumAccent)" fill-opacity="0.18"/>' +
            '<defs>' +
            '<linearGradient id="forumAccent" x1="80" y1="-880" x2="880" y2="-80" gradientUnits="userSpaceOnUse">' +
            '<stop stop-color="#EEF3FB"/>' +
            '<stop offset="1" stop-color="#003385"/>' +
            '</linearGradient>' +
            '</defs>' +
            '</svg>';
    }

    return '<svg width="32" height="32" viewBox="0 0 24 24" fill="' + safeColor + '"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/><circle cx="9" cy="11" r="1" fill="#ffffff"/><circle cx="13" cy="11" r="1" fill="#ffffff"/><circle cx="17" cy="11" r="1" fill="#ffffff"/></svg>';
}

function searchIconSvg() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M784-120 532-372q-30 26-69 41t-83 15q-109 0-184.5-75.5T120-576q0-109 75.5-184.5T380-836q109 0 184.5 75.5T640-576q0 44-15 83t-41 69l252 252-52 52ZM380-416q67 0 113.5-46.5T540-576q0-67-46.5-113.5T380-736q-67 0-113.5 46.5T220-576q0 67 46.5 113.5T380-416Z"/></svg>';
}

function fileUploadIconSvg() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM200-120q-33 0-56.5-23.5T120-200v-120h80v120h560v-120h80v120q0 33-23.5 56.5T760-120H200Z"/></svg>';
}

function highlightNewsParagraph(text, newsIndex) {
    let result = escapeHtml(text);
    if (newsIndex === 0) {
        result = result.replace(
            'Расчетные объемы поставки газа на 2027 год',
            '<span class="text-link" style="text-decoration:underline;">Расчетные объемы поставки газа на 2027 год</span>'
        );
    }
    return result;
}

function toolCard(tool) {
    return [
        '<section class="card tool-card" data-tool="' + escapeHtml(tool.title) + '">',
        '<div class="tool-body">',
        '<div class="tool-top">',
        '<div class="tool-icon">' + iconFor(tool.title, tool.accent, tool.isTest) + '</div>',
        (tool.isTest ? '<span class="badge">Тестовая версия</span>' : ''),
        '</div>',
        '<h3 class="tool-title">' + escapeHtml(tool.title) + '</h3>',
        '<div class="body-sm">' + escapeHtml(tool.description) + '</div>',
        '</div>',
        '</section>'
    ].join('');
}

function contactMailCard() {
    return [
        '<div class="info-box body-sm">',
        '<div class="contact-item">',
        '<svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
        '<div>',
        '<div class="contact-title">Электронная почта</div>',
        '<div class="contact-lines"><div>support@cbias.ru</div></div>',
        '</div>',
        '</div>',
        '</div>'
    ].join('');
}

function contactPhoneCard() {
    return [
        '<div class="info-box body-sm">',
        '<div class="contact-item">',
        '<svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.37 1.78.72 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.24a2 2 0 0 1 2.11-.45c.84.35 1.72.6 2.62.72A2 2 0 0 1 22 16.92z"/></svg>',
        '<div>',
        '<div class="contact-title">Многоканальные телефоны</div>',
        '<div class="contact-lines"><div>(495) 225-14-43</div><div>(495) 225-14-47</div></div>',
        '</div>',
        '</div>',
        '</div>'
    ].join('');
}

function passwordField() {
    return [
        '<div class="field" style="position:relative;">',
        '<label class="label">Пароль</label>',
        '<input class="input" type="password" placeholder="Введите пароль" style="padding-right:44px;">',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position:absolute; right:14px; top:40px; width:20px; height:20px; color:#94a3b8; pointer-events:none;">',
        '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>',
        '<circle cx="12" cy="12" r="3"/>',
        '</svg>',
        '</div>'
    ].join('');
}

function supportSidebar(showGuide) {
    return [
        '<section class="card">',
        '<div class="section-head">',
        '<h2 class="section-title">Личный кабинет</h2>',
        '</div>',
        '<form id="support-login-form" class="stack" style="gap:16px;">',
        '<div class="field">',
        '<label class="label">Логин</label>',
        '<input class="input" placeholder="Введите логин">',
        '</div>',
        passwordField(),
        '<div class="row-between caption">',
        '<label><input type="checkbox"> Запомнить меня</label>',
        '<a class="link" href="#">Забыли пароль?</a>',
        '</div>',
        '<button class="btn btn-primary" type="submit">Войти</button>',
        '</form>',
        '</section>',
        '<section class="card support">',
        '<div class="section-head">',
        '<h2 class="section-title">Служба поддержки</h2>',
        '</div>',
        '<div class="stack" style="gap:12px;">',
        '<button class="btn btn-accent" type="button" data-page="support-form"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 -960 960 960" fill="currentColor" style="flex:0 0 28px;"><path d="M80-80v-720q0-33 23.5-56.5T160-880h404q-4 20-4 40t4 40H160v525l46-45h594v-324q23-5 43-13.5t37-22.5v360q0 33-23.5 56.5T800-240H240L80-80Zm80-720v480-480Zm515 45q-35-35-35-85t35-85q35-35 85-35t85 35q35 35 35 85t-35 85q-35 35-85 35t-85-35Z"/></svg>Написать обращение</button>',
        contactMailCard(),
        contactPhoneCard(),
        '</div>',
        '</section>',
        showGuide ? [
            '<section class="card">',
            '<div class="section-head">',
            '<h2 class="section-title">Руководство пользователя</h2>',
            '</div>',
            '<div class="body-sm" style="margin-bottom:16px;">Скачайте руководство пользователя для самостоятельной работы с разделами портала и основными сценариями ввода данных.</div>',
            '<a href="#" class="ghost-link">Скачать руководство пользователя</a>',
            '</section>'
        ].join('') : ''
    ].join('');
}

function header() {
    return [
        '<header class="header">',
        '<div class="container header-inner">',
        '<div class="brand-left">',
        '<div class="brand-logo">ЦОИАС</div>',
        '<div class="coat"><img src="png/coat.jpg" alt="Герб" style="width:100%; height:100%; object-fit:contain;"/></div>',
        '<div class="ministry">МИНОБРНАУКИ<br>РОССИИ</div>',
        '</div>',
        '<div class="brand-right">',
        '<div>Портал информационного взаимодействия с организациями</div>',
        '<div>и учреждениями, участниками бюджетного процесса</div>',
        '</div>',
        '</div>',
        '</header>'
    ].join('');
}

function navbar() {
    const items = [
        ['Главная', 'home'],
        ['Новости', 'news'],
        ['Служба поддержки', 'support'],
        ['О центре', 'about']
    ];

    return [
        '<nav class="nav">',
        '<div class="container">',
        '<ul class="nav-list">',
        items.map(function (item) {
            const label = item[0];
            const page = item[1];
            const active = state.page === page ? 'active' : '';
            return '<li><button class="nav-btn ' + active + '" data-page="' + page + '">' + label + '</button></li>';
        }).join(''),
        '</ul>',
        '</div>',
        '</nav>'
    ].join('');
}

function footer() {
    return [
        '<footer class="footer">',
        '<div class="container footer-grid">',
        '<div>',
        '<div class="footer-title">Минобрнауки России · ЦОИАС</div>',
        '<div class="body-sm">Портал информационного взаимодействия для участников бюджетного процесса. Техническая и методическая поддержка, обмен данными и работа с финансово-экономическими инструментами.</div>',
        '<div class="footer-copy">© ЦОИАС</div>',
        '</div>',
        '<div>',
        '<div class="caption" style="font-weight:700;color:#334155;margin-bottom:8px;">Навигация</div>',
        '<div><button class="text-link" data-page="home">Главная</button></div>',
        '<div><button class="text-link" data-page="news">Новости</button></div>',
        '<div><button class="text-link" data-page="support">Служба поддержки</button></div>',
        '<div><button class="text-link" data-page="about">О центре</button></div>',
        '</div>',
        '<div>',
        '<div class="caption" style="font-weight:700;color:#334155;margin-bottom:8px;">Контакты</div>',
        '<div class="body-sm">(495) 225-14-43</div>',
        '<div class="body-sm">(495) 225-14-47</div>',
        '<div class="body-sm" style="margin-top:8px;">support@cbias.ru</div>',
        '</div>',
        '</div>',
        '</footer>'
    ].join('');
}

function homePage() {
    return [
        '<main class="main">',
        '<div class="container grid">',
        '<section class="stack">',
        '<section class="card">',
        '<div class="section-head">',
        '<h2 class="section-title">Новое на портале</h2>',
        '<div class="section-subtitle">Обновлено сегодня</div>',
        '</div>',
        '<article class="news-item">',
        '<div class="caption">12.03.2026, Четверг</div>',
        '<div class="body-sm" style="margin-top:8px;">Руководителям подведомственных Минобрнауки России учреждений. Минобрнауки России в целях ежегодного запроса ООО «Газпром межрегионгаз» в части представления объемов потребления в 2027 году природного газа сообщает об открытии сбора информации о расчетных объемах поставки газа...</div>',
        '<button class="text-link" data-page="news" style="margin-top:8px;">Читать полностью</button>',
        '</article>',
        '</section>',
        '<section class="card hero">',
        '<div class="hero-grid">',
        '<div class="hero-copy">',
        '<span class="pill">Единая рабочая среда</span>',
        '<h2 class="section-title" style="margin-bottom:16px;">О портале</h2>',
        '<div class="body">Портал информационного взаимодействия поддерживает организации и сотрудников министерства, участвующих в бюджетном процессе. Обеспечивает удобный обмен данными и работу с финансово-экономическими инструментами.</div>',
        '</div>',
        '<div class="hero-visual"><img src="png/owl.png" alt="Герб" style="width:100%; height:100%; object-fit:contain;"/></div>',
        '</div>',
        '</section>',
        '<section class="card soft">',
        '<div class="section-head">',
        '<h2 class="section-title">О центре</h2>',
        '<div class="section-subtitle">ЦОИАС</div>',
        '</div>',
        '<div class="body">Центр отраслевых информационно-аналитических систем (ЦОИАС) обеспечивает информационно-технологическую поддержку бюджетных процессов Минобрнауки России и организаций, участвующих в бюджетном процессе.</div>',
        '<button class="text-link" data-page="about" style="margin-top:8px;">Подробнее</button>',
        '</section>',
        '</section>',
        '<aside class="stack">',
        supportSidebar(false),
        '</aside>',
        '</div>',
        '</main>'
    ].join('');
}

function newsPage() {
    return [
        '<main class="main">',
        '<div class="container grid">',
        '<section class="stack">',
        '<section class="card">',
        '<div class="news-top-bar">',
        '<div class="section-head">',
        '<h2 class="section-title">Новости</h2>',
        '<div class="section-subtitle">Показано: ' + newsItems.length + '</div>',
        '</div>',
        '<div class="body">Подборка новостей портала для участников бюджетного процесса.</div>',
        '<div class="news-search-panel">',
        '<div class="news-search-title">Поиск по новостям</div>',
        '<div class="news-search-row">',
        '<div class="field">',
        '<div class="search-shell">',
        '<input class="input" placeholder="Введите ключевые слова для поиска по новостям" />',
        '<button class="search-btn" type="button" aria-label="Найти">' + searchIconSvg() + '</button>',
        '</div>',
        '</div>',
        '<button class="news-advanced-btn" type="button">Расширенный поиск</button>',
        '</div>',
        '</div>',
        '</div>',
        '</section>',
        newsItems.map(function (item, newsIndex) {
            return [
                '<section class="card">',
                '<div class="section-head" style="margin-bottom:16px;align-items:flex-start;flex-direction:column;">',
                '<div class="caption">' + escapeHtml(item.date) + ', ' + escapeHtml(item.weekday) + '</div>',
                '</div>',
                '<div class="body-sm" style="display:grid;gap:16px;color:#334155;">' + item.paragraphs.map(function (paragraph) {
                    return '<p style="margin:0;">' + highlightNewsParagraph(paragraph, newsIndex) + '</p>';
                }).join('') + '</div>',
                '</section>'
            ].join('');
        }).join(''),
        '<div style="margin-top:8px;"><button class="text-link" type="button">Показать еще</button></div>',
        '</section>',
        '<aside class="stack">',
        supportSidebar(false),
        '</aside>',
        '</div>',
        '</main>'
    ].join('');
}

function cabinetPage() {
    return [
        '<main class="main">',
        '<div class="container grid">',
        '<section class="stack">',
        '<section class="card">',
        '<div class="section-head">',
        '<h2 class="section-title">Личный кабинет</h2>',
        '<div class="section-subtitle">Финансово-экономические инструменты</div>',
        '</div>',
        '<div class="body">После входа в личный кабинет пользователю доступны рабочие и тестовые версии инструментов портала.</div>',
        '</section>',
        '<section class="card priority">',
        '<div class="section-head">',
        '<h2 class="section-title">Рабочие версии</h2>',
        '<div class="section-subtitle">Основные инструменты портала</div>',
        '</div>',
        '<div class="tools-grid">' + workingTools.map(toolCard).join('') + '</div>',
        '</section>',
        '<section class="card">',
        '<div class="section-head">',
        '<h2 class="section-title">Тестовые версии</h2>',
        '<div class="section-subtitle">Стенды для проверки и отладки</div>',
        '</div>',
        '<div class="tools-grid">' + testTools.map(toolCard).join('') + '</div>',
        '</section>',
        '<section class="card">',
        '<div class="section-head">',
        '<h2 class="section-title">Сборы данных</h2>',
        '<div class="section-subtitle">Текущие кампании сбора информации</div>',
        '</div>',
        '<div class="body-sm">Активных сборов пока нет.</div>',
        '</section>',
        '</section>',
        '<aside class="stack">',
        '<section class="card">',
        '<div class="section-head">',
        '<h2 class="section-title">Авторизация</h2>',
        '<div class="section-subtitle">Текущая сессия</div>',
        '</div>',
        '<div class="stack" style="gap:16px;">',
        '<div class="news-item"><div class="label">Логин</div><div class="body-sm" style="margin-top:4px;">demo@cbias.ru</div></div>',
        '<div class="news-item"><div class="label">Пользователь</div><div class="body-sm" style="margin-top:4px;">Иванов Василий Федорович</div></div>',
        '<div class="news-item"><div class="label">Организация</div><div class="body-sm" style="margin-top:4px;">Минобрнауки России, Департамент экономической политики, начальник отдела проектов и программ</div></div>',
        '<button class="btn btn-secondary" type="button" data-page="home">Выйти</button>',
        '</div>',
        '</section>',
        '<section class="card support">',
        '<div class="section-head">',
        '<h2 class="section-title">Служба поддержки</h2>',
        '</div>',
        '<div class="stack" style="gap:12px;">',
        '<button class="btn btn-accent" type="button" data-page="support-form"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 -960 960 960" fill="currentColor" style="flex:0 0 28px;"><path d="M80-80v-720q0-33 23.5-56.5T160-880h404q-4 20-4 40t4 40H160v525l46-45h594v-324q23-5 43-13.5t37-22.5v360q0 33-23.5 56.5T800-240H240L80-80Zm80-720v480-480Zm515 45q-35-35-35-85t35-85q35-35 85-35t85 35q35 35 35 85t-35 85q-35 35-85 35t-85-35Z"/></svg>Написать обращение</button>',
        contactMailCard(),
        contactPhoneCard(),
        '</div>',
        '</section>',
        '</aside>',
        '</div>',
        '</main>'
    ].join('');
}

function filterFaqItems() {
    const q = state.faqQuery.trim().toLowerCase();
    const list = faqs.filter(function (item) {
        return [item.date, String(item.views), item.question, item.answer].join(' ').toLowerCase().includes(q);
    }).sort(function (a, b) {
        return b.views - a.views;
    });
    return state.faqExpanded ? list : list.slice(0, 2);
}

function filterDocumentItems() {
    const q = state.docsQuery.trim().toLowerCase();
    const list = documents.filter(function (item) {
        return [item.date, item.level, item.number, item.title].join(' ').toLowerCase().includes(q);
    });
    return state.docsExpanded ? list : list.slice(0, 3);
}

function faqItem(item, index) {
    return [
        '<article class="list-item">',
        '<div class="meta-row"><span>' + escapeHtml(item.date) + '</span><span>👁 ' + escapeHtml(item.views) + '</span></div>',
        '<div class="faq-question">' + escapeHtml(item.question) + '</div>',
        '<div class="inline-actions"><button class="text-link" type="button" data-toggle-answer="faq-' + index + '">Посмотреть ответ</button></div>',
        '<div id="faq-' + index + '" class="faq-answer hidden">' + escapeHtml(item.answer) + '</div>',
        '</article>'
    ].join('');
}

function documentItem(item) {
    return [
        '<article class="list-item">',
        '<div class="meta-row"><span>' + escapeHtml(item.date) + '</span><span>Уровень: ' + escapeHtml(item.level) + '</span><span>Номер: ' + escapeHtml(item.number) + '</span></div>',
        '<div class="doc-title">' + escapeHtml(item.title) + '</div>',
        '</article>'
    ].join('');
}

function supportPage() {
    const faqList = filterFaqItems();
    const docList = filterDocumentItems();

    return [
        '<main class="main">',
        '<div class="container support-grid">',
        '<section class="support-main-grid">',
        '<section class="card">',
        '<div class="support-hero">',
        '<div class="section-head">',
        '<h2 class="section-title">Служба поддержки</h2>',
        '<div class="section-subtitle">Помощь, вопросы и документы</div>',
        '</div>',
        '<p class="support-hero-copy">Раздел объединяет часто используемые сценарии: быстрый вход в личный кабинет, обращение в техническую поддержку, доступ к руководству пользователя, часто задаваемым вопросам и документам.</p>',
        '<div class="support-hero-links">',
        '<button class="support-chip" type="button">Вопросы</button>',
        '<button class="support-chip" type="button">Документы</button>',
        '<button class="support-chip" type="button">Служба поддержки</button>',
        '<button class="support-chip" type="button">Руководство пользователя</button>',
        '</div>',
        '</div>',
        '</section>',
        '<div class="stack">',
        '<section class="card">',
        '<div class="section-head">',
        '<h2 class="section-title">Часто задаваемые вопросы</h2>',
        '<button class="text-link" type="button" data-toggle="faq">' + (state.faqExpanded ? 'Скрыть часть вопросов' : 'Смотреть все') + '</button>',
        '</div>',
        '<div class="field" style="margin-bottom:20px;">',
        '<label class="label">Поиск по вопросам</label>',
        '<div class="search-shell">',
        '<input class="input" id="faq-search" value="' + escapeHtml(state.faqQuery) + '" placeholder="Поиск по вопросам" />',
        '<div class="search-btn">' + searchIconSvg() + '</div>',
        '</div>',
        '</div>',
        '<div class="stack" style="gap:16px;">' + (faqList.length ? faqList.map(faqItem).join('') : '<div class="body-sm">По вашему запросу вопросы не найдены.</div>') + '</div>',
        '</section>',
        '<section class="card">',
        '<div class="section-head">',
        '<h2 class="section-title">Документы</h2>',
        '<button class="text-link" type="button" data-toggle="docs">' + (state.docsExpanded ? 'Скрыть часть документов' : 'Смотреть все') + '</button>',
        '</div>',
        '<div class="field" style="margin-bottom:20px;">',
        '<label class="label">Поиск по документам</label>',
        '<div class="search-shell">',
        '<input class="input" id="docs-search" value="' + escapeHtml(state.docsQuery) + '" placeholder="Поиск по документам" />',
        '<div class="search-btn">' + searchIconSvg() + '</div>',
        '</div>',
        '</div>',
        '<div class="auth-note">Внутренние документы доступны только авторизованным пользователям.</div>',
        '<div class="stack" style="gap:16px;">' + (docList.length ? docList.map(documentItem).join('') : '<div class="body-sm">По вашему запросу документы не найдены.</div>') + '</div>',
        '</section>',
        '</div>',
        '</section>',
        '<aside class="stack">',
        supportSidebar(false),
        '</aside>',
        '</div>',
        '</main>'
    ].join('');
}

function aboutPage() {
    return [
        '<main class="main">',
        '<div class="container grid">',
        '<section class="stack">',
        '<section class="card soft">',
        '<div class="section-head">',
        '<h2 class="section-title">О центре</h2>',
        '<div class="section-subtitle">ЦОИАС</div>',
        '</div>',
        '<div class="body">Центр отраслевых информационно-аналитических систем (ЦОИАС) был создан в соответствии с приказом Министерства образования Российской Федерации от 5 мая 2003 года №1963.</div>',
        '<div class="body" style="margin-top:12px;">В дальнейшем деятельность Центра регламентировалась приказами федеральных органов управления образованием и науки.</div>',
        '</section>',
        '<section class="card">',
        '<div class="section-head"><h2 class="section-title">Основные задачи</h2></div>',
        '<div class="body-sm">Информационная поддержка деятельности финансово-экономического управления и выполнение работ по научно-методическому, информационно-технологическому и ресурсному обеспечению системы образования.</div>',
        '</section>',
        '<section class="card">',
        '<div class="section-head"><h2 class="section-title">Направления деятельности</h2></div>',
        '<ul class="helper-list">',
        '<li class="helper-item">Информационно-технологическое обеспечение бюджетных процессов Минобрнауки России.</li>',
        '<li class="helper-item">Методическая, техническая и консультационная поддержка сотрудников организаций и учреждений.</li>',
        '<li class="helper-item">Подготовка статистических, аналитических материалов, отчетов и справок по запросам подразделений и руководства.</li>',
        '</ul>',
        '</section>',
        '</section>',
        '<aside class="stack">',
        supportSidebar(false),
        '</aside>',
        '</div>',
        '</main>'
    ].join('');
}

function supportFormPage() {
    return [
        '<main class="main">',
        '<div class="container form-grid">',
        '<section class="stack">',
        '<section class="card">',
        '<div class="section-head">',
        '<h2 class="section-title">Создание обращения</h2>',
        '<div class="section-subtitle">Служба поддержки</div>',
        '</div>',
        '<div class="notice-bar">Упрощённая форма для предпросмотра: сохранена структура и внешний вид, убраны лишние сценарии.</div>',
        '</section>',
        '<section class="card">',
        '<div class="section-head">',
        '<h2 class="section-title">Новая заявка</h2>',
        '<button class="text-link" type="button" data-page="support">Вернуться в раздел</button>',
        '</div>',
        '<form class="stack" style="gap:20px;">',
        '<div class="field"><label class="label">Тема обращения <span class="required">*</span></label><input class="input" placeholder="Кратко опишите суть вопроса" /></div>',
        '<div class="support-secondary-grid">',
        '<div class="field"><label class="label">Категория <span class="required">*</span></label><select class="select"><option>Выберите категорию</option><option>Техническая ошибка</option><option>Консультация по работе с разделом</option><option>Документы и публикации</option><option>Доступ и авторизация</option></select></div>',
        '<div class="field"><label class="label">Раздел портала <span class="required">*</span></label><select class="select"><option>Выберите раздел</option><option>Личный кабинет</option><option>Документы</option><option>FAQ</option><option>Плановые показатели</option></select></div>',
        '</div>',
        '<div class="support-secondary-grid">',
        '<div class="field"><label class="label">Контактный e-mail <span class="required">*</span></label><input class="input" type="email" placeholder="example@domain.ru" /></div>',
        '<div class="field"><label class="label">Контактный телефон</label><input class="input" placeholder="+7 (___) ___-__-__" /></div>',
        '</div>',
        '<div class="field"><label class="label">Организация</label><input class="input" placeholder="Наименование организации" /></div>',
        '<div class="field"><label class="label">Описание обращения <span class="required">*</span></label><textarea class="textarea" placeholder="Опишите проблему, шаги воспроизведения, дату и время."></textarea></div>',
        '<div class="field">',
        '<label class="label">Вложение</label>',
        '<label class="file-upload">',
        '<input type="file" />',
        '<span class="file-upload-btn">' + fileUploadIconSvg() + '<span>Прикрепить файл</span></span>',
        '</label>',
        '</div>',
        '<label class="body-sm" style="display:flex; gap:12px; align-items:flex-start; color:#334155;"><input type="checkbox" style="margin-top:4px;">Подтверждаю корректность указанных данных и согласие на обработку обращения.</label>',
        '<div class="row-between" style="gap:16px; align-items:stretch;">',
        '<button class="btn btn-ghost" type="button" data-page="support">Отменить</button>',
        '<button class="btn btn-primary" type="submit">Отправить обращение</button>',
        '</div>',
        '</form>',
        '</section>',
        '</section>',
        '<aside class="stack">',
        supportSidebar(false),
        '</aside>',
        '</div>',
        '</main>'
    ].join('');
}

function runTests() {
    const tests = [
        {
            name: 'toolCard добавляет бейдж для тестового инструмента',
            run: function () {
                return toolCard({ title: 'УВБА', description: 'Тестирование', accent: '#94A3B8', isTest: true }).includes('Тестовая версия');
            }
        },
        {
            name: 'toolCard использует специальную иконку для тестового инструмента',
            run: function () {
                return toolCard({ title: 'УВБА', description: 'Тестирование', accent: '#94A3B8', isTest: true }).includes('testToolAccent');
            }
        },
        {
            name: 'toolCard не добавляет бейдж для рабочего инструмента',
            run: function () {
                return !toolCard({ title: 'УВБА', description: 'Рабочий режим', accent: '#1E63C6', isTest: false }).includes('Тестовая версия');
            }
        },
        {
            name: 'toolCard использует новую иконку для Реестра',
            run: function () {
                const html = toolCard({ title: 'Реестр', description: 'Сведения из ЕГРЮЛ участников бюджетного процесса', accent: '#1E63C6', isTest: false });
                return html.includes('registryAccent') && html.includes('fill="#00CD90" fill-opacity="0.28"');
            }
        },
        {
            name: 'toolCard использует новую иконку для Форумов',
            run: function () {
                const html = toolCard({ title: 'Форумы', description: 'Форумы по экономическим вопросам', accent: '#D45500', isTest: false });
                return html.includes('forumAccent') && html.includes('fill="#D45500"');
            }
        },
        {
            name: 'toolCard добавляет data-tool для точной настройки веса иконки',
            run: function () {
                const html = toolCard({ title: 'Реестр', description: 'Сведения из ЕГРЮЛ участников бюджетного процесса', accent: '#1E63C6', isTest: false });
                return html.includes('data-tool="Реестр"');
            }
        },
        {
            name: 'cabinetPage содержит логин, пользователя и организацию',
            run: function () {
                const html = cabinetPage();
                return html.includes('Логин') && html.includes('Иванов Василий Федорович') && html.includes('Департамент экономической политики');
            }
        },
        {
            name: 'cabinetPage содержит блок сборов данных',
            run: function () {
                const html = cabinetPage();
                return html.includes('Сборы данных') && html.includes('Активных сборов пока нет.');
            }
        },
        {
            name: 'supportFormPage использует такие же правые блоки как портал',
            run: function () {
                const html = supportFormPage();
                return html.includes('Личный кабинет') && html.includes('Служба поддержки');
            }
        },
        {
            name: 'supportFormPage содержит новую кнопку прикрепления файла',
            run: function () {
                const html = supportFormPage();
                return html.includes('Прикрепить файл') && !html.includes('Выберите файл');
            }
        },
        {
            name: 'newsPage содержит кнопку расширенного поиска',
            run: function () {
                const html = newsPage();
                return html.includes('Расширенный поиск');
            }
        },
        {
            name: 'newsPage содержит ссылку показать еще',
            run: function () {
                return newsPage().includes('Показать еще');
            }
        },
        {
            name: 'homePage содержит ссылку подробнее в блоке о центре',
            run: function () {
                const html = homePage();
                return html.includes('Подробнее') && html.includes('data-page="about"');
            }
        },
        {
            name: 'footer содержит копирайт только ЦОИАС в первой колонке',
            run: function () {
                const html = footer();
                return html.includes('© ЦОИАС') && !html.includes('© Минобрнауки России · ЦОИАС') && html.includes('Минобрнауки России · ЦОИАС');
            }
        }
    ];

    return tests.map(function (test) {
        try {
            return { name: test.name, ok: !!test.run() };
        } catch (error) {
            return { name: test.name, ok: false, error: error.message };
        }
    });
}

function bindNavigation(app) {
    app.querySelectorAll('[data-page]').forEach(function (el) {
        el.addEventListener('click', function () {
            state.page = el.getAttribute('data-page');
            render();
        });
    });
}

function bindToggles(app) {
    app.querySelectorAll('[data-toggle="faq"]').forEach(function (el) {
        el.addEventListener('click', function () {
            state.faqExpanded = !state.faqExpanded;
            render();
        });
    });

    app.querySelectorAll('[data-toggle="docs"]').forEach(function (el) {
        el.addEventListener('click', function () {
            state.docsExpanded = !state.docsExpanded;
            render();
        });
    });

    app.querySelectorAll('[data-toggle-answer]').forEach(function (el) {
        el.addEventListener('click', function () {
            const answer = document.getElementById(el.getAttribute('data-toggle-answer'));
            if (answer) answer.classList.toggle('hidden');
        });
    });
}

function bindSearch() {
    const faqSearch = document.getElementById('faq-search');
    if (faqSearch) {
        faqSearch.addEventListener('input', function (e) {
            state.faqQuery = e.target.value;
            render();
        });
    }

    const docsSearch = document.getElementById('docs-search');
    if (docsSearch) {
        docsSearch.addEventListener('input', function (e) {
            state.docsQuery = e.target.value;
            render();
        });
    }
}

function bindForms() {
    const loginForm = document.getElementById('support-login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            state.page = 'cabinet';
            render();
        });
    }
}

function render() {
    const app = document.getElementById('app');
    const pages = {
        home: homePage,
        news: newsPage,
        support: supportPage,
        about: aboutPage,
        cabinet: cabinetPage,
        'support-form': supportFormPage
    };

    const pageRenderer = pages[state.page] || homePage;
    app.innerHTML = header() + navbar() + pageRenderer() + footer();

    bindNavigation(app);
    bindToggles(app);
    bindSearch();
    bindForms();
}

render();