import '../SkillsList/SkillsList.css'
import CardSkills from '../CardSkills/CardSkills.jsx'

export default function FutureSkillsList ({title}) {
    const skills = ['React', 'Redux', 'Git', 'Webpack', 'React', 'Redux', 'Git', 'Webpack', 'React', 'Redux', 'Git', 'Webpack']
    return(
        <div className="skills-list">
            <h2 className="skills-list__title">{title}</h2>
            <ul className='skills-list__list'>
            {skills.map((skill, index) => <CardSkills key={index} skill={skill}/>) }
            </ul>
        </div>
    )
}