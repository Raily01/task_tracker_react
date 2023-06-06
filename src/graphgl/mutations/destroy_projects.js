import { gql } from "@apollo/client";

export default gql`
  mutation DestroyProject($input: DestroyProjectInput!) {
    destroyProject(input: $input) {
      project {
        id
      }
    }
  }
`;
