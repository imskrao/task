import React from 'react'
import SideNav from 'react-simple-sidenav'
import NotificationItems from './notification-items'

export default function SideNavigation(props) {
    return (
        <div>
            <SideNav showNav={props.showNav} onHideNav={props.onHideNav} navStyle={{maxWidth: '400px'}} openFromRight={true}>
                <div className="SideNav">
                    <NotificationItems/>
                </div>
            </SideNav>
        </div>
    )
}
