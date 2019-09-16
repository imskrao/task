import React from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showNav: false
        }
    }

    toggleSideNav = (action) => {
        this.setState({
            showNav: action
        })
    }

    render() {
        return (
            <div className="App">
                <Header
                    showNav={this.state.showNav}
                    onHideNav={() => this.toggleSideNav(false)}
                    onOpenNav={() => this.toggleSideNav(true)}
                />
                <Content />
                <Footer />
            </div>
        );
    }

}

export default App;
