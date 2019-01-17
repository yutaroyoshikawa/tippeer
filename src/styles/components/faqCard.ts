import styled from '../styled-components'

export const Card = styled.article`
    width: 100%;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.4);
    margin: 30px auto;
    padding: 10px;
    word-break: break-all;
`

export const Question = styled.h3`
    display: inline-block;
    font-size: 30px;
    color: rgb(250, 116, 116);
    font-weight: normal;
    margin-right: 5px;
`

export const FaqSent = styled.p`
    display: inline-block;
    font-size: 16px;
    color: #444;
`

export const SeparateLine = styled.hr`
    border; 1px solid #DDD;
    margin: 12px auto 8px auto;
    width: 70%;
`

export const Answer = styled.h3`
    display: inline-block;
    font-size: 30px;
    color: rgb(87, 190, 72);
    font-weight: normal;
    margin-right: 5px;
`
