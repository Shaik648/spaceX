import React, { Component } from 'react'
import Conatinetr from './Conatinetr'
import Footer from './Footer'
import Header from './Header'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Conatinetr />
                <Footer />
            </div>
        )
    }
}
