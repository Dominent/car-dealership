import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { CREATE_ORDER } from "../queries";
import { Link } from "react-router-dom";
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
    console.log(data);
    createOrder({
      variables: {
        customerName: name,
        customerEmail: email,
        vehicleId: vehicle.id,
      },
    });
    console.log(name, email);
  };
  const [createOrder, { data }] = useMutation(CREATE_ORDER);

  if (data) {
    return (
      <div id="order-fields">
        <h1>Order successful!</h1>
        <Link to="/">
          <button>Return to homepage</button>
        </Link>
      </div>
    );
  }

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
