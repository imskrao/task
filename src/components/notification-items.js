import React, { Component } from 'react'

export default class NotificationItems extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notificationItems: [],
            currentNotification: [],
            from: 10
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/notification')
        .then(res => res.json())
        .then(data => {
            this.setState({
                notificationItems: data,
                currentNotification: data.slice(0,10)
            })
        })
    }

    getNotifiactionItems = (data) => {
        return data.map((item,i) => {
            return (
                <div key={i} className="notificationItems">
                    <h4 className="title">{item.title}</h4>
                    <p className="body">{item.body}</p>
                </div>
            )
        })
    }
    handleScroll = (e)=>{
        var scrollVal =  parseInt(e.target.scrollHeight - e.target.scrollTop);

        if(scrollVal === +e.target.clientHeight && this.state.from < this.state.notificationItems.length){
            this.setState({
                currentNotification : [...this.state.currentNotification, ...this.state.notificationItems.slice(this.state.from,this.state.from + 10)],
                from: this.state.from + 10
            },()=> console.log("updated state: ", this.state.currentNotification))
        }
    }

    render() {
        return (
            <div>
                <h3 className="block-heading">Notifications</h3>
                <div className="notificationItem" onScroll={(e)=>{this.handleScroll(e)}}>
                    {this.getNotifiactionItems(this.state.currentNotification)}
                </div>
            </div>
        )
    }
}
