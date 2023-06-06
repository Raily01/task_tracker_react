import { gql } from "@apollo/client";

export default gql`
  mutation CreateProject($input: CreateProjectInput!) {
    createProject(input: $input) {
      project {
        name
        description
      }
    }
  }
`;
