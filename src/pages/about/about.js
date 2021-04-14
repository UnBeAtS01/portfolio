import React from 'react';
import './about.scss';
import SkillCard from '../../components/skillCard/skillcard';
import SkillCardCss from '../../components/skillCard/skillcardcss';
import SkillCardJs from '../../components/skillCard/skillcardJs';

import image from '../../assets/profilepic.png';
import SkillCardNodejs from '../../components/skillCard/skillcardnodejs';
import SkillCardFirebase from '../../components/skillCard/skillcardfirebase';
import SkillCardRedux from '../../components/skillCard/skillcardredux';
import SkillCardDsa from '../../components/skillCard/skillcardDsa';
class AboutPage extends React.Component {

    render() {
        return (
            <div className='about-page'>

                <div className='profile'>
                    <div className='profile-pic' ><img className='profile-pic-pic' src={image} alt='profile pic' />
                        <div className='backgroundimg'></div>
                        <div className='backgroundimg2'></div>
                    </div>
                    <div className='profile-content'>
                        <div className='title'>Myself</div>
                        <div className='profile-content-text'>
                            <div className='profile-content-text-style'>Hi,My name is Ankit Sinha</div>
                            I'm student of jadavpur university under B.E. pursuing web-dev and have a good command on DSA along with problem solving skill.
                            I'm energetic and sporty person, always eager to learn new skill.I'm optimistic one,just trying to live each day at it best.
                        </div>
                    </div>

                </div>
                <div className='skill-div'> <div className='skill'>Expertise</div></div>
                <div className='skill-scrollable'>
                    <SkillCardDsa />
                    <SkillCardCss />
                    <SkillCard />
                    <SkillCardRedux />
                    <SkillCardJs />
                    <SkillCardNodejs />
                    <SkillCardFirebase />

                </div>

            </div>



        )
    }
}
export default AboutPage;
