import React from 'react';
import './skillcard.scss';
import react from '../../assets/logo.svg';
class SkillCard extends React.Component {
    render() {
        return (
            <div className='skill-card'>
                <div className='skill-card-div'><img className='skill-card-icon' src={react} alt='profile' /></div>
                <div className='skill-card-box'>
                    <div className='skill-card-head'><div className='skill-card-head-inside'>React</div></div>
                    <div className='skill-card-box-graph'>
                        <div className='skill-card-graph-head'> <div className='skill-card-graph-inside'>experience</div></div>
                        <div className='skill-card-bar'><div className='skill-card-bar-inside'>strength</div></div>
                        <div className='skill-card-bar-project'><div className='skill-card-bar-project-inside'>Projects</div></div>

                    </div>

                </div>
            </div>
        )
    }
}
export default SkillCard;