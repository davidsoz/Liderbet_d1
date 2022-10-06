import Checkbox from '../Checkbox/Checkbox';
import Currency from '../Currency/Currency';
import TextInput from '../TextInput/TextInput';
import * as Styled from './styles';
import menuIcon from '../../icons/menu.png';
import rulesIcon from '../../icons/rules.png';

export default function Header() {
    


    return (
        <Styled.Container>
            <div className='checkboxes'>
                <Checkbox label='TOP'/>
                <Checkbox label='SALE'/>
                <Checkbox label='BONUS'/>
                <Checkbox label='FREESPIN'/>
            </div>
            <Currency />
            <div className='search-input'>
                <TextInput placeholder='Search'/>
                <img src={menuIcon} alt='Menu' />
                <img src={rulesIcon} alt='Rules' />
            </div>
        </Styled.Container>
    )
}