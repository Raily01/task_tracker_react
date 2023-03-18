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
      <table>
        <tr>
          <StyledTh>
            <td>Name</td>
          </StyledTh>
          <StyledTh>
            <td>Description</td>
          </StyledTh>
          <StyledTh>
            <td>Created at</td>
          </StyledTh>
          <StyledTh>
            <td>&nbsp;</td>
          </StyledTh>
          <StyledTh>
            <td>&nbsp;</td>
          </StyledTh>
          <StyledTh>
            <td>&nbsp;</td>
          </StyledTh>
        </tr>
        <tr>
          <StyledTd>
            <td>My first project</td>
          </StyledTd>
          <StyledTd>
            <td>Its only for testing</td>
          </StyledTd>
          <StyledTd>
            <td>about 1 month ago</td>
          </StyledTd>
          <StyledTd>
            <td>
              <Button label="Tasks" onClick={test} disabled={false} color="thistle" />
            </td>
          </StyledTd>
          <StyledTd>
            <td>
              <Button label="Edit" onClick={test} disabled={false} color="thistle" />
            </td>
          </StyledTd>
          <StyledTd>
            <td>
              <Button label="Destroy" onClick={test} disabled={false} color="thistle" />
            </td>
          </StyledTd>
        </tr>
        <tr>
          <StyledTd>
            <td>My first project</td>
          </StyledTd>
          <StyledTd>
            <td>Its only for testing</td>
          </StyledTd>
          <StyledTd>
            <td>about 1 month ago</td>
          </StyledTd>
          <StyledTd>
            <td>
              <Button label="Tasks" onClick={test} disabled={false} color="thistle" />
            </td>
          </StyledTd>
          <StyledTd>
            <td>
              <Button label="Edit" onClick={test} disabled={false} color="thistle" />
            </td>
          </StyledTd>
          <StyledTd>
            <td>
              <Button label="Destroy" onClick={test} disabled={false} color="thistle" />
            </td>
          </StyledTd>
        </tr>
        <tr>
          <StyledTd>
            <td>My first project</td>
          </StyledTd>
          <StyledTd>
            <td>Its only for testing</td>
          </StyledTd>
          <StyledTd>
            <td>about 1 month ago</td>
          </StyledTd>
          <StyledTd>
            <td>
              <Button label="Tasks" onClick={test} disabled={false} color="thistle" />
            </td>
          </StyledTd>
          <StyledTd>
            <td>
              <Button label="Edit" onClick={test} disabled={false} color="thistle" />
            </td>
          </StyledTd>
          <StyledTd>
            <td>
              <Button label="Destroy" onClick={test} disabled={false} color="thistle" />
            </td>
          </StyledTd>
        </tr>
      </table>
    </StyledTable>
  );
};

export default Table;
