import styled from "styled-components";
import { PrimaryButton } from "../button/PrimaryButton";
import { SecondaryButton } from "../button/SecondaryButton";
import { Input } from "../input/Input";


export const SearchInput = () => {
    return (
        <SContainer>
            <Input placeholder="検索条件を入力" />
            <SButtonWrapper>
                <PrimaryButton>検索</PrimaryButton>
                <SecondaryButton>クリア</SecondaryButton>
            </SButtonWrapper>
        </SContainer>
    );
}

const SContainer = styled.div`
    display: flex;
    align-items: center;
`;  

const SButtonWrapper = styled.div`
    padding-left: 8px;
`;



