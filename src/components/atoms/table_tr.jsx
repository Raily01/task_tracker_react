import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ModalWindow from "./ModalWindow";
import Button from "./Button";

const StyledTd = styled.td`
  border: 1px solid #dddddd;
  padding: 5px;
  text-align: center;
  font-size: 20px;
`;

const TableTr = ({ name, description, id, createdAt }) => {
  const test = () => {
    console.log("pupupu");
  };
  const [isDestroyModalOpen, setDestroyModalOpen] = useState(false);

  const navigate = useNavigate();
  const routeChange = (id1) => {
    navigate(`/tasks/${id1}`);
  };

  return (
    <>
      <tr>
        <StyledTd>{name}</StyledTd>
        <StyledTd>{description}</StyledTd>
        <StyledTd>{new Date(createdAt).toLocaleDateString("RU-ru")}</StyledTd>
        <StyledTd>
          <Button label="Tasks" onClick={() => routeChange(id)} color="thistle" />
        </StyledTd>
        <StyledTd>
          <Button label="Edit" onClick={test} color="thistle" />
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
