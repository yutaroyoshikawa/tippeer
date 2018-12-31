import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react'
import { ArtistCard, Score } from './'

import * as Styled from '../styles/components/commentBox'

export interface IProps {
    type: 'works' | 'performance'
}

export class CommentBox extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public renderForm = () => (
        this.props.type === 'works' ?
        <Styled.Form>
            <Styled.Box>
                <Styled.Artist>
                    <ArtistCard artistId={'hoge'} size={40} style={'standalone'} nameHidden={false} />
                </Styled.Artist>
                <Styled.ReviewBox>
                    <Styled.Score><Score size={30} /></Styled.Score><Styled.MobileScore><Score size={25} /></Styled.MobileScore>
                    <Styled.Comment maxLength={255} placeholder="コメントをする" />
                </Styled.ReviewBox>
            </Styled.Box>
            <Styled.SendBox>
                <Styled.SendButton><Styled.SendIcon icon={faPaperPlane} /></Styled.SendButton>
            </Styled.SendBox>
        </Styled.Form>
        :
        <Styled.PerformanceForm>
            <Styled.Box>
                <Styled.Artist>
                    <ArtistCard artistId={'hoge'} size={40} style={'standalone'} nameHidden={false} />
                </Styled.Artist>
                <Styled.ReviewBox>
                    <Styled.PerformanceComment maxLength={255} placeholder="コメントをする" />
                </Styled.ReviewBox>
            </Styled.Box>
            <Styled.SendBox>
                <Styled.SendButton><Styled.SendIcon icon={faPaperPlane} /></Styled.SendButton>
            </Styled.SendBox>
        </Styled.PerformanceForm>
    )

    public render() {
        return(
            <div>
                {this.renderForm()}
            </div>
        )
    }
}