import { useState, useEffect } from 'react';
import { Button, Form, Input } from 'reactstrap';
import swords from './json/swords.json';
import { WeaponSelector } from './Components/WeaponSelector';

const App = () => {

    const [message, setMessage] = useState('');
    const [reply, setReply] = useState('');
    const [weapon, setWeapon] = useState({});

    // useEffect(() => {
    //     console.log(swords);
    // }, [])

    const onWeaponSelectHandler = (val) => {
        console.log(val);
        setWeapon(val);
        // console.log(weapon.name);
    }

    const submitForm = async (e) => {
        e.preventDefault();
        const submitResponse = await fetch(`api/example`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const r = await submitResponse.json(); // Don't forget .json() lol
        setReply(r.message);
    }

    return (
        <>
            <Form onSubmit={submitForm}>
                <WeaponSelector 
                    weapons={swords} 
                    onWeaponSelect={onWeaponSelectHandler}
                    weapon={weapon}
                />
                {/* <Input type="text" id="message" value={message} onChange={(e) => {setMessage(e.target.value)}} /> */}

                {/* <Button type="submit">Send</Button> */}
            </Form>
            
            {/* {reply && <p>{reply}</p>} */}
            {weapon && <p>{weapon.name}</p>}
        </>
    )
}

export default App;
