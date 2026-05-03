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


});