import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./order.css";

const OrderPage = () => {
  const location = useLocation();
  const { vehicle } = location.state;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = () => {
    console.log(name, email);
  };

  return (
    <div id="order-wrap">
      <img
        id="image"
        src={vehicle.image.url}
        alt={`Tesla ${vehicle.image.filename}`}
      ></img>
      <div id="order-fields">
        <input onChange={onNameChange} />
        <input onChange={onEmailChange} />
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default OrderPage;
