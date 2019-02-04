import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardContent, Divider, Fab, Typography } from '@material-ui/core'
// import ListIcon from '@material-ui/icons/List'
import * as React from 'react'
import { Dispatch } from 'redux'
// import * as actions from '../actions/manage'
import { IManageState } from '../reducers/manage'
import { ArticleTitle } from './'
// import * as Styled from '../styles/tipping'

export interface IProps extends IManageState {
    dispatch: Dispatch<any>
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public render() {
        return (
            <div>
                <div style={{ width: '90%', margin: '0 auto' }}>
                    <div style={{ margin: '50px 0' }}>
                        <ArticleTitle title="パフォーマンス" color="light" />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '50px 0' }}>
                        <Fab color="secondary" variant="extended" aria-label="Add" >
                            <FontAwesomeIcon icon={faPlusCircle} />
                            <span style={{ paddingLeft: '5px' }}>パフォーマンスを登録する</span>
                        </Fab>
                    </div>
                    <Divider />
                    <Typography component="h3">
                        登録済みパフォーマンス
                    </Typography>
                    <div style={{ display: 'inline-block', margin: '50px' }}>
                        <Card style={{ width: '300px' }}>
                            <CardContent>
                                <Typography color="textSecondary">
                                    Something Performance
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

