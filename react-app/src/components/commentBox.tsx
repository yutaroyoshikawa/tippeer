import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react'
import { ArtistCard, Score } from './'

export interface IProps {
    type: 'works' | 'performance'
}

export class CommentBox extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public render() {
        return(
            <form style={{width: '70%', margin: '20px auto 40px auto', borderRadius: '15px', boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.3)', padding: '10px 0 50px 0', background: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(10px)'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{margin: '0 20px'}}>
                        <ArtistCard artistId={'hoge'} size={40} style={'standalone'} />
                    </div>
                    <div style={{margin: '10px 40px 0px 0px', width: '100%'}}>
                        {this.props.type === 'works' ? <Score size={30} /> : null}
                        <textarea style={{width: '100%', margin: '20px 40px 20px 0', height: '70px', fontSize: '25px'}} rows={2} />
                    </div>
                </div>
                    <button style={{padding: '18px 18px 14px 14px', borderRadius: '100%', border: 'solid 5px rgb(63, 213, 180)', position: 'absolute', background: '#FFF', left: '50%', marginLeft: '-38px'}}><FontAwesomeIcon icon={faPaperPlane} style={{color: 'rgb(63, 213, 180)', width: '35px', height: '35px'}} /></button>
            </form>
        )
    }
}