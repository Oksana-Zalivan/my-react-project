import type { Article } from "../../types/article";

type Props = {
    items: Article[];
};

export default function ArticleList({ items }: Props) {
    return (
        <ul>
            {items.map(({ objectID, title, url }) => (
                <li key={objectID}>
                    <a href={url} target="_blank" rel="noreferrer">
                        {title}
                    </a>
                </li>
            ))}
        </ul>
    );
}
