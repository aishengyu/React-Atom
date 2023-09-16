import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../input/Input";

export const SearchInput = () => {
    return (
        <SContainer>
            <Input placeholder="検索条件を入力" />
            <SButtonWarpper>
                <PrimaryButton>検索</PrimaryButton>
            </SButtonWarpper>
        </SContainer>
    );
};

const SContainer = styled.div`
    display: flex;
    align-items: center;
`;

const SButtonWarpper = styled.div`
    padding-left: 8px;
`;


