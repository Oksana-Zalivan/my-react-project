// Завдання
// Створи компонент ActionButton, який показує 
// одну кнопку з текстом "Click me".
// Умови
// Компонент нічого не приймає через props
// Просто рендерить кнопку
// Очікуваний результат
// У браузері з’являється кнопка Click me

import css from "./ActionButton.module.css";

type ActionButtonProps = {
    text: string;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
};

export default function ActionButton({
    text,
    className = "",
    onClick,
    type = "button",
}: ActionButtonProps) {
    return (
        <button
        type={type}
        className={`${css.button} ${className}`.trim()}
        onClick={onClick}
        >
        {text}
    </button>
    );
}



