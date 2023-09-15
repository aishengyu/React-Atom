import styled from "styled-components";
import { BaseButton } from "./BaseButton";

/**
 * このように書くと、
 * import { SecondaryButton } from "../components/button/SecondaryButton";
 * このように使える
 * <SecondaryButton>テキスト</SecondaryButton>
 * @param {*} props 
 * @returns 
 */
export const SecondaryButton = (props) => {
    const { children } = props;
    return (
        <Sbutton>
            {children}
        </Sbutton>
    );
};

const Sbutton = styled(BaseButton)`
    background-color: #11999e;
`;

