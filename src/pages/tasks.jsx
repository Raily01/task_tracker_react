import { useParams } from "react-router-dom";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import TableTasks from "../components/molecules/Table/TableTasks";

const TasksPage = () => {
  const { id: projectId } = useParams();
  return (
    <DefaultTemplate>
      <h1>{projectId}</h1>
      <TableTasks projectId={projectId} />
    </DefaultTemplate>
  );
};

export default TasksPage;
