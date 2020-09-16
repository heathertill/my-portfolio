import * as React from 'react';
import { useState } from 'react';

export interface ContactProps { }

const Contact: React.SFC<ContactProps> = () => {

    const [emailAd, setEmailAd] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleEmail = (e: React.FocusEvent<HTMLFormElement>) => {
    
}

    return (
        <section>
            <form className="form-group"
                onSubmit={(e) => handleEmail(e)} >
                <label className="">Email</label>
                <input type="text" value={emailAd} className="input-group "
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailAd(e.target.value)} />
                <label className="">Subject</label>
                <input type="text" value={subject} className="input-group"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)} />
                <label className="">Message</label>
                <textarea rows={5} value={message} className="input-group"
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)} />
                <button className="btn btn-block btn-warning mx-auto my-3 shadow">Email Me!</button>
                {this.handleEmail()}
            </form>
        </section>
    );
}

export default Contact;