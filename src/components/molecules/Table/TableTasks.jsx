import styled from "styled-components";
import "reset-css";
import { useState } from "react";
import Button from "../../atoms/Button";
import useProject from "../../../lib/hooks/states/project";
import TableTrTasks from "../../atoms/table_tr_tasks";
import ModalWindowCreateTask from "../../atoms/ModalCreateTask";

const StyledTable = styled.table`
  top: 0;
  right: 100px;
  background: #c8a2c8;
  width: 100%;
  min-width: 100%;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border: 1px solid #dddddd;
  border-collapse: collapse;
`;

const StyledTh = styled.th`
  font-weight: bold;
  padding: 5px;
  background: #efefef;
  border: 2px solid purple;
  font-size: 28px;
`;
const StyledThLast = styled.th`
  font-weight: bold;
  padding: 5px;
  background: white;
  border: white;
  font-size: 28px;
`;

const Table = ({ projectId }) => {
  const { tasks, loading } = useProject({ projectId });
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  return (
    <>
      {!loading && (
        <StyledTable>
          <tbody>
            <tr>
              <StyledTh>Name</StyledTh>
              <StyledTh>Description</StyledTh>
              <StyledTh>Updated at</StyledTh>
              <StyledTh>Deadline</StyledTh>
              <StyledTh>&nbsp;</StyledTh>
              <StyledTh>&nbsp;</StyledTh>
            </tr>
            {tasks.map(({ title, description, updatedAt, deadlineAt, id }) => (
              <TableTrTasks
                key={id}
                title={title}
                description={description}
                updatedAt={updatedAt}
                deadlineAt={deadlineAt}
                id={id}
              />
            ))}
            <ModalWindowCreateTask isOpen={isCreateModalOpen} setIsOpen={setCreateModalOpen} projectId={projectId} />
            <tr>
              <StyledThLast>
                <Button label="Create task" onClick={() => setCreateModalOpen(true)} />
              </StyledThLast>
              <StyledThLast> </StyledThLast>
              <StyledThLast> </StyledThLast>
              <StyledThLast> </StyledThLast>
              <StyledThLast> </StyledThLast>
              <StyledThLast> </StyledThLast>
            </tr>
          </tbody>
        </StyledTable>
      )}
      {loading && <h1>LOADING NOW</h1>}
    </>
  );
};

export default Table;
