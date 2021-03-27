import React from 'react';
import ProjectCard from '../../components/projectcard/projectcard';
import ProjectCardfaceDetect from '../../components/projectcard/projectcardfacedetect';
import ProjectCardToDo from '../../components/projectcard/projectcardtodo';
import ProjectCardRobo from '../../components/projectcard/projectcardRobo';
import './project.scss';

class ProjectPage extends React.Component {

    render() {
        return (
            <div className='projectpage'>
                <div className='major'><span>Major Projects</span></div>
                <div>
                    <ProjectCard />
                    <ProjectCardfaceDetect />
                </div>
                <div className='major'><span>Mini Projects</span></div>
                <div>
                    <ProjectCardToDo />
                    <ProjectCardRobo />
                </div>
            </div>
        )
    }
}
export default ProjectPage;