import React from 'react';
import './projectcard.scss';
import CustomButton from '../custom-button/custom-button.components';
class ProjectCardToDo extends React.Component {

    render() {
        return (
            <div className='projectcard'>
                <div className='projectcard-box'>
                    <div className='projectcard-box-image' style={{ backgroundImage: `url(https://hygger.io/wp-content/uploads/2020/04/15.png)` }
                    } />
                    <div className='see-live'><a href='https://gifted-bose-555bab.netlify.app'>see live</a></div>
                </div>
                <div className='projectcard-content'>
                    <div className='projectcard-content-header'><span className='project-content-header-inside'>To-Do List(self project)</span></div>
                    <div className='projectcard-content-useof'> skill used:</div>
                    <div className='projectcard-content-list'>
                        -React -Html -Sass -Js
                </div>
                    <div className='projectcard-button'><a href='https://gifted-bose-555bab.netlify.app'><CustomButton>see live</CustomButton></a><a href='https://github.com/unbeat01/to-do'><CustomButton resume>see code</CustomButton></a></div>

                </div>

            </div>
        )
    }
}
export default ProjectCardToDo;