// Завдання
// Створи компонент ItemList, який:
// містить масив рядків всередині компонента
// рендерить список <ul><li>
// Дані (всередині компонента)
// ["Apple", "Banana", "Orange"]

import css from "./ItemList.module.css";

type ItemListProps = {
    items: string[];
    title?: string;
};

export default function ItemList({ items, title }: ItemListProps) {
    return (
    <div className={css.container}>
        {title && <h2>{title}</h2>}
        <ul>
            {items.map((item) => (
            <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
    );
}

