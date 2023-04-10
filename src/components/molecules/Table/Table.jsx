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
  console.log(projects, loading);
  const test = () => {
    console.log("pupupu");
  };
  const navigate = useNavigate();
  const routeChange = (id1) => {
    console.log("aaa");
    console.log(id1);
    navigate(`/tasks/${id1}`);
  };
  return (
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
        <tr>
          <StyledTd>My first project</StyledTd>
          <StyledTd>Its only for testing</StyledTd>
          <StyledTd>about 1 month ago</StyledTd>
          <StyledTd>
            <Button label="Tasks" onClick={() => routeChange(1)} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Edit" onClick={test} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Destroy" onClick={test} color="thistle" />
          </StyledTd>
        </tr>
        <tr>
          <StyledTd>My first project</StyledTd>
          <StyledTd>Its only for testing</StyledTd>
          <StyledTd>about 1 month ago</StyledTd>
          <StyledTd>
            <Button label="Tasks" onClick={() => routeChange(2)} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Edit" onClick={test} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Destroy" onClick={test} color="thistle" />
          </StyledTd>
        </tr>
        <tr>
          <StyledTd>My first project</StyledTd>
          <StyledTd>Its only for testing</StyledTd>
          <StyledTd>about 1 month ago</StyledTd>
          <StyledTd>
            <Button label="Tasks" onClick={() => routeChange(3)} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Edit" onClick={test} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Destroy" onClick={test} color="thistle" />
          </StyledTd>
        </tr>
        <tr>
          <StyledTd>My first project</StyledTd>
          <StyledTd>Its only for testing</StyledTd>
          <StyledTd>about 1 month ago</StyledTd>
          <StyledTd>
            <Button label="Tasks" onClick={() => routeChange(4)} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Edit" onClick={test} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Destroy" onClick={test} color="thistle" />
          </StyledTd>
        </tr>
        <tr>
          <StyledTd>My first project</StyledTd>
          <StyledTd>Its only for testing</StyledTd>
          <StyledTd>about 1 month ago</StyledTd>
          <StyledTd>
            <Button label="Tasks" onClick={() => routeChange(5)} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Edit" onClick={test} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Destroy" onClick={test} color="thistle" />
          </StyledTd>
        </tr>
        <tr>
          <StyledTd>My first project</StyledTd>
          <StyledTd>Its only for testing</StyledTd>
          <StyledTd>about 1 month ago</StyledTd>
          <StyledTd>
            <Button label="Tasks" onClick={() => routeChange(6)} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Edit" onClick={test} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Destroy" onClick={test} color="thistle" />
          </StyledTd>
        </tr>
        <tr>
          <StyledTd>My first project</StyledTd>
          <StyledTd>Its only for testing</StyledTd>
          <StyledTd>about 1 month ago</StyledTd>
          <StyledTd>
            <Button label="Tasks" onClick={() => routeChange(7)} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Edit" onClick={test} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Destroy" onClick={test} color="thistle" />
          </StyledTd>
        </tr>
        <tr>
          <StyledTd>My first project</StyledTd>
          <StyledTd>Its only for testing</StyledTd>
          <StyledTd>about 1 month ago</StyledTd>
          <StyledTd>
            <Button label="Tasks" onClick={() => routeChange(8)} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Edit" onClick={test} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Destroy" onClick={test} color="thistle" />
          </StyledTd>
        </tr>
        <tr>
          <StyledTd>My first project</StyledTd>
          <StyledTd>Its only for testing</StyledTd>
          <StyledTd>about 1 month ago</StyledTd>
          <StyledTd>
            <Button label="Tasks" onClick={() => routeChange(9)} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Edit" onClick={test} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Destroy" onClick={test} color="thistle" />
          </StyledTd>
        </tr>
        <tr>
          <StyledTd>My first project</StyledTd>
          <StyledTd>Its only for testing</StyledTd>
          <StyledTd>about 1 month ago</StyledTd>
          <StyledTd>
            <Button label="Tasks" onClick={() => routeChange(10)} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Edit" onClick={test} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Destroy" onClick={test} color="thistle" />
          </StyledTd>
        </tr>
        <tr>
          <StyledTd>My first project</StyledTd>
          <StyledTd>Its only for testing</StyledTd>
          <StyledTd>about 1 month ago</StyledTd>
          <StyledTd>
            <Button label="Tasks" onClick={() => routeChange(11)} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Edit" onClick={test} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Destroy" onClick={test} color="thistle" />
          </StyledTd>
        </tr>
        <tr>
          <StyledTd>My first project</StyledTd>
          <StyledTd>Its only for testing</StyledTd>
          <StyledTd>about 1 month ago</StyledTd>
          <StyledTd>
            <Button label="Tasks" onClick={() => routeChange(12)} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Edit" onClick={test} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Destroy" onClick={test} color="thistle" />
          </StyledTd>
        </tr>
        <tr>
          <StyledTd>My first project</StyledTd>
          <StyledTd>Its only for testing</StyledTd>
          <StyledTd>about 1 month ago</StyledTd>
          <StyledTd>
            <Button label="Tasks" onClick={() => routeChange(13)} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Edit" onClick={test} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Destroy" onClick={test} color="thistle" />
          </StyledTd>
        </tr>
        <tr>
          <StyledTd>My first project</StyledTd>
          <StyledTd>Its only for testing</StyledTd>
          <StyledTd>about 1 month ago</StyledTd>
          <StyledTd>
            <Button label="Tasks" onClick={() => routeChange(14)} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Edit" onClick={test} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Destroy" onClick={test} color="thistle" />
          </StyledTd>
        </tr>
        <tr>
          <StyledTd>My first project</StyledTd>
          <StyledTd>Its only for testing</StyledTd>
          <StyledTd>about 1 month ago</StyledTd>
          <StyledTd>
            <Button label="Tasks" onClick={() => routeChange(15)} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Edit" onClick={test} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Destroy" onClick={test} color="thistle" />
          </StyledTd>
        </tr>
        <tr>
          <StyledTd>My first project</StyledTd>
          <StyledTd>Its only for testing</StyledTd>
          <StyledTd>about 1 month ago</StyledTd>
          <StyledTd>
            <Button label="Tasks" onClick={() => routeChange(16)} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Edit" onClick={test} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Destroy" onClick={test} color="thistle" />
          </StyledTd>
        </tr>
        <tr>
          <StyledTd>My first project</StyledTd>
          <StyledTd>Its only for testing</StyledTd>
          <StyledTd>about 1 month ago</StyledTd>
          <StyledTd>
            <Button label="Tasks" onClick={() => routeChange(17)} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Edit" onClick={test} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Destroy" onClick={test} color="thistle" />
          </StyledTd>
        </tr>
      </tbody>
    </StyledTable>
  );
};

export default Table;
