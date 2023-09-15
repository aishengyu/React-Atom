import styled from "styled-components";

export const Input = (props) => {
    const { placeholder = "" } = props;
    return (
        <SInput type="text" placeholder={placeholder} />
    );
}   

const SInput = styled.input`
    padding: 8px 16px;
    border: solid #ddd 1px;
    border-radius: 9999px;
    outline: none;
`;  

// このように、コンポーネントを分割していくことで、
// それぞれのコンポーネントの役割が明確になり、
// また、再利用性も高くなります。
