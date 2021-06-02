import { gql } from "@apollo/client";

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

export const CREATE_ORDER = gql`
  mutation CreateOrder(
    $customerName: String!
    $customerEmail: String!
    $vehicleId: ID
  ) {
    createOrder(
      data: {
        customerName: $customerName
        customerEmail: $customerEmail
        vehicle: { connect: { id: $vehicleId } }
      }
    ) {
      id
    }
  }
`;
