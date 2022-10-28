import { Contributor } from '../Contributor/Contributor';
import './Team.css';

export const Team = (props) => {

    return (
        (props.contributors.length > 0) 
            && 
        <section className="team" style={{backgroundColor: props.secondColor}}>
            <h3 style={{borderColor:  props.firstColor}}>{props.name}</h3>
            <div className='contributors'>
                {props.contributors.map(contributor => 
                    <Contributor 
                        key={contributor.name}
                        name={contributor.name} 
                        position={contributor.position} 
                        image={contributor.image}
                        background={props.firstColor}
                    />)
                }
            </div>
        </section>
    );
}