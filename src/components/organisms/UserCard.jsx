import styled from "styled-components";
import { Card } from "../atoms/card/Card";
import {UserIconWithName} from "../molecules/user/UserIconWithName";

export const UserCard = (props) => {
    const { user } = props;
    return (
        <Card>
            <UserIconWithName image={user.image} name={user.name}/>
            <SDL>
                <dt>メール</dt>
                <dd>{user.email}</dd>
                <dt>TEL</dt>
                <dd>{user.tel}</dd>
                <dt>会社名</dt>
                <dd>{user.company}</dd>
                <dt>WEB</dt>
                <dd>{user.website}</dd>
            </SDL>
        </Card>
    );
};

const SDL = styled.div`
    text-align: left;
    dt {
        float: left;
    };
    dd {
        padding-left: 32px;
        padding-bottom: 8px;
        overflow-wrap: break-word;
    };
`;
