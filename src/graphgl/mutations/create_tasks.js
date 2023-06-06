import { gql } from "@apollo/client";

export default gql`
  mutation CreateTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      errors {
        message
        path
      }
      task {
        id
        title
        description
        deadlineAt
        project {
          id
        }
      }
    }
  }
`;
