import './Contributor.css'

export const Contributor = ({ name, image, role, backgroundCard }) => {
    return (
        <div className='contributor'>
             <div className='header' style={{ backgroundColor: backgroundCard }}>
                <img src={image} alt={name}/>
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    )
}
