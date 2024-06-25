const projectSlider = document.getElementById('projectSlider');
let scrollAmount = 0;
const scrollMax = projectSlider.scrollWidth - projectSlider.clientWidth;

function autoScroll() {
    scrollAmount += 1; // Скорость прокрутки
    if (scrollAmount >= scrollMax) {
        scrollAmount = 0; // Возвращаемся в начало при достижении конца
    }
    projectSlider.style.transform = `translateX(-${scrollAmount}px)`;
}

setInterval(autoScroll, 5); // Скорость анимации

document.addEventListener('DOMContentLoaded', function() {
    // Функция для замены символа "/" на синий цвет
    function replaceSlashWithColor() {
        let elements = document.querySelectorAll('h2, p, span, li');

        elements.forEach(element => {
            // Используем textContent для работы с текстом элемента
            let text = element.textContent;
            // Заменяем символ "/" на спан с классом для синего цвета
            let newText = text.replace(/\//g, '<span class="blue-slash">/</span>');
            // Устанавливаем новый HTML содержимое элемента
            element.innerHTML = newText;
        });
    }

    replaceSlashWithColor(); // Вызываем функцию для замены символов при загрузке страницы
});