import React from 'react';
import './skillcardJs.scss';
import js from '../../assets/javascript.svg';

class SkillCardJs extends React.Component {
    render() {
        return (
            <div className='skilljs-card'>
                <div className='skilljs-card-div'><img className='skilljs-card-icon' src={js} alt='profile' /></div>
                <div className='skilljs-card-box'>
                    <div className='skilljs-card-head'><div className='skilljs-card-head-inside'>Javascript/Es6</div></div>
                    <div className='skilljs-card-box-graph'>
                        <div className='skilljs-card-graph-head'> <div className='skilljs-card-graph-inside'>experience</div></div>
                        <div className='skilljs-card-bar'><div className='skilljs-card-bar-inside'>strength</div></div>
                        <div className='skilljs-card-bar-project'><div className='skilljs-card-bar-project-inside'>Projects</div></div>

                    </div>

                </div>
            </div>
        )
    }
}
export default SkillCardJs;