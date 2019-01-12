import React, { Component } from 'react';

import Header from './header';
import Card from './card';
import Input from './input';

class Home extends Component {
    render() {
        return ( 
            <div className="home" >
                { Header() }
                <Card />
            </div>
        );
    }
}

// things we need to fix
// labels in madLib Content
// Generate btn space/ card-height

export default Home;