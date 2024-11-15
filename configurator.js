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

    const configuration = `
        <h3>Конфигурация автомобиля:</h3>
        <p><strong>Модель:</strong> ${model}</p>
        <p><strong>Цвет:</strong> ${color}</p>
        <p><strong>Тип двигателя:</strong> ${engine}</p>
        <p><strong>Дополнительные опции:</strong> ${options.length > 0 ? options.join(', ') : 'Нет'}</p>
    `;

    resultDiv.innerHTML = configuration;

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
        console.log(document.getElementById('model').value);

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
