import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, CircularProgress, Stepper, TextField, } from '@material-ui/core'
import { AccountCircle, AssignmentLate, CheckCircle, Label } from '@material-ui/icons'
import { styled } from '@material-ui/styles'
import SwipeableViews from 'react-swipeable-views'
import styledComponent, { css } from '../styled-components'


const flexCenter = css`
    ${{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }}
`

export const CarouselSection = styledComponent.div`
    width: 100vw;
`

export const Carousel = styledComponent(SwipeableViews)`

`

export const StepperOuter = styledComponent.div`
    .MuiStepIcon-root-154.MuiStepIcon-active-156{
        color: rgb(242, 16, 90);
    }
    .MuiStepIcon-root-154.MuiStepIcon-text-155{
        fill: #FFF;
    }
    .MuiStepIcon-text-155{
        fill: #333;
    }
    .MuiSvgIcon-root-121{
        color: #FFF;
    }
    .MuiStepButton-touchRipple-142{
        color: rgba(255, 255, 255, 0.5);
    }
`

export const StepperSection = styled(Stepper)({
    background: 'none',
    color: '#FFF',
    connectorActive: {
        '& $connectorLine': {
          borderColor: '#FFF',
        },
        color: '#FFF'
      },
    margin: 0,
    padding: 0,
    
})

export const IconRegistSection = styledComponent.div`
    ${flexCenter}
    width: 100%;
    height: 300px;
`

export const TagRegistSection = styledComponent.div`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const UserInfoSection = styledComponent.div`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const RegistIconButton = styledComponent.label`
    ${flexCenter}
    padding: 50px 20px;
    border: solid 2px #FFF;
    border-radius: 5px;
    cursor: pointer;
    color: #FFF;
`

export const DefaultIcon = styled(AccountCircle)({
    cursor: 'pointer',
    height: '100px',
    width: '100px',
})

export const PreviewIcon = styledComponent.img`
    width: 100px;
    border-radius: 50%;
    object-fit: cover;
`

export const IconInput = styledComponent.input`
    display: none;
`

export const IconBoxHelper = styledComponent.span`

`

export const IconResetButton = styled(Button)({
    borderBottom: 'solid 1px #FFF',
    color: '#FFF',
    marginTop: '10px',
})

export const InnerUserInfoSection = styledComponent.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
`

export const CarouselSlide = styledComponent.div`
    margin-bottom: 20px;
`

export const InputSection = styledComponent.div`
    margin-right: ${props => props.itemProp === 'none' ? '18px' : '0'};
`

export const UserInfoInput = styled(TextField)({
    borderBottomColor: '#FFF',
    color: '#FFF',
    width: '250px',
})

export const BirthdayInputSection = styledComponent.div`
    display: flex;
    align-items: center;
`

export const CakeIcon = styledComponent.div`
    margin-top: 9px;
`

export const BirthdayInput = styledComponent.div`
    margin-left: 8px;
`

export const CarouselControler = styledComponent.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0;
`

export const CarouselBackButton = styled(Button)({
    color: '#FFF',
    fontSize: '30px',
    marginRight: '60px',
})

export const CarouselNextButton = styled(Button)({
    color: '#FFF',
    fontSize: '30px',
    marginLeft: '60px',
})

export const RegistTagSection = styledComponent.div`
    ${flexCenter}
    width: 1020px;
    height: 300px;
`

export const SelectedTag = styledComponent.label`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFF;
    border-radius: 30px;
    margin-right: 20px;
    height: 40px;
    padding: 0 10px;
`

export const TagLabel = styled(Label)({
    marginRight: '8px',
})

export const TagInput = styledComponent.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const DeleteSelectedTagButton = styledComponent.span`
    cursor: pointer;
    margin: 0 10px -3px 0;
`

export const SuggestTag = styledComponent.label`
    height: 40px;
    padding: 0 10px;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFF;
    border-radius: 30px;
    cursor: pointer;
`

export const SelectedTagsSection = styledComponent.div`
    display: flex;
    overflow-x: scroll;
    overflow-scrolling: touch;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SuggestTagsSection = styledComponent.div`
    display: flex;
    overflow-x: scroll;
    overflow-scrolling: touch;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Balidating = styled(CircularProgress)({
    height: '20px',
    width: '20px',
})

export const Error = styled(AssignmentLate)({
    color: '#F00',
    height: '20px',
    width: '20px',
})

export const Passing = styled(CheckCircle)({
    color: '#0F0',
    height: '20px',
    width: '20px',
})

export const SendBox = styledComponent.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const SendButton = styledComponent.button`
    border-radius: 100%;
    border: solid 5px ${props => !props.itemScope ? 'rgb(63, 213, 180)' : 'rgb(180, 180, 180)'};
    background: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 1024px){
        width: 70px;
        height: 70px;
    }
    @media screen and (max-width: 480px){
        width: 62px;
        height: 62px;
    }
`

export const SendIcon = styledComponent(FontAwesomeIcon)`
    color: ${props => props.color};
    @media screen and (min-width: 1024px){
        font-size: 30px;
        transform: translate(-3px, 1px);
    }
    @media screen and (max-width: 480px){
        font-size: 28px;
        transform: translate(-2px, 1px);
    }
`
