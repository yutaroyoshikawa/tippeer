import * as React from 'react'
import { Back, SearchBox, TipperLogo, UserMenu } from '../components'


export default class GlobalMenu extends React.Component<{}, {}> {
    public componentDidMount() {
        // if(uaparser.getDevice() === 'mobile'){
        //     
        // }
        
    }

    public render() {
        return(
            <nav>
                <ul style={{display: 'flex', justifyContent: 'space-around', listStyle: 'none'}}>
                    <Back />
                    <TipperLogo />
                    <SearchBox />
                    <UserMenu />
                </ul>
            </nav>
        )
    }
}
