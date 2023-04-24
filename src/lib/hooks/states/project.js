import { useQuery } from "@apollo/client";
import projects from "../../../graphgl/queries/projects";

const useProjects = () => {
  const { data, loading, error } = useQuery(projects, {
    fetchPolicy: "cache-and-network",
  });

  return {
    projects: data?.projects || [],
    loading,
    error,
  };
};

export default useProjects;
