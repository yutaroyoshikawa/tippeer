import * as React from 'react'
import * as Styled from '../styles/components/faqCard'

export interface IProps {
    question: string
    answer: string
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public render() {
        return(
            <Styled.Card>
                <Styled.Question>Q.</Styled.Question>
                <Styled.FaqSent>{this.props.question}</Styled.FaqSent>
                <Styled.SeparateLine />
                <Styled.Answer>A.</Styled.Answer>
                <Styled.Question>{this.props.answer}</Styled.Question>
            </Styled.Card>
        )
    }
}
