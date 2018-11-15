import * as React from 'react';
import { Dispatch } from 'redux';
import { IWorksState } from 'src/reducers/WorksStore';
import { setArtistIcon } from '../actions/WorksStore';

interface IProps extends IWorksState {
    dispatch: Dispatch<any>
}

interface IState {
    id: number;
    artistName: string;
    artistIcon: string;
    worksName: string;
    thumbnail: string;
}

export default class extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            artistIcon: "",
            artistName: "",
            id: 0,
            thumbnail: "",
            worksName: "",
        }
    }

    public setDatas = () => {
        this.props.dispatch (setArtistIcon(this.state.id));
    }

    public renderDatas = () => {
        this.props.worksDatas.map((worksDatas) => (
            <div>{worksDatas.artistName}</div>
        ))
    }

    public render() {
        return (
            <section>
                <h2>Spotlight</h2>
                <article>
                    <h3>Cosmetic surgery</h3>
                    <figure>
                        <img src="" alt="" />
                    </figure>
                        {this.renderDatas()}
                </article>
            </section>
        )
    }
}