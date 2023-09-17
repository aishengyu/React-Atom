import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useNavigate } from "react-router-dom";

export const Top = () => {

    const navigate = useNavigate();

    const onClickAdmin = () => navigate("/users");
    const onClickGeneral = () => alert("onClickGeneral");

    return (
        <Scontainer>
            <h2>TOPページです</h2>

            <SecondaryButton onClick={onClickAdmin}>管理者ユーザ</SecondaryButton>
            <br />
            <br />
            <SecondaryButton onClick={onClickGeneral}>一般ユーザ</SecondaryButton>

        </Scontainer>
    );
}

const Scontainer = styled.div`
    text-align: center;

`;