import { useState } from "react";
import axios from "axios";
import Product from "../Product/Product";
import Button from "../Button/Button";
import UserMenu from "../UserMenu/UserMenu";
import ActionButton from "../ActionButton/ActionButton";
import Message from "../Message/Message";
import ItemList from "../ItemList/ItemList";
import OrderForm from "../OrderForm/OrderForm";
import SearchForm from "../SearchForm/SearchForm";
import ArticleList from "../ArticleList/ArticleList";
import type { Article, ArticlesHttpResponse } from "../../types/article";
import { fetchArticles } from "../../services/articleService";

export default function App() {
  const fruits = ["Apple", "Banana", "Orange"];
  const handleOrder = (data: string) => {
    console.log("Order received from:", data);
  };
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = async (topic: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const data = await fetchArticles(topic);
      setArticles(data);
    }catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <UserMenu name="Oksana" />

      <h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={10.99}
      />

      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={14.29}
      />

      <Button variant="primary" text="Login" />
      <Button variant="secondary" text="Follow" />

      <ActionButton text="Click me" />
      <ActionButton text="Share screen" />

      <Message text="Hello from App" />
      
      <ItemList title="Fruits" items={fruits} />

      <h1>Place your order</h1>
      <OrderForm onSubmit={handleOrder} />

      <SearchForm onSubmit={handleSearch} />
      {isLoading && <p>Loading data, please wait...</p>}
      {isError && <p>Whoops, something went wrong! Please try again!</p>}
      {articles.length > 0 && <ArticleList items={articles} />}
    </>
  );
}
