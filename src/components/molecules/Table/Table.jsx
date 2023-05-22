import styled from "styled-components";
import "reset-css";
import { useState } from "react";
import Button from "../../atoms/Button";
import useProjects from "../../../lib/hooks/states/projects";
import TableTr from "../../atoms/table_tr";
import ModalWindowCreate from "../../atoms/ModalWindowCreate";

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

const Table = () => {
  const { projects, loading } = useProjects();
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  return (
    <>
      {!loading && (
        <StyledTable>
          <tbody>
            <tr>
              <StyledTh>Name</StyledTh>
              <StyledTh>Description</StyledTh>
              <StyledTh>Created at</StyledTh>
              <StyledTh>&nbsp;</StyledTh>
              <StyledTh>&nbsp;</StyledTh>
              <StyledTh>&nbsp;</StyledTh>
            </tr>
            {projects.map(({ name, description, createdAt, id }) => (
              <TableTr key={id} name={name} description={description} createdAt={createdAt} id={id} />
            ))}
            <ModalWindowCreate isOpen={isCreateModalOpen} setIsOpen={setCreateModalOpen} />
            <tr>
              <StyledThLast>
                <Button label="Create project" onClick={() => setCreateModalOpen(true)} />
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
