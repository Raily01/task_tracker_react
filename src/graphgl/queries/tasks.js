import { gql } from "@apollo/client";

export default gql`
  query {
    tasks {
      id
      title
      state
      description
      deadlineAt
      createdAt
      comments {
        id
      }
      updatedAt
      project {
        id
      }
    }
  }
`;
