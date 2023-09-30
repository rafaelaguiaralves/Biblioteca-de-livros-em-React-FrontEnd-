import Pesquisa from '../Componentes/Pesquisa';
import Header from '../Componentes/Header'
import UltimosLancamentos from '../Componentes/UltimosLancamentos';
import styled from 'styled-components'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);

    li {
        list-style: none;
    }
`

function Home() {
  return (
    <AppContainer>

      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default Home