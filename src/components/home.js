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
                { Input('Color') }
                { Input('Blue') }
                { Input('Red') }
                { Input('Yellow') }
                { Input('Green') }
            </div>
        );
    }
}

export default Home;