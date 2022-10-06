import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import * as Styled from './styles';

function App() {
  return (
    <Styled.Container>
        <Sidebar />
        <Header />
    </Styled.Container>
  );
}

export default App;
