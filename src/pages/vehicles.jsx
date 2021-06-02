import "./vehicles.css";
import { useQuery } from "@apollo/client";
import { GET_VEHICLES } from "../queries";

const Vehicles = () => {
  const { loading, data } = useQuery(GET_VEHICLES);

  if (loading) {
    return <h1>Loading Vehicles...</h1>;
  } else {
    console.log(data);
    return (
      <div className="vehicles">
        {data.vehicles.map((vehicle) => {
          return (
            <div className="vehicle" key={vehicle.id}>
              <p>{`Name: ${vehicle.name}`}</p>
              <img
                className="vehicle-image"
                src={vehicle.image.url}
                alt={`Tesla ${vehicle.image.filename}`}
              ></img>
              <p>{`Price: ${vehicle.price}`}</p>
              <p>{`Mileage: ${vehicle.mileage}`}</p>
              <p>{`Vin: ${vehicle.vin}`}</p>
              <p>{`Year: ${vehicle.year}`}</p>
              <p className="vehicle-description">{`${vehicle.description}`}</p>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Vehicles;
