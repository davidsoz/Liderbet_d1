import { useState } from 'react';
import * as Styled from './styles';


export default function Currency() {

    const [isGel, setIsGel] = useState(true);

    function changeCurrency() {
        setIsGel(!isGel);
    }
    
    return (
        <Styled.Currency currency={isGel}>
            <span>POINT</span>
            <div onClick={changeCurrency}>
                <div></div>
            </div>
            <span>GEL</span>
    </Styled.Currency>
    )
}