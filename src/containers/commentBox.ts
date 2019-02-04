import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import commentBox, { IProps } from '../components/commentBox'
import { buildStore } from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
        auth: state.auth,
        commentBox: state.commentBox,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })

export const CommentBox = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(commentBox) as React.ComponentClass