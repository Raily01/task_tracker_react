import { useParams } from "react-router-dom";
import DefaultTemplate from "../components/templates/DefaultTemplate";

const TasksPage = () => {
  const { id } = useParams();
  return (
    <DefaultTemplate>
      <h1>{id}</h1>
    </DefaultTemplate>
  );
};

export default TasksPage;
