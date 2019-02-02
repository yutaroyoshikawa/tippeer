import * as React from 'react'
import { Dispatch } from 'redux'
import { IGlobalMenuState } from 'src/reducers/globalMenu'
import { setMobileMenuState } from '../actions/mobileMenu'
import { ArticleTitle } from '../components'
import FaqCard from '../components/faqCard'

import * as Styled from '../styles/faq'

export interface IProps extends IGlobalMenuState {
    dispatch: Dispatch<any>;
}

interface IFaq {
    question: string,
    answer: string,
}

interface IState {
    faqs: IFaq[]
}

export default class extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state = {
            faqs: [
                {
                    answer: 'An Ugly Myspace Profile Will Sure Ruin Your Reputation',
                    question: 'How To Boost Your Traffic Of Your Blog And Destroy The Competition?',
                },
                {
                    answer: 'hoge',
                    question: 'hogehoge',
                },
                {
                    answer: 'hoge',
                    question: 'hogehoge',
                },
                {
                    answer: 'hoge',
                    question: 'hogehoge',
                },
            ]
        }
    }

    public componentDidMount = () => {
        document.title = 'TIPPEER | FAQ' 
        if(this.props.globalMenu.agent === 'mobile' || this.props.globalMenu.agent === 'tablet'){
            this.props.dispatch(setMobileMenuState('none'))
        }
    }

    public componentWillUnmount = () => {
        document.title = 'TIPPEER'
    }

    public renderFaqs = () => (
        this.state.faqs.map((faq, i) => (
            <Styled.FaqCard key={i.toString()}>
                <FaqCard question={faq.question} answer={faq.answer} />
            </Styled.FaqCard>
        ))
    )

    public render() {
        return(
            <section>
                <Styled.GlobalStyle />
                <Styled.FaqTitle>
                    <ArticleTitle title={'よくある質問'} color={'light'} />
                </Styled.FaqTitle>
                <Styled.FaqContents>
                    {this.renderFaqs()}
                </Styled.FaqContents>
            </section>
        )
    }
}
