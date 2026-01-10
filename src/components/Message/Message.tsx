/* Завдання 
Створи компонент Message, який приймає через props рядок text 
і відображає його в <p>. 
Умови В App.tsx передай текст "Hello from App"
Компонент показує цей текст Очікуваний результат
На сторінці напис: Hello from App */

import css from "./Message.module.css";

type MessageProps = {
    text: string;
};

export default function Message({ text }: MessageProps) {
    return <p className={css.message}>{text}</p>;
}