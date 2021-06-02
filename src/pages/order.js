import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { CREATE_ORDER } from "../queries";
import { Link } from "react-router-dom";

const OrderPage = () => {
  console.log("XD");
  const location = useLocation();
  const { vehicle } = location.state;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [createOrder, { data }] = useMutation(CREATE_ORDER);
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onSubmit = () => {
    console.log(vehicle);
    createOrder({
      variables: {
        customerName: name,
        customerEmail: email,
        vehicleId: vehicle.id,
      },
    });
  };

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
      <div id="vehicle" key={vehicle.id}>
        <h4 id="vehicle-name">{vehicle.name}</h4>
        <div id="vehicle-image-stats">
          <img
            id="vehicle-image"
            src={vehicle.image.url}
            alt={`Tesla ${vehicle.image.filename}`}
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
      <form id="order-fields">
        <h4 id="vehicle-name">Please provide your name and email</h4>
        <input placeholder="Name" id="order-name" onChange={onNameChange} />
        <input placeholder="Email" id="order-email" onChange={onEmailChange} />
        <button id="order-submit" onClick={onSubmit}>
          Order vehicle
        </button>
      </form>
    </div>
  );
};

export default OrderPage;
