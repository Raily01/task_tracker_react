import styled from "styled-components";
import "reset-css";
import Button from "../atoms/Button";

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
  const test = () => {
    console.log("pupupu");
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
            <Button label="Tasks" onClick={test} disabled={false} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Edit" onClick={test} disabled={false} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Destroy" onClick={test} disabled={false} color="thistle" />
          </StyledTd>
        </tr>
        <tr>
          <StyledTd>My first project</StyledTd>
          <StyledTd>Its only for testing</StyledTd>
          <StyledTd>about 1 month ago</StyledTd>
          <StyledTd>
            <Button label="Tasks" onClick={test} disabled={false} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Edit" onClick={test} disabled={false} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Destroy" onClick={test} disabled={false} color="thistle" />
          </StyledTd>
        </tr>
        <tr>
          <StyledTd>My first project</StyledTd>
          <StyledTd>Its only for testing</StyledTd>
          <StyledTd>about 1 month ago</StyledTd>
          <StyledTd>
            <Button label="Tasks" onClick={test} disabled={false} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Edit" onClick={test} disabled={false} color="thistle" />
          </StyledTd>
          <StyledTd>
            <Button label="Destroy" onClick={test} disabled={false} color="thistle" />
          </StyledTd>
        </tr>
      </tbody>
    </StyledTable>
  );
};

export default Table;
