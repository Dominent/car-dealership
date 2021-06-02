import "./vehicles.css";
import { useQuery } from "@apollo/client";
import { GET_VEHICLES } from "../queries";

const Vehicles = () => {
  const { loading, data } = useQuery(GET_VEHICLES);
  const orderVehicle = (vehicle) => {
    console.log(vehicle);
  };

  if (loading) {
    return <h1>Loading Vehicles...</h1>;
  } else {
    console.log(data);
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
              <button
                id="vehicle-orderbutton"
                onClick={() => orderVehicle(vehicle)}
              >
                Order vehicle
              </button>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Vehicles;
