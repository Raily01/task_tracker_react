import { gql } from "@apollo/client";

export default gql`
  query Project($id: ID!) {
    project(id: $id) {
      id
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
  }
`;
