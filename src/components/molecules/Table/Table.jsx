import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "reset-css";
import Button from "../../atoms/Button";
import useProjects from "../../../lib/hooks/states/project";

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
`;

const StyledTd = styled.td`
  border: 1px solid #dddddd;
  padding: 5px;
  text-align: center;
`;
const Table = () => {
  const { projects, loading } = useProjects();
  const test = () => {
    console.log("pupupu");
  };
  const navigate = useNavigate();
  const routeChange = (id1) => {
    navigate(`/tasks/${id1}`);
  };
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
              <tr key={id}>
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
                  <Button label="Destroy" onClick={test} color="thistle" />
                </StyledTd>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      )}
      {loading && <h1>LOADING NOW</h1>}
    </>
  );
};

export default Table;
