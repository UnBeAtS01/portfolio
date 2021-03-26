import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
class Navbar extends React.Component {

    render() {
        return (
            <div className='nav-bar'>
                <div className='current-page'>
                    {this.props.present}
                </div>
                <div className='nav-bar-comp'>

                    <Link to='/' onClick={() => this.props.change('About')} className='nav-bar-items'>About</Link>
                    <Link to='/projects' onClick={() => this.props.change('Project')} className='nav-bar-items'>Projects</Link>
                    <Link to='/something' onClick={() => this.props.change('Something')} className='nav-bar-items'>something</Link>


                </div>

            </div>
        )
    }
}
export default Navbar;