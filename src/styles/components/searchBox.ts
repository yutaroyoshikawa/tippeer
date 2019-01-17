import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from '../styled-components'

export const Form = styled.form`
    display: flex;
    align-items: center;
    border: solid 1px #666;
    border-radius: 40px;
`

export const MobileForm = styled.form`
    display: flex;
    align-items: center;
`

export const SearchButton = styled.button`
    padding: 3px 5px;
    :focus {
        outline: none;
    }
    border-radius: 0 35px 35px 0;
    width: 30px;
    height: 30px;
`

export const MobileSearchButton = styled.button`
    padding: 3px 5px;
    :focus {
        outline: none;
    }
    border-radius: 0 35px 35px 0;
    width: 30px;
    height: 30px;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
`

export const SearchIcon = styled(FontAwesomeIcon)`
    font-size: 20px;
    color: #555;
    margin-left: -8px;
`

export const MobileSearchIcon = styled(FontAwesomeIcon)`
    font-size: 20px;
    color: #555;
    margin-left: -3px;
`

export const SearchWordInput = styled.input`
    :focus {
        outline: none;
    }
    
    padding: 5px 5px 5px 15px;
    @media screen and (min-width: 1024px){
        width: 500px;
    }
    @media screen and (max-width: 480px){
        width: 200px;
    }
`

export const MobileSearchWordInput = styled.input`
    :focus {
        outline: none;
    }
    border-radius: 35px 0 0 35px;
    width: 70vw;
    max-width: 400px;
    padding: 5px 5px 5px 8px;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
`