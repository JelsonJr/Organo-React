import './Contributor.css';

export const Contributor = ({name, image, position, background}) => {
    return(
        <div className='contributor'>
            <div className='header' style={{backgroungColor: background}}>
                <img src={image} alt={name}/>
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    );
}