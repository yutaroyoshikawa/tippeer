import * as React from 'react'
import { Dispatch } from 'redux'
import { IGlobalMenuState } from 'src/reducers/globalMenu'
import * as actions from '../actions/globalMenu'
import ArticleTitle from '../components/articleTitle'
import FaqCard from '../components/faqCard'


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

    public componentDidMount = () => (
        this.props.globalMenu.agent === 'mobile' || this.props.globalMenu.agent === 'tablet' ?
            this.props.dispatch(actions.setMobileMenuState({tabState: 'none'}))
        :
            null
    )

    public renderFaqs = () => (
        this.state.faqs.map((faq) => (<FaqCard question={faq.question} answer={faq.answer} />))
    )

    public render() {
        return(
            <section>
                <div style={{width: '90%', margin: '20px'}}>
                    <ArticleTitle title={'よくある質問'} />
                </div>
                {this.renderFaqs()}
            </section>
        )
    }
}