import React from 'react';
import './skillcardDsa.scss';
import algo from '../../assets/algo.svg';
class SkillCardDsa extends React.Component {
    render() {
        return (
            <div className='skilldsa-card'>
                <div className='skilldsa-card-div'><img className='skilldsa-card-icon' src={algo} /></div>
                <div className='skilldsa-card-box'>
                    <div className='skilldsa-card-head'><div className='skilldsa-card-head-inside'>DataStructure and Algo/c/c++/oops</div></div>
                    <div className='skilldsa-card-box-graph'>
                        <div className='skilldsa-card-graph-head'> <div className='skilldsa-card-graph-inside'>skill</div></div>
                        <div className='skilldsa-card-bar'><div className='skilldsa-card-bar-inside'>strength</div></div>
                        <div className='skilldsa-card-bar-project'><div className='skilldsa-card-bar-project-inside'>competitons</div></div>

                    </div>

                </div>
            </div>
        )
    }
}
export default SkillCardDsa;