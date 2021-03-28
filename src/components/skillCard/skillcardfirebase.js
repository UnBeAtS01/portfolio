import React from 'react';
import './skillcardfirebase.scss';
import fb from '../../assets/firebase.svg';
class SkillCardFirebase extends React.Component {
    render() {
        return (
            <div className='skillfb-card'>
                <div className='skillfb-card-div'><img className='skillfb-card-icon' src={fb} alt='profile' /></div>
                <div className='skillfb-card-box'>
                    <div className='skillfb-card-head'><div className='skillfb-card-head-inside'>Firebase</div></div>
                    <div className='skillfb-card-box-graph'>
                        <div className='skillfb-card-graph-head'> <div className='skillfb-card-graph-inside'>experience</div></div>
                        <div className='skillfb-card-bar'><div className='skillfb-card-bar-inside'>strength</div></div>
                        <div className='skillfb-card-bar-project'><div className='skillfb-card-bar-project-inside'>Projects</div></div>

                    </div>

                </div>
            </div>
        )
    }
}
export default SkillCardFirebase;