import { useQuery } from "@apollo/client";
import { GET_VEHICLES } from "../queries";
import { Link } from "react-router-dom";

const Vehicles = () => {
  const { loading, data } = useQuery(GET_VEHICLES);

  if (loading) {
    return (
      <div id="loading-wrap">
        <h1>Loading Vehicles...</h1>
      </div>
    );
  }

  return (
    <div id="vehicles">
      {data.vehicles.map((vehicle) => {
        return (
          <div id="vehicle" key={vehicle.id}>
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
            <Link
              to={{
                pathname: "/Order",
                state: {
                  vehicle: vehicle,
                },
              }}
            >
              <button id="vehicle-orderbutton">Order vehicle</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Vehicles;
