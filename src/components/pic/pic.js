import React from 'react';
import './pic.scss';
import image from '../../assets/ankit.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CustomButton from '../custom-button/custom-button.components';
import Resume from '../../assets/Ankit.pdf';
class Pic extends React.Component {
    render() {
        return (
            <div className='pic-bar'>

                <img className='pic-image' src={image} alt='profile pic' />

                <div className='second'>
                    <div className='pic-name'>ANKIT  SINHA</div>
                    <div className='pic-email'>ankit.unbeat01@gmail.com</div>
                    <div className='web-dev'>
                        purshuing web development
                    </div>
                    <div className='box'>
                        <div>JADAVPUR UNIVERSITY</div>
                        <div className='box-city'><LocationOnIcon /> KOLKATA </div>
                        <div className='social'>
                            <a href='https://github.com/unbeat01' className='icons'><GitHubIcon className='box-font' /></a>
                            <a href='https://in.linkedin.com/in/ankit-sinha-5318721ba' className='icons'><LinkedInIcon className='box-font' /></a>
                        </div>
                    </div>
                </div>
                <div className='contact-us'>
                    <a href={Resume} download='resume.pdf'><CustomButton resume>download resume</CustomButton></a>
                    <CustomButton onClick={() => window.open("mailto:ankit.unbeat01@gmail.com")}>contact me</CustomButton>
                </div>

            </div>
        )
    }
}
export default Pic;