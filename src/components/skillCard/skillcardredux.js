import React from 'react';
import './skillcardredux.scss';
import redux from '../../assets/redux.svg';
class SkillCardRedux extends React.Component {
    render() {
        return (
            <div className='skillredux-card'>
                <div className='skillredux-card-div'><img className='skillredux-card-icon' src={redux} alt='profile' /></div>
                <div className='skillredux-card-box'>
                    <div className='skillredux-card-head'><div className='skillredux-card-head-inside'>Redux</div></div>
                    <div className='skillredux-card-box-graph'>
                        <div className='skillredux-card-graph-head'> <div className='skillredux-card-graph-inside'>experience</div></div>
                        <div className='skillredux-card-bar'><div className='skillredux-card-bar-inside'>strength</div></div>
                        <div className='skillredux-card-bar-project'><div className='skillredux-card-bar-project-inside'>Projects</div></div>

                    </div>

                </div>
            </div>
        )
    }
}
export default SkillCardRedux;