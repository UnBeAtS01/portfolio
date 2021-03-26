import React from 'react';
import './skillcardcss.scss';
import sass from '../../assets/scss.svg';
class SkillCardCss extends React.Component {
    render() {
        return (
            <div className='skillcss-card'>
                <div className='skillcss-card-div'><img className='skillcss-card-icon' src={sass} /></div>
                <div className='skillcss-card-box'>
                    <div className='skillcss-card-head'><div className='skillcss-card-head-inside'>Sass</div></div>
                    <div className='skillcss-card-box-graph'>
                        <div className='skillcss-card-graph-head'> <div className='skillcss-card-graph-inside'>experience</div></div>
                        <div className='skillcss-card-bar'><div className='skillcss-card-bar-inside'>strength</div></div>
                        <div className='skillcss-card-bar-project'><div className='skillcss-card-bar-project-inside'>Projects</div></div>

                    </div>

                </div>
            </div>
        )
    }
}
export default SkillCardCss;