import React from 'react';
import Navbar from '../navbar/navbar';
import './about.scss';
import { Switch, Route } from 'react-router-dom';
import AboutPage from '../../pages/about/about';
import ProjectPage from '../../pages/project/project';
class About extends React.Component {
    state = {
        present: 'About'
    }
    change = (data) => {
        this.setState({ present: data });
    }
    render() {
        return (
            <div className='about'>
                <Navbar change={this.change} present={this.state.present} />

                <Route exact path='/' component={AboutPage} />
                <Route exact path='/projects' component={ProjectPage} />



            </div>
        )
    }
}
export default About;