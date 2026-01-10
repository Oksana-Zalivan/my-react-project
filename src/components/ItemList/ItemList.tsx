// Завдання
// Створи компонент ItemList, який:
// містить масив рядків всередині компонента
// рендерить список <ul><li>
// Дані (всередині компонента)
// ["Apple", "Banana", "Orange"]

import css from "./ItemList.module.css";

export default function ItemList() {
    const items = ["Apple", "Banana", "Orange"];

    return (
        <ul className={css.list}>
        {items.map((item) => (
            <li className={css.item} key={item}>
                {item}
            </li>
        ))}
        </ul>
    );
}
