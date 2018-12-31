import styled from '../styled-components'

export const Circle = styled.button`
    color: #FFF;
    display: inline-block;
    background: rgb(63, 213, 180);
    borderRadius: 100%;
    padding: 25px;
    font-size: ${prop => prop.value}px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
`

export const Ellipse = styled.button`
    color: #FFF;
    display: inline-block;
    background: rgb(63, 213, 180);
    border-radius: 55px;
    font-size: ${prop => prop.value}px;
    text-align: center;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    @media screen and (min-width: 1024px){
        padding: 3px 25px;
    }
    @media screen and (max-width: 480px){
        padding: 3px 15px;
    }
`