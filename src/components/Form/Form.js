import { useState } from "react";
import Button from "../Button";
import DropDown from "../DropDown";
import TextField from "../TextField";
import "./Form.css";

export const Form = (props) => {

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const saving = (event) => {
        event.preventDefault();
        props.ttregisteredContributor({
            name,
            position,
            image,
            team
        });

        setName('');
        setPosition('');
        setImage('');
        setTeam('');
    }

    return (
        <section className="form">
            <form onSubmit={saving}>
                <h2>Fill out the form to create the collaborator card</h2>
                
                <TextField 
                    required={true} 
                    label="Name" 
                    placeholder="Type your name"
                    value={name}
                    ttModified={value => setName(value)}
                />
                <TextField 
                    required={true} 
                    label="Position" 
                    placeholder="Type your position"
                    value={position}
                    ttModified={value => setPosition(value)}    
                />
                <TextField 
                    label="Image" 
                    placeholder="Enter the image adress"
                    value={image}
                    ttModified={value => setImage(value)}
                />
                
                <DropDown 
                    label="Team" 
                    items={props.teamsName}
                    valueProp={team}
                    ttModified={value => setTeam(value)}
                />
               
                <Button text="Create Card">Create Card</Button>
            </form>
        </section>
    );
}