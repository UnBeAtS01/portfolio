import React from 'react';
import './projectcard.scss';
import CustomButton from '../custom-button/custom-button.components';
class ProjectCardChat extends React.Component {

    render() {
        return (
            <div className='projectcard'>
                <div className='projectcard-box'>
                    <div className='projectcard-box-image' style={{ backgroundImage: `url(https://elements-cover-images-0.imgix.net/821208ca-2d4e-414c-92f6-e4994160d7c1?auto=compress%2Cformat&fit=max&w=710&s=36db30049345a05b33b7226f94fd3db4 )` }
                    } />

                    <div className='see-live'><a href='https://pensive-blackwell-6258c7.netlify.app'>see live</a></div>
                </div>
                <div className='projectcard-content'>
                    <div className='projectcard-content-header'><span className='project-content-header-inside'>messenger (self project)</span></div>
                    <div className='projectcard-content-useof'> skill used:</div>
                    <div className='projectcard-content-list'>
                        -React -Html -Css -Sass -Firebase
                </div>
                    <div className='projectcard-button'><a href='https://pensive-blackwell-6258c7.netlify.app'><CustomButton>see live</CustomButton></a><a href='https://github.com/unbeat01/chat-app'><CustomButton resume>see code</CustomButton></a></div>

                </div>

            </div>
        )
    }
}
export default ProjectCardChat;