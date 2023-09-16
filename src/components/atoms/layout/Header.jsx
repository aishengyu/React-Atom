import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
    return (
        <Sheader>
            <SLink to="/">HOME</SLink>
            <SLink to="/users">USERS</SLink>
        </Sheader>
    );
};

const Sheader = styled.div`
    height: 50px; 
    background-color: #11999e;
    color: #fff;
    text-align: center;
    padding: 8px 0;
`;

const SLink = styled(Link)`
    margin: 0 8px;
`;
