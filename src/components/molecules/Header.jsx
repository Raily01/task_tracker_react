import styled from 'styled-components'
import 'reset-css';
import { Link } from "react-router-dom";

// import { baseTheme } from 'styles/theme'

const StyledHeader = styled.header`
    top:0;
    right: 100px;
    width: 100%;
    height: 50px;
    background: purple;
    position: sticky;
    color: white;
    text-align: center;
    margin-top: 5px;
    padding-top: 10px;
    font-size: 40px;
`;
const StyledLink = styled(Link)`
color: grey;
text-align: right;
`;

export const Header = () => {
    return (
        <>
<StyledHeader>TASK TRACKER <StyledLink to="/table"> Table </StyledLink></StyledHeader>
</>
    )
}