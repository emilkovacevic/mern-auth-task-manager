import styled from 'styled-components'

type onScroll = {
    scrolled: boolean
}

const Header = styled.header`
display: flex;
position: sticky;
z-index: 50;
top: 0;
justify-content: space-between;
padding: 1rem;
background-color: ${ (props :onScroll) => props.scrolled ? 'lightblue' : 'transparent'};
a {
    text-decoration: none;
}
`

const Nav = styled.nav`
a{
    margin: 0 1rem;
}
button {
    border: none;
}
`

export {Header, Nav}