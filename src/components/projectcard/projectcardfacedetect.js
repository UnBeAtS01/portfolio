import React from 'react';
import './projectcard.scss';
import CustomButton from '../custom-button/custom-button.components';
class ProjectCardfaceDetect extends React.Component {

    render() {
        return (
            <div className='projectcard'>
                <div className='projectcard-box'>
                    <div className='projectcard-box-image' style={{ backgroundImage: `url(https://developers.google.com/ml-kit/vision/face-detection/images/face_detection2x.png)` }
                    } />
                    <div className='see-live'><a href='https://intelligents.herokuapp.com/'>see live</a></div>
                </div>
                <div className='projectcard-content'>
                    <div className='projectcard-content-header'><span className='project-content-header-inside'>faceDetection(udemy project)</span></div>
                    <div className='projectcard-content-useof'> skills used:</div>
                    <div className='projectcard-content-list'>
                        -React -Html -Css -Sass -Js  -express -clarifiApi -nodejs
                </div>
                    <div className='projectcard-button'><a href='https://intelligents.herokuapp.com/'><CustomButton>see live</CustomButton></a><a href='https://github.com/unbeat01/intelligent-frontend'><CustomButton resume>see code</CustomButton></a></div>

                </div>


            </div>
        )
    }
}
export default ProjectCardfaceDetect;