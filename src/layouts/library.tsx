import * as React from 'react'
import { Dispatch } from 'redux'
import { setMobileMenuState } from '../actions/mobileMenu'
import { ArticleTitle, LibraryTab, LibraryWorksCard } from '../components'
import { ILibraryState } from '../reducers/library'
import * as Styled from '../styles/library'

export interface IProps extends ILibraryState {
    dispatch: Dispatch<any>
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps){
        super(props)
    }

    public componentDidMount() {
        document.title = 'TIPPEER | Library' 
        this.props.dispatch(setMobileMenuState('library'))
    }

    public componentWillUnmount() {
        document.title = 'TIPPEER'
    }

    public renderWorks = () => (
        <Styled.Works>
            <LibraryWorksCard worksId={'hoge'} />
        </Styled.Works>
    )

    public render() {
        return(
            <Styled.Entire>
                <Styled.Global />
                <Styled.TitleSection>
                    <ArticleTitle title={this.props.library.tabState} color={'dark'} />
                </Styled.TitleSection>
                <Styled.TabSection>
                    <LibraryTab />
                </Styled.TabSection>
                <Styled.WorksSection>
                    {this.renderWorks()}
                </Styled.WorksSection>
            </Styled.Entire>
        )
    }
}