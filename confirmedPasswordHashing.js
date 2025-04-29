import argon2 from 'argon2';
import inquirer from 'inquirer';

async function main() {
    try {
        const answers = await inquirer.prompt([
            {
                type: 'password',
                name: 'Password',
                message: 'Enter your password:',
                mask: '*'
            },
            {
                type: 'password',
                name: 'Confirm_your_password',
                message: 'Confirm your password:',
                mask: '*'
            }
        ]);

        console.log('Password:', answers.Password);
        console.log('Confirmed password:', answers.Confirm_your_password);

        if (answers.Password === answers.Confirm_your_password) {
            const hashedPassword = await argon2.hash(answers.Password);
            console.log('Hashed Password:', hashedPassword);
        } else {
            console.log('Passwords do not match.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

main();

// Використовує argon2 для хешування паролів. Використовує inquirer для отримання вводу користувача через консоль з підтримкою паролів.
// Порівнює введений пароль і підтверджений пароль. Якщо вони співпадають, виконується хешування пароля за допомогою argon2.
// Використовує async/await для асинхронної роботи з паролями і хешуванням.
// Цей код є більш сучасним і використовує ES6 модулі замість require, а також більш потужну бібліотеку для взаємодії з користувачем — inquirer.
