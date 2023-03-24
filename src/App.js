import { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import swords from './json/swords.json';

const App = () => {

    const [weapon, setWeapon] = useState("");

    useEffect(() => {
        console.log(swords);
    }, []);

    const submitForm = async (e) => {
        e.preventDefault();
        console.log(weapon);
    }

    return (
        <>
            <Form onSubmit={submitForm}>
                <FormGroup>
                    <Input 
                        type="select" 
                        value={weapon} 
                        onChange={(e) => {setWeapon(e.target.value)}}
                    >
                        <option value="" hidden>Select a Weapon</option>
                        {swords.map((item, i) => {
                            return (
                                <option value={item.name} key={i}>{item.name}</option>
                            )
                        })}
                    </Input>
                </FormGroup>
            </Form>
            
            {weapon && <p>{`${weapon}: ${swords.find(s => s.name === weapon).mt} mt`}</p>}
        </>
    )
}

export default App;
