import { useQuery } from "@apollo/client";
import tasks from "../../../graphgl/queries/tasks";

const useTasks = (id) => {
  const { data, loading, error } = useQuery(tasks, {
    fetchPolicy: "cache-and-network",
    variables: { id },
  });

  return {
    tasks: data?.tasks || [],
    loading,
    error,
  };
};

export default useTasks;
