import Product from "../Product/Product";
import Button from "../Button/Button";
import UserMenu from "../UserMenu/UserMenu";
import ActionButton from "../ActionButton/ActionButton";
import Message from "../Message/Message";
import ItemList from "../ItemList/ItemList";

export default function App() {
  const fruits = ["Apple", "Banana", "Orange"];
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
    </>
  );
}
