import styled from "styled-components";
import { BaseButton } from "../button/BaseButton";

/**
 * このように書くと、
 * import { PrimaryButton } from "../components/button/PrimaryButton";
 * このように使える
 * <PrimaryButton>テキスト</PrimaryButton>
 * @param {*} props 
 * @returns 
 */
export const PrimaryButton = (props) => {
    const { children } = props;
    return (
        <Sbutton>
            {children}
        </Sbutton>
    );
};

const Sbutton = styled(BaseButton)`
    background-color: #40514e;
`;

