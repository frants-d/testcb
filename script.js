const state = { page: 'home' };

const newsItems = [
    {
        date: '12.03.2026',
        weekday: 'Четверг',
        tags: ['Газ', 'Плановые показатели', 'Письма'],
        paragraphs: [
            'Руководителям подведомственных Минобрнауки России учреждений.',
            'Минобрнауки России в целях ежегодного запроса ООО «Газпром межрегионгаз» в части представления объемов потребления в 2027 году природного газа сообщает об открытии сбора информации о расчетных объемах поставки газа подведомственными Минобрнауки России организациями, финансируемыми за счет средств федерального бюджета.',
            'Сбор данных о планируемых объёмах потребления газа в 2027 году реализован в информационно-аналитической системе по адресу http://www.cbias.ru в разделе «Сбор и обработка плановых и отчетных показателей» / «Расчетные объемы поставки газа на 2027 год». Минобрнауки России просит представить запрашиваемую информацию в срок не позднее 27 марта 2026 года.'
        ],
        links: ['портале']
    },
    {
        date: '10.02.2026',
        weekday: 'Вторник',
        tags: ['Платные услуги', 'Мониторинг', 'Письма'],
        paragraphs: [
            'Федеральным органам исполнительной власти, имеющим в своем ведении государственные образовательные организации высшего образования (по списку). Письмо Минобрнауки России от 6 февраля 2026 года № МН-18/219-АО «О предварительном мониторинге стоимости платных образовательных услуг».',
            'Минобрнауки России информирует о проведении предварительного мониторинга установления стоимости платных образовательных услуг по программам высшего образования и среднего профессионального образования на 2026/2027 учебный год для образовательных организаций высшего образования на портале cbias.ru в разделе «Сведения по платным образовательным услугам».',
            'Сбор сведений организаций о стоимости обучения для поступающих на первый курс, а также для обучающихся второго и последующих курсов будет осуществляться в срок по 20 февраля 2026 года.'
        ],
        links: ['письмо', 'портале']
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

function iconFor(title, stroke) {
    if (title === 'УВБА') {
        return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="${stroke}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h6M7 16h8"/></svg>`;
    }
    if (title === 'Паспорта работ') {
        return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="${stroke}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h6"/></svg>`;
    }
    if (title === 'Реестр') {
        return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="${stroke}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/><path d="M8 14h2M12 14h2M16 14h2"/></svg>`;
    }
    return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="${stroke}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/><circle cx="9" cy="11" r="1"/><circle cx="13" cy="11" r="1"/><circle cx="17" cy="11" r="1"/></svg>`;
}

function toolCard(tool) {
    return `
        <section class="card tool-card">
          <div class="tool-body">
            <div class="tool-top">
              <div class="tool-icon">${iconFor(tool.title, tool.accent)}</div>
              ${tool.isTest ? '<span class="badge">Тестовая версия</span>' : ''}
            </div>
            <h3 class="tool-title">${tool.title}</h3>
            <div class="body-sm">${tool.description}</div>
          </div>
        </section>
      `;
}

function header() {
    return `
        <header class="header">
          <div class="container header-inner">
            <div class="brand-left">
              <div class="brand-logo">ЦОИАС</div>
              <div class="coat">герб</div>
              <div class="ministry">МИНОБРНАУКИ<br>РОССИИ</div>
            </div>
            <div class="brand-right">
              <div>Портал информационного взаимодействия с организациями</div>
              <div>и учреждениями, участниками бюджетного процесса</div>
            </div>
          </div>
        </header>
      `;
}

function navbar() {
    const items = [
        ['О центре', 'home'],
        ['Новости', 'news'],
        ['Документы', 'home'],
        ['Служба поддержки', 'home']
    ];
    return `
        <nav class="nav">
          <div class="container">
            <ul class="nav-list">
              ${items.map(([label, page]) => `
                <li><button class="nav-btn ${state.page === page ? 'active' : ''}" data-page="${page}">${label}</button></li>
              `).join('')}
            </ul>
          </div>
        </nav>
      `;
}

function footer() {
    return `
        <footer class="footer">
          <div class="container footer-grid">
            <div>
              <div class="footer-title">ЦОИАС · Минобрнауки России</div>
              <div class="body-sm">Портал информационного взаимодействия для участников бюджетного процесса. Техническая и методическая поддержка, обмен данными и работа с финансово-экономическими инструментами.</div>
            </div>
            <div>
              <div class="caption" style="font-weight:700;color:#334155;margin-bottom:8px;">Навигация</div>
              <div><button class="text-link" data-page="home">О центре</button></div>
              <div><button class="text-link" data-page="news">Новости</button></div>
            </div>
            <div>
              <div class="caption" style="font-weight:700;color:#334155;margin-bottom:8px;">Контакты</div>
              <div class="body-sm">(495) 225-14-43</div>
              <div class="body-sm">(495) 225-14-47</div>
              <div class="body-sm" style="margin-top:8px;">support@cbias.ru</div>
            </div>
          </div>
          <div class="container footer-copy">© Минобрнауки России · ЦОИАС</div>
        </footer>
      `;
}

function homePage() {
    return `
        <main class="main">
          <div class="container grid">
            <section class="stack">
              <section class="card">
                <div class="section-head">
                  <h2 class="section-title">Новое на портале</h2>
                  <div class="section-subtitle">Обновлено сегодня</div>
                </div>
                <article class="news-item">
                  <div class="caption">12.03.2026, Четверг</div>
                  <div class="body-sm" style="margin-top:8px;">Руководителям подведомственных Минобрнауки России учреждений. Минобрнауки России в целях ежегодного запроса ООО «Газпром межрегионгаз» в части представления объемов потребления в 2027 году природного газа сообщает об открытии сбора информации о расчетных объемах поставки газа...</div>
                  <button class="text-link" data-page="news" style="margin-top:8px;">Читать полностью</button>
                </article>
              </section>

              <section class="card hero">
                <div class="hero-grid">
                  <div class="hero-copy">
                    <span class="pill">Единая рабочая среда</span>
                    <h2 class="section-title" style="margin-bottom:16px;">О портале</h2>
                    <div class="body">Портал информационного взаимодействия поддерживает организации и сотрудников министерства, участвующих в бюджетном процессе. Обеспечивает удобный обмен данными и работу с финансово-экономическими инструментами.</div>
                    <a class="link" href="#" style="margin-top:8px;">Подробнее</a>
                  </div>
                  <div class="hero-visual"></div>
                </div>
              </section>

              <section class="card soft">
                <div class="section-head">
                  <h2 class="section-title">ЦОИАС</h2>
                  <div class="caption" style="color:#003385;font-weight:700;">О центре</div>
                </div>
                <div class="body" style="color:#334155;">Центр отраслевых информационно-аналитических систем (ЦОИАС) создан в 2023 году в соответствии с приказом Минобрнауки России от 5 мая 2003 года №1963. Центр обеспечивает информационно-технологическую поддержку бюджетных процессов, участвует в планировании и финансовом обеспечении госзаданий, разрабатывает нормативы затрат.</div>
                <a class="link" href="#" style="display:inline-block;margin-top:12px;font-weight:600;">Подробнее</a>
              </section>
            </section>

            <aside class="stack">
              <section class="card">
                <div class="section-head">
                  <h2 class="section-title">Личный кабинет</h2>
                </div>
                <div class="body-sm" style="margin-bottom:24px;">Вход в личный кабинет участника бюджетного процесса</div>
                <form id="login-form" class="stack" style="gap:16px;">
                  <div class="field">
                    <label class="label">Логин</label>
                    <input class="input" placeholder="Введите логин">
                  </div>
                  <div class="field">
                    <label class="label">Пароль</label>
                    <input class="input" type="password" placeholder="Введите пароль">
                  </div>
                  <div class="row-between caption">
                    <label><input type="checkbox"> Запомнить меня</label>
                    <a class="link" href="#">Забыли пароль?</a>
                  </div>
                  <button class="btn btn-primary" type="submit">Войти</button>
                </form>
              </section>

              <section class="card support">
                <h2 class="section-title" style="margin:0 0 16px;">Служба поддержки</h2>
                <div class="body-sm" style="margin-bottom:16px;color:#334155;">Для консультаций по работе портала и вопросам взаимодействия воспользуйтесь разделом службы поддержки.</div>
                <div class="stack" style="gap:12px;">
                  <div class="info-box body-sm" style="color:#334155;">
                    <div>Многоканальные телефоны:</div>
                    <div style="margin-top:4px;">(495) 225-14-43</div>
                    <div>(495) 225-14-47</div>
                  </div>
                  <div class="info-box body-sm" style="color:#334155;">support@cbias.ru</div>
                </div>
              </section>
            </aside>
          </div>
        </main>
      `;
}

function newsPage() {
    return `
        <main class="main">
          <div class="container grid">
            <section class="stack">
              <section class="card">
                <div class="section-head">
                  <h2 class="section-title">Новости</h2>
                  <div class="section-subtitle">Показано: ${newsItems.length}</div>
                </div>
                <div class="body">Подборка новостей портала для участников бюджетного процесса. Для поиска можно использовать дату, тему и ключевые слова.</div>
              </section>

              ${newsItems.map(item => `
                <section class="card">
                  <div class="section-head" style="margin-bottom:16px;align-items:flex-start;flex-direction:column;">
                    <div class="caption">${item.date}, ${item.weekday}</div>
                    <div style="display:flex;flex-wrap:wrap;gap:8px;">${item.tags.map(tag => `<span class="mn-tag">${tag}</span>`).join('')}</div>
                  </div>
                  <div class="body-sm" style="display:grid;gap:16px;color:#334155;">${item.paragraphs.map(p => `<p style="margin:0;">${p}</p>`).join('')}</div>
                  <div style="display:flex;gap:20px;flex-wrap:wrap;margin-top:16px;">${item.links.map(l => `<a href="#" class="link">${l}</a>`).join('')}</div>
                </section>
              `).join('')}
            </section>

            <aside class="stack">
              <section class="card">
                <div class="section-head">
                  <h2 class="section-title">Новости</h2>
                  <div class="section-subtitle">Поиск и фильтр</div>
                </div>
                <div class="field">
                  <label class="label">Поиск по новостям</label>
                  <input class="input" placeholder="Введите дату, тему или ключевое слово">
                </div>
              </section>

              <section class="card support">
                <h2 class="section-title" style="margin:0 0 16px;">Служба поддержки</h2>
                <div class="body-sm" style="color:#334155;">По вопросам работы портала обращайтесь в службу поддержки. Контакты и порядок обращения соответствуют общей стилистике главной страницы.</div>
              </section>
            </aside>
          </div>
        </main>
      `;
}

function cabinetPage() {
    return `
        <main class="main">
          <div class="container grid">
            <section class="stack">
              <section class="card">
                <div class="section-head">
                  <h2 class="section-title">Личный кабинет</h2>
                  <div class="section-subtitle">Финансово-экономические инструменты</div>
                </div>
                <div class="body">После входа в личный кабинет пользователю доступны рабочие и тестовые версии инструментов портала.</div>
              </section>

              <section class="card">
                <div class="section-head">
                  <h2 class="section-title">Тестовые версии</h2>
                  <div class="section-subtitle">Стенды для проверки и отладки</div>
                </div>
                <div class="tools-grid">${testTools.map(toolCard).join('')}</div>
              </section>
            </section>

            <aside class="stack">
              <section class="card">
                <div class="section-head">
                  <h2 class="section-title">Авторизация</h2>
                  <div class="section-subtitle">Текущая сессия</div>
                </div>
                <div class="stack" style="gap:16px;">
                  <div class="news-item"><div class="label">Пользователь</div><div class="body-sm" style="margin-top:4px;">demo@cbias.ru</div></div>
                  <div class="news-item"><div class="label">Статус</div><div class="body-sm" style="margin-top:4px;">Доступ к личному кабинету активен</div></div>
                  <button class="btn btn-secondary" type="button" data-page="home">Выйти</button>
                </div>
              </section>

              <section class="card">
                <div class="section-head">
                  <h2 class="section-title">Рабочие версии</h2>
                  <div class="section-subtitle">Основные инструменты портала</div>
                </div>
                <div class="tools-grid">${workingTools.map(toolCard).join('')}</div>
              </section>

              <section class="card">
                <div class="section-head">
                  <h2 class="section-title">Уведомления</h2>
                  <div class="section-subtitle">Сообщения, требующие внимания</div>
                </div>
                <div class="stack" style="gap:16px;">
                  <section class="news-item notice-text">
                    <div>Методическая поддержка пилотного проекта по реализации мер государственной поддержки преподавателей фундаментальных дисциплин.</div>
                    <div>По вопросам перечня фундаментальных дисциплин и ключевых показателей оценки эффективности: contactcenter@sociocenter.info.</div>
                    <div>По вопросам финансовых показателей и обоснования объемов субсидии: otootvop@minobrnauki.gov.ru.</div>
                    <a href="#" class="link">Пилотный проект</a>
                  </section>
                  <section class="news-item notice-text">
                    <div>Сведения, представленные Учреждением после завершения ввода данных, оперативно принимаются в работу для анализа. Заключение по результатам оценки финансового состояния будет направлено официальным письмом через систему СУАД.</div>
                    <div>По всем вопросам просьба обращаться к кураторам по телефонам: +7 926 573-80-77, +7 926 586-59-50, +7 926 580 84 75, +7 926 583 42 89.</div>
                  </section>
                </div>
              </section>
            </aside>
          </div>
        </main>
      `;
}

function render() {
    const app = document.getElementById('app');
    const page = state.page === 'news' ? newsPage() : state.page === 'cabinet' ? cabinetPage() : homePage();
    app.innerHTML = `${header()}${navbar()}${page}${footer()}`;

    app.querySelectorAll('[data-page]').forEach((el) => {
        el.addEventListener('click', () => {
            state.page = el.getAttribute('data-page');
            render();
        });
    });

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            state.page = 'cabinet';
            render();
        });
    }
}

render();