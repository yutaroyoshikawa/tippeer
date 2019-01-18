import styled from '../styled-components'

export const Entire = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    height: 460px;
    z-index: 4;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
    padding: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    @media screen and (min-width: 1024px){
        width: 400px;
        margin: -230px 0 0 -240px;
    }
    @media screen and (max-width: 480px){
        width: 100vw;
        margin: -230px 0 0 -50vw;
    }
`