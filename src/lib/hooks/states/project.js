import { useQuery } from "@apollo/client";
import project from "../../../graphgl/queries/project";

const useProject = ({ projectId }) => {
  const { data, loading, error } = useQuery(project, {
    fetchPolicy: "cache-and-network",
    variables: { id: projectId },
  });

  return {
    tasks: data?.project.tasks || [],
    loading,
    error,
  };
};

export default useProject;
