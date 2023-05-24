import styled from 'styled-components'

const Card = styled.div`
    background-color: ${(props) => props.theme.colors.card__background};
    h1, h2, h3, h4, h5, h6 {
        color: ${props => props.theme.colors.heading__primary};
    }
    p {
        color: ${props => props.theme.colors.text__secondary};
    }
    button {
        background-color: ${props=> props.theme.colors.button__primary};
        color: ${props=> props.theme.colors.button__secondary};
    }
    .warning {
        color: ${props => props.theme.colors.text__warning};
    }
`

const Hero = styled.section`
    min-height: 80vh;
    background-color: aliceblue;
    padding: 40px;
    box-shadow: 1px 2px 4px gray;
    border-radius: 20px;
`

const Section = styled.section`
    margin-top:10px;
    background-color: aliceblue;
    padding: 40px;
    box-shadow: 1px 2px 4px  ${props => props.theme.colors.card__background};
    border-radius: 20px;
`

const HorizontalLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export { Card, HorizontalLayout, Hero, Section}
