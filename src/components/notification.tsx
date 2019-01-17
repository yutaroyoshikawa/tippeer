import * as React from 'react'
import * as Notifications from 'react-notification-system-redux';
import { Dispatch } from 'redux'

export interface IProps extends Notifications.NotificationsProps {
    dispatch: Dispatch
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public render() {
        return(
            <Notifications
                notifications={this.props.notifications}
                style={{
                    NotificationItem: {
                        DefaultStyle: {
                            background: 'rgba(255, 255, 255, 0.8)',
                            borderRadius: '10px',
                            boxShadow: '0px 3px 20px 0px rgba(0,0,0,0.4)',
                        }
                    }
                }}
            />
        )
    }
}