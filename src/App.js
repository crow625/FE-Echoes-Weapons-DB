import { useState } from 'react';
import { Button, Form, Input } from 'reactstrap';

const App = () => {

    const [message, setMessage] = useState('');
    const [reply, setReply] = useState('');

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
            <h1>Whoops</h1>
            <p>Turns out, you can't run a server on github pages. Time to find a different place.</p>
            <Form onSubmit={submitForm}>
                <Input type="text" id="message" value={message} onChange={(e) => {setMessage(e.target.value)}} />

                <Button type="submit">Send</Button>
            </Form>
            
            {reply && <p>{reply}</p>}
        </>
    )
}

export default App;
