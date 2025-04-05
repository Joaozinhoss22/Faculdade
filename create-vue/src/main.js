import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    //Limpar mensagens de erro
    document.querySelectorAll('.error').forEach(function(error){
        error.textContent = '';
        error.style.display = 'none';
    });
    document.querySelectorAll('formMessage').textContent = '';

    //validação
    let hasError = false;

    const none = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('nameError').textContent = 'Por favor, insira seu nome.';
        document.getElementById('nameError').style.display = 'block';
        hasError = true;
    }

    const email = document.getElementById('email').value.trim();
    if (email === '') {
        document.getElementById('emailError').textContent = 'Por favor, insira um e-mail válido.'
        document.getElementById('emailError').style.display = 'block';
        hasError = true;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Por favor, insira um e-mail válido.'
        document.getElementById('emailError').style.display = 'block';
        hasError =true
    }

    const subject = document.getElementById('subject').value.trim();
    if (subject === ''){
        document.getElementById('subjectError').textContent = 'por favor, insira o assunto.';
        document.getElementById('subjectError').style.display = 'block';
        hasError = true
    }

    const message = document.getElementById('message').value.trim();
    if (email === '') {
        document.getElementById('messageError').textContent = 'Por favor, insira um e-mail válido.'
        document.getElementById('messageError').style.display = 'block';
        hasError = true;
    } 

    //Exibir messagem de sucesso ou erro 
    if (!hasError) {
        document.getElementById('FormMessage').textContent = 'Formulário enciado com sucesso!';
        document.getElementById('FormMessage').style.color = 'green';
    } else {
        document.getElementById('FormMessage').textContent = 'Por favor, corrija os erros acima e tente novamente.';
        document.getElementById('FormMessage').style.color = 'red';
    }
});

function validateEmail(email) {
    const re = /^[^\s@]=@[^\s@]+\.[^\@]+$/;
    return re.test(email);
}