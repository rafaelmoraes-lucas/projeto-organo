import { Contributor } from '../Contributor'
import './Team.css'

export const Team = (props) => {
    const css = { backgroundColor: props.secundaryColor }

    return (
        (props.contributors.length > 0) ? <section className='team' style={css}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='contributors'>
                {props.contributors.map( contributor => <Contributor backgroundCard={props.primaryColor} key={contributor.name} name={contributor.name} role={contributor.role} image={contributor.image}/> )}
            </div>
        </section> 
        : ''
    )
}
