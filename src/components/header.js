import React from 'react'
import FontAwesome from 'react-fontawesome'
import SideNavigation from './side-nav'

export default function Header(props) {
    return (
        <div className="header">
            <SideNavigation {...props}/>
            <div className="notificationBar" onClick={props.onOpenNav}>
                <FontAwesome name="bell" />
            </div>
        </div>
    )
}
