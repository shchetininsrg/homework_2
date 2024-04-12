import './CardSkills.css'

export default function CardSkills ({skill}) {
    return(
        <li className="card-skills">
            <p className="card-skills__text">{skill}</p>
        </li>
    )
}