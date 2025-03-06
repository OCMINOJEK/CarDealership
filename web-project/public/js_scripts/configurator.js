document.addEventListener('DOMContentLoaded', () => {
    const carForm = document.getElementById('carForm');
    const resultDiv = document.getElementById('result');
    const loadConfigButton = document.getElementById('loadConfig');

    if (!carForm || !resultDiv || !loadConfigButton) {
        console.error('Ошибка: не найден один из элементов формы.');
        return;
    }

    function generateConfiguration(event) {
        event.preventDefault();

        const model = document.getElementById('model').value;
        const color = document.getElementById('color').value;
        const engine = document.getElementById('engine').value;

        const options = [];
        document.querySelectorAll('.form-group-inline input[type="checkbox"]').forEach(checkbox => {
            if (checkbox.checked) options.push(checkbox.value);
        });

        resultDiv.innerHTML = `<h3>Конфигурация автомобиля:</h3>`;
        resultDiv.appendChild(createParagraph('Модель', model));
        resultDiv.appendChild(createParagraph('Цвет', color));
        resultDiv.appendChild(createParagraph('Тип двигателя', engine));
        resultDiv.appendChild(createParagraph('Дополнительные опции', options.length ? options.join(', ') : 'Нет'));

        localStorage.setItem('carConfiguration', JSON.stringify({ model, color, engine, options }));
    }

    function loadConfiguration() {
        const savedConfig = localStorage.getItem('carConfiguration');
        if (!savedConfig) {
            alert('Сохранённая конфигурация не найдена.');
            return;
        }

        const config = JSON.parse(savedConfig);
        document.getElementById('model').value = config.model;
        document.getElementById('color').value = config.color;
        document.getElementById('engine').value = config.engine;

        document.querySelectorAll('.form-group-inline input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = config.options.includes(checkbox.value);
        });

        generateConfiguration(new Event('submit'));
    }

    function createParagraph(label, value) {
        const paragraph = document.createElement('p');
        paragraph.innerHTML = `<strong>${label}:</strong> ${value}`;
        return paragraph;
    }

    carForm.addEventListener('submit', generateConfiguration);
    loadConfigButton.addEventListener('click', loadConfiguration);
});
