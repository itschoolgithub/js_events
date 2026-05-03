document.addEventListener('DOMContentLoaded', function () {

    let pressme = document.querySelector('.pressme');
    let username = document.querySelector('[name="username"]');
    let header = document.querySelector('.hello');
    let timer;

    // 1. При нажатии на кнопку, в h3 добавить текст
    // Привет, [username]!
    if (pressme) {
        pressme.textContent = 'Не нажимай на меня';

        pressme.addEventListener('click', function () {
            if (username && header) {
                header.textContent = 'Привет, ' + username.value + '!';
            }
            // alert(username.value);
        });
    }

    if (username) {
        username.addEventListener('input', function () {
            // console.log(username.value);
            clearTimeout(timer);

            // debounce функция
            timer = setTimeout(function () {
                console.log('Сработало измнение');
                header.textContent = 'Привет, ' + username.value + '!';
            }, 500);    
        });

        // username.addEventListener('change', function () {
        //     // console.log(username.value);
        //     header.textContent = 'Привет, ' + username.value + '!';
        // });

        // username.addEventListener('focus', function() {
        //     console.log('Focus');
        // });

        // username.addEventListener('blur', function() {
        //     console.log('Blur');
        // });
    }

    // 2. Добавляем кнопку в которой пишем текст 1
    // при клике на кнопку, увеличиваем это число
    let counter = document.querySelector('.counter');
    if (counter) {
        counter.addEventListener('click', function () {
            counter.textContent = +counter.textContent + 1;
            // counter.textContent++;
            // counter.textContent += 1;
        });
    }

    // 3. Добавляем кнопку, изначально красную
    // при клике на кнопку, меняем ее на синюю,
    // затем на снова на красную,
    // затем снова на синию при каждом клике
    let color = document.querySelector('.color');
    if (color) {
        color.addEventListener('click', function () {
            color.classList.toggle('blue');
        });
    }

    // 4. Добавляем ul список с именами, текстовое поле и кнопку
    // при нажатии на кнопку - добавляем в список пункт, с тем, что написано в поле
    // Усложнение: после добавления имени, очищать input
    // проверяйте чтобы имя было введено
    let list = document.querySelector('.list');
    let buttonAdd = document.querySelector('.add');
    let inputName = document.querySelector('[name="name"]');

    if (buttonAdd) {
        buttonAdd.addEventListener('click', function () {
            if (inputName && inputName.value) {
                let newName = document.createElement('li');
                newName.textContent = inputName.value;
                if (list) {
                    list.append(newName);
                }
                inputName.value = '';
            }
        });
    }

    let button1 = document.querySelector('.button-1');
    if (button1) {
        button1.addEventListener('click', hello);

        button1.addEventListener('click', function () {
            console.log('Hello');
        });
    }

    function hello() {
        alert('Hello');
        button1.removeEventListener('click', hello);
    }


    let buttonA = document.querySelector('.button-a');
    let buttonB = document.querySelector('.button-b');
    let buttonC = document.querySelector('.button-c');

    if (buttonA && buttonB && buttonC) {
        buttonB.addEventListener('click', function () {
            buttonA.addEventListener('click', increment);
        });

        buttonC.addEventListener('click', function () {
            buttonA.removeEventListener('click', increment);
        });
    }

    function increment() {
        buttonA.textContent++;
    }

    let divHello = document.querySelector('.div-hello');
    let buttonHello = document.querySelector('.button-hello');
    let spanHello = document.querySelector('.button-hello span');

    if (divHello && buttonHello && spanHello) {
        divHello.addEventListener('click', function () {
            // alert('Кликнули по div');
            console.log(event.target);
            console.log(event.currentTarget);
            event.target.textContent = 'adfasf';
        });

        buttonHello.addEventListener('click', function () {
            // alert('Кликнули по button');
        });

        spanHello.addEventListener('click', function (event) {
            event.stopPropagation();
            // alert('Кликнули по span');
        });

        document.addEventListener('click', function (event) {
            // console.log(event.target);
            // console.log(event.currentTarget);
            // alert('Кликнули по документу');
        });

        let a = document.querySelector('a');
        a.addEventListener('click', function (event) {
            event.preventDefault();
            a.textContent = 'Иди в яндекс';
        });

        // form.addEventListener('submit', function (event) {
        //     event.preventDefault();
        // });

        // Есть три кнопки: левая, средняя и правая
        // Правая кнопка: при нажатии увеличивает значение на 1
        // при достижении 10 - сбрасывается до 0
        // и активирует среднюю кнопку
        // Средняя кнопка может увеличиться на 1 только один раз
        // после активации
        // После нажатия снова блокируется
        // После 10 нажатий активирует левую кнопку
        // Левая кнопка может увеличиться на 1 только один раз
        // после активации

        let left = document.querySelector('.left');
        let middle = document.querySelector('.middle');
        let right = document.querySelector('.right');
        left.disabled = true;
        middle.disabled = true;
        right.disabled = false;

        function onRight() {
            right.textContent++;
            if (right.textContent >= 10) {
                right.textContent = 0;
                
                right.disabled = true;
                right.removeEventListener('click', onRight);
                
                middle.disabled = false;
                middle.addEventListener('click', onMiddle);
            }
        }

        function onMiddle() {
            middle.textContent++;

            middle.disabled = true;
            middle.removeEventListener('click', onMiddle);

            if (middle.textContent >= 10) {
                middle.textContent = 0;

                left.disabled = false;
                left.addEventListener('click', onLeft);
            } else {
                right.disabled = false;
                right.addEventListener('click', onRight);
            }
        }

        function onLeft() {
            left.textContent++;
            
            left.disabled = true;
            left.removeEventListener('click', onLeft);

            right.disabled = false;
            right.addEventListener('click', onRight);
        }

        right.addEventListener('click', onRight);
    }
});