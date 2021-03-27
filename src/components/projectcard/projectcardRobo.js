import React from 'react';
import './projectcard.scss';
import CustomButton from '../custom-button/custom-button.components';
class ProjectCardRobo extends React.Component {

    render() {
        return (
            <div className='projectcard'>
                <div className='projectcard-box'>
                    <div className='projectcard-box-image' style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPSeBYJxSW9iHYgob1gAcNDt3--F5pKcX4Kw&usqp=CAU)` }
                    } />
                    <div className='see-live'><a href=' https://unbeat01.github.io/robosearch2/.'>see live</a></div>
                </div>
                <div className='projectcard-content'>
                    <div className='projectcard-content-header'><span className='project-content-header-inside'>RoboFriend(self project)</span></div>
                    <div className='projectcard-content-useof'> skill used:</div>
                    <div className='projectcard-content-list'>
                        -React -Html -css -Sass -Js
                </div>
                    <div className='projectcard-button'><a href=' https://unbeat01.github.io/robosearch2/.'><CustomButton>see live</CustomButton></a><a href='https://github.com/unbeat01/robosearch2'><CustomButton resume>see code</CustomButton></a></div>

                </div>

            </div>
        )
    }
}
export default ProjectCardRobo;