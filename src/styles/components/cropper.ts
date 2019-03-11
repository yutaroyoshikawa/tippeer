import Cropper from 'react-cropper'
import styled from '../styled-components'

export const Crop = styled(Cropper)`
    .cropper-crop-box .cropper-view-box {
        border-radius: ${(props) => props.itemType === 'icon' ? '50%' : '0'};
    }

    .cropper-view-box {
        box-shadow: 0 0 0 1px #39f;
        outline: 0;
    }

    @media screen and (min-width: 1024px){
        width: 400px;
        height: 400px;
    }

    @media screen and (max-width: 480px){
        width: 70vw;
        height: 70vw;
    }
`

export const Entire = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 999999999999999999;
    background: rgba(0, 0, 0, 0.8);

    &::before {
        content: '';
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 20;
        pointer-events: none;
        overflow: hidden;
    }
`

export const CropArea = styled.div`
    @media screen and (min-width: 1024px){
        width: 400px;
        height: 400px;
    }
    @media screen and (max-width: 480px){
        width: 70vw;
        height: 70vw;
    }
`

export const CloseButtonArea = styled.div`
    color: white;
    position: absolute;
    top: 100px;
    left: 50px;
    z-index: 21;
`

export const CroppedButtonArea = styled.div`
    @media screen and (min-width: 1024px){
        bottom: 100px;
    }
    @media screen and (max-width: 480px){
        bottom: 100px;
    }
    color: white;
    position: absolute;
    left: 0px;
    width: 100vw;
    display: flex;
    justify-content: center;
    z-index: 2100;
`