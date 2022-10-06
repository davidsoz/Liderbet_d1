import * as Styled from './styles';

function TextInput({placeholder}) {
    return (
        <Styled.Container>
            <input placeholder={placeholder} />
        </Styled.Container>
    )
}

export default TextInput;