import { useParams } from "react-router-dom";
import Header from "../components/molecules/Header/Header";
import Footer from "../components/molecules/Footer/Footer";

const TasksPage = () => {
  const { id } = useParams();
  return (
    <>
      <Header />
      <h1>{id}</h1>
      <Footer />
    </>
  );
};

export default TasksPage;
