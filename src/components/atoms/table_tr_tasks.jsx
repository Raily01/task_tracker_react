import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import ModalWindow from "./ModalWindow";
import Button from "./Button";

const StyledTd = styled.td`
  border: 1px solid #dddddd;
  padding: 5px;
  text-align: center;
  font-size: 20px;
`;

const TableTr = ({ title, description, updatedAt, deadlineAt, id }) => {
  const navigate = useNavigate();
  const [isDestroyModalOpen, setDestroyModalOpen] = useState(false);
  const routeChange = () => {
    // navigate(`/tasks/${id1}`);
    navigate(`/`);
  };
  return (
    <>
      <tr>
        <StyledTd>{title}</StyledTd>
        <StyledTd>{description}</StyledTd>
        <StyledTd>{new Date(updatedAt).toLocaleDateString("RU-ru")}</StyledTd>
        <StyledTd>{new Date(deadlineAt).toLocaleDateString("RU-ru")}</StyledTd>
        <StyledTd>
          <Button label="Go to task" onClick={routeChange(id)} color="thistle" />
        </StyledTd>
        <StyledTd>
          <Button label="Destroy" onClick={() => setDestroyModalOpen(true)} color="thistle" />
        </StyledTd>
      </tr>
      <ModalWindow isOpen={isDestroyModalOpen} setIsOpen={setDestroyModalOpen} id={id} />
    </>
  );
};

export default TableTr;
