import 'cropperjs/dist/cropper.css'
import * as React from 'react'
import Cropper from 'react-cropper'
import { Dispatch } from 'redux'
import * as actions from '../actions/cropper'
import { ICropperState } from '../reducers/cropper'
import * as Styled from '../styles/components/cropper'

export interface IProps extends ICropperState {
    dispatch: Dispatch<any>
}

export interface IState {
    data: string
    url: string
}

export default class extends React.Component<IProps, IState> {
    private cropRef: Cropper

    constructor(props: IProps) {
        super(props)
    }
 
    public cropping() {
        if(this.cropRef.getCroppedCanvas()) {
            const data = this.cropRef.getCroppedCanvas(this.props.cropper.type === 'artistTop' ? {width: 1920, height: 1080} : {width: 400, height: 400}).toDataURL().toString()
            this.props.dispatch(actions.onCrop(data))
        }
    }

    public onClose() {
        this.props.dispatch(actions.closeCropper())
    }

    public renderCropper = () => (
        <Styled.Entire>
            <Styled.CloseButtonArea>
                <button onClick={this.onClose.bind(this,)}>閉じる</button>
            </Styled.CloseButtonArea>
            <Styled.CropArea>
                <Styled.Crop
                    itemType={this.props.cropper.type}
                    src={this.props.cropper.data}
                    aspectRatio={this.props.cropper.type === 'artistTop' ? 16 / 9 : 1 / 1}
                    guides={true}
                    ref={(cropper: any) => this.cropRef = cropper}
                    viewMode={1}
                />  
            </Styled.CropArea>
            <Styled.CroppedButtonArea>
                <button onClick={this.cropping.bind(this,)}>
                    切り取り
                </button>
            </Styled.CroppedButtonArea>
        </Styled.Entire>
    )

    public render() {
        return(
            this.props.cropper.isOpen ?
                this.renderCropper()
                :
                null
        )
    }
}
