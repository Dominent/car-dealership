import gql from "graphql-tag";

export const GET_VEHICLES = gql`
  query GetAllVehicles {
    vehicles {
      id
      mileage
      year
      name
      price
      vin
      description
      image {
        url
        fileName
      }
    }
  }
`;

// mutation CreateOrder($customerName: String!, $customerEmail: String!, $vehicleId:ID) {
//   createOrder(data: {customerName: $customerName, customerEmail: $customerEmail, vehicle: {connect: {id: $vehicleId}}}) 		           {
// 	id
//   	}
// }
