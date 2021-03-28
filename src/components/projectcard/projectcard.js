import React from 'react';
import './projectcard.scss';
import CustomButton from '../custom-button/custom-button.components';
class ProjectCard extends React.Component {

    render() {
        return (
            <div className='projectcard'>
                <div className='projectcard-box'>
                    <div className='projectcard-box-image' style={{ backgroundImage: `url(https://thenextscoop.com/wp-content/uploads/2019/01/How-to-Start-a-Multi-vendor-eCommerce-Site-Easily-1280x720.png)` }
                    } />
                    <div className='see-live'><a href='https://eloquent-darwin-84e54c.netlify.app'>see live</a></div>
                </div>
                <div className='projectcard-content'>
                    <div className='projectcard-content-header'><span className='project-content-header-inside'>E-commerce site(self project)</span></div>
                    <div className='projectcard-content-useof'> skill used:</div>
                    <div className='projectcard-content-list'>
                        -React -Html -Css -Sass -Js  -Redux -Firebase -StripeApi
                </div>
                    <div className='projectcard-button'><a href='https://eloquent-darwin-84e54c.netlify.app'><CustomButton>see live</CustomButton></a><a href='https://github.com/unbeat01/e-commerce'><CustomButton resume>see code</CustomButton></a></div>

                </div>

            </div>
        )
    }
}
export default ProjectCard;