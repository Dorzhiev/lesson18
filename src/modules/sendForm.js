const sendForm = () => {
    const errorMessage = 'что то пошло не так..',
        loadMessage = 'Загрузка',
        successMesage = 'Спасибо! Мы скоро с вами свяжемся';
    const form = document.querySelectorAll('form');

    const statusMessage = document.createElement('div');
    statusMessage.textContent = 'тут будет сообщение!';
    statusMessage.style.cssText = 'font-size: 2rem;'
    statusMessage.style.cssText = 'font-size: 2rem; color: white;'



    form.forEach(item => item.addEventListener('submit', (event) => {
        event.preventDefault();
        item.appendChild(statusMessage); // добавляем к определенной форме сообщение
        statusMessage.textContent = loadMessage;
        const formData = new FormData(item); // записываем данные с определенной формы
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });

        // const popup = document.querySelector('.popup');
        postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                statusMessage.textContent = successMesage;
                setTimeout(() => {
                    // popup.style.display = 'none';
                    statusMessage.textContent = '';
                    [...document.querySelectorAll('input')].forEach(item => item.value = '');
                }, 3000);
            }, (error) => {
                statusMessage.textContent = errorMessage;
                setTimeout(() => {
                    // popup.style.display = 'none';
                    statusMessage.textContent = '';
                    [...document.querySelectorAll('input')].forEach(item => item.value = '');
                }, 3000);
            });
    }));

    const postData = (body) => {
        return fetch( './server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
            credentials: 'include',
            cache: 'default'
        })
        
  };
    const formPhone = document.querySelectorAll('.form-phone');
    formPhone.forEach((item) => {
        item.addEventListener('input', (event) => {
            const target = event.target;
            if (target.matches('input')) {
                target.value = target.value.replace(/(?!^\+)\D/g, '');
            }
        });
    });

    const formName = document.querySelectorAll('.form-name');
    formName.forEach((item) => {
        item.addEventListener('input', (event) => {
            const target = event.target;
            if (target.matches('input')) {
                target.value = target.value.replace(/(?![а-яА-Я])\D|[0-9]/g, '');
            }
        });
    });
    const formMessage = document.querySelector('.mess');
    formMessage.addEventListener('input', (event) => {
        const target = event.target;
        target.value = target.value.replace(/[^а-яА-Я\s\,\.\?\!\-\;\:]/g, '');

    });
}

export default sendForm;