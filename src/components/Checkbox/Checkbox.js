import { useMemo, useState } from 'react';
import * as Styled from './styles';

export default function Checkbox({label, onChange}) {
    const [checked, setChecked] = useState(false);

    const color = useMemo(() => {
        return checked ? '#005473' : '#fff';
    }, [checked])

    function onCheckHandler() {
        setChecked(!checked)
    }
    
    return (
        <Styled.Container color={color}>
            <input type='checkbox' onChange={onCheckHandler} value={checked}/>
            <label>{label}</label>
        </Styled.Container>
    )
}