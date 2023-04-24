import { gql } from "@apollo/client";

export default gql`
  query {
    projects {
      id
      name
      updatedAt
      createdAt
      description
    }
  }
`;
