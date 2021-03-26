import React from 'react';
import './skillcardnodejs.scss';
import nodejs from '../../assets/node-js.svg';
class SkillCardNodejs extends React.Component {
    render() {
        return (
            <div className='skillnodejs-card'>
                <div className='skillnodejs-card-div'><img className='skillnodejs-card-icon' src={nodejs} /></div>
                <div className='skillnodejs-card-box'>
                    <div className='skillnodejs-card-head'><div className='skillnodejs-card-head-inside'>Nodejs</div></div>
                    <div className='skillnodejs-card-box-graph'>
                        <div className='skillnodejs-card-graph-head'> <div className='skillnodejs-card-graph-inside'>experience</div></div>
                        <div className='skillnodejs-card-bar'><div className='skillnodejs-card-bar-inside'>strength</div></div>
                        <div className='skillnodejs-card-bar-project'><div className='skillnodejs-card-bar-project-inside'>Projects</div></div>

                    </div>

                </div>
            </div>
        )
    }
}
export default SkillCardNodejs;