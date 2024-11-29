const carForm = document.getElementById('carForm');
const resultDiv = document.getElementById('result');
const loadConfigButton = document.getElementById('loadConfig');


function generateConfiguration(event) {

    event.preventDefault();

    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const engine = document.getElementById('engine').value;

    const options = [];
    if (document.getElementById('leatherSeats').checked) {
        options.push('Кожаный салон');
    }
    if (document.getElementById('panoramicRoof').checked) {
        options.push('Панорамная крыша');
    }
    if (document.getElementById('premiumAudio').checked) {
        options.push('Премиальная аудиосистема');
    }

    resultDiv.innerHTML = '';

    const heading = document.createElement('h3');
    heading.textContent = 'Конфигурация автомобиля:';
    resultDiv.appendChild(heading);

    //<p><strong>label:</strong> ${value}</p>
    function createParagraph(label, value) {
        const paragraph = document.createElement('p');

        const strong = document.createElement('strong');
        strong.textContent = `${label}: `;
        paragraph.appendChild(strong);

        const text = document.createTextNode(value);
        paragraph.appendChild(text);

        return paragraph;
    }

    resultDiv.appendChild(createParagraph('Модель', model));
    resultDiv.appendChild(createParagraph('Цвет', color));
    resultDiv.appendChild(createParagraph('Тип двигателя', engine));
    resultDiv.appendChild(createParagraph('Дополнительные опции', options));


    const carConfig = {
        model,
        color,
        engine,
        options,
    };
    localStorage.setItem('carConfiguration', JSON.stringify(carConfig));
}

function loadConfiguration() {
    const savedConfig = localStorage.getItem('carConfiguration');

    if (savedConfig) {
        const config = JSON.parse(savedConfig);

        document.getElementById('model').value = config.model;
        document.getElementById('color').value = config.color;
        document.getElementById('engine').value = config.engine;

        document.getElementById('leatherSeats').checked = config.options.includes('Кожаный салон');
        document.getElementById('panoramicRoof').checked = config.options.includes('Панорамная крыша');
        document.getElementById('premiumAudio').checked = config.options.includes('Премиальная аудиосистема');

        generateConfiguration(new Event('submit'));
    } else {
        alert('Сохранённая конфигурация не найдена.');
    }
}

carForm.addEventListener('submit', generateConfiguration);
loadConfigButton.addEventListener('click', loadConfiguration);
