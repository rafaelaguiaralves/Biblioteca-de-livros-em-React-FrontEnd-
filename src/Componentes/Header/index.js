import styled from 'styled-components';
// import './style.css';
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
background-color: #FFF;
display: flex;
justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Link to="/">
                <logo />
            </Link>
            <OpcoesHeader />
            <IconesHeader />

        </HeaderContainer>
    )
}

export default Header