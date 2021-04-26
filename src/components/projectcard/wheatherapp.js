import React from 'react';
import './projectcard.scss';
import CustomButton from '../custom-button/custom-button.components';
class ProjectCardWth extends React.Component {

    render() {
        return (
            <div className='projectcard'>
                <div className='projectcard-box'>
                    <div className='projectcard-box-image' style={{ backgroundImage: `url(https://www.nicepng.com/png/detail/133-1330501_weather-svg-thunderstorm-weather-clipart.png)` }
                    } />
                    <div className='see-live'><a href='https://weather-app-unbeat01.vercel.app/'>see live</a></div>
                </div>
                <div className='projectcard-content'>
                    <div className='projectcard-content-header'><span className='project-content-header-inside'>Weather-app(self project)</span></div>
                    <div className='projectcard-content-useof'> skill used:</div>
                    <div className='projectcard-content-list'>
                        -React -Html -Sass -api
                </div>
                    <div className='projectcard-button'><a href='https://weather-app-unbeat01.vercel.app/'><CustomButton>see live</CustomButton></a><a href='https://github.com/unbeat01/weather-app'><CustomButton resume>see code</CustomButton></a></div>

                </div>

            </div>
        )
    }
}
export default ProjectCardWth;