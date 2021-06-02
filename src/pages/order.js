import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { CREATE_ORDER } from "../queries";
import { Link } from "react-router-dom";

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
    // Check if fields are filled before sending
    if (name !== "" && email !== "")
      // GraphQL mutation
      createOrder({
        variables: {
          customerName: name,
          customerEmail: email,
          vehicleId: vehicle.id,
        },
      });
  };
  const [createOrder, { data }] = useMutation(CREATE_ORDER);

  // Order successfully received screen
  if (data) {
    return (
      <div id="order-success">
        <h1 id="vehicle-name">Order successful!</h1>
        <Link to="/">
          <button id="order-submit">Return to homepage</button>
        </Link>
      </div>
    );
  }

  return (
    <div id="order-wrap">
      <div id="order-fields">
        <h1 id="title">Finalize Order</h1>
      </div>
      <div id="vehicle">
        <h4 id="vehicle-name">{vehicle.name}</h4>
        <div id="vehicle-image-stats">
          <img
            id="vehicle-image"
            src={vehicle.image.url}
            alt={vehicle.image.filename}
          ></img>
          <div id="vehicle-stats">
            <p id="vehicle-price">{`Price: ${vehicle.price}`}</p>
            <p id="vehicle-mileage">{`Mileage: ${vehicle.mileage}`}</p>
            <p id="vehicle-vin">{`Vin: ${vehicle.vin}`}</p>
            <p id="vehicle-year">{`Year: ${vehicle.year}`}</p>
          </div>
        </div>
        <p id="vehicle-description">{`${vehicle.description}`}</p>
      </div>
      <div id="order-fields">
        <h4 id="title">Please provide your name and email</h4>
        <input
          value={name}
          placeholder="Name"
          id="order-name"
          onChange={onNameChange}
        />
        <input
          value={email}
          placeholder="Email"
          id="order-email"
          onChange={onEmailChange}
        />
        <button id="order-submit" onClick={onSubmit}>
          Order vehicle
        </button>
      </div>
    </div>
  );
};

export default OrderPage;
