import { useState } from 'react';
import { Button, Form, Input } from 'reactstrap';

const App = () => {

    const [message, setMessage] = useState('');
    const [reply, setReply] = useState('');

    const submitForm = async (e) => {
        e.preventDefault();
        
        setReply(`${message} from the backend!`);
    }

    return (
        <>
            <Form onSubmit={submitForm}>
                <Input type="text" id="message" value={message} onChange={(e) => {setMessage(e.target.value)}} />

                <Button type="submit">Send</Button>
            </Form>
            
            {reply && <p>{reply}</p>}
        </>
    )
}

export default App;
