import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import liderbetheader from '../icons/liderbet.png';

import * as Styled from './styles';

function App() {
  return (
    <>
      <Styled.Header>
        <img src={liderbetheader} alt='header'/>
      </Styled.Header>
      <Styled.Container>
          <Sidebar />
          <Header />
      </Styled.Container>
    </>
    
  );
}

export default App;
