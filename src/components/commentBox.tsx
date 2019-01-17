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

    public renderScore = () => (
        this.props.type === 'works' ?
        <div>
            <Styled.Score>
                <Score size={30} />
            </Styled.Score>
            <Styled.MobileScore>
                <Score size={25} />
            </Styled.MobileScore>
        </div>
        :
        null
    )

    public render() {
        return(
            <Styled.Form itemProp={this.props.type}>
                <Styled.Box>
                    <Styled.Artist>
                        <ArtistCard artistId={'hoge'} size={40} style={'standalone'} nameHidden={false} color={'light'} link={false} />
                    </Styled.Artist>
                    <Styled.ReviewBox>
                        {this.renderScore()}
                        <Styled.Comment maxLength={255} placeholder="コメントをする" itemProp={this.props.type} />
                    </Styled.ReviewBox>
                </Styled.Box>
                <Styled.SendBox>
                    <Styled.SendButton><Styled.SendIcon icon={faPaperPlane} /></Styled.SendButton>
                </Styled.SendBox>
            </Styled.Form>
        )
    }
}