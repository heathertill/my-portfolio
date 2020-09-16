import * as React from 'react';
import { useState } from 'react';

export interface ContactProps { }

const Contact: React.SFC<ContactProps> = () => {

    const [emailAd, setEmailAd] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleEmail = (e: React.FormEvent<HTMLFormElement>) => {

    }

    return (
        <section>
            <form className="form-group email-form"
                onSubmit={(e) => handleEmail(e)} >
                <div className="email-div">
                    <label className="">Email</label>
                    <input type="text" value={emailAd} className="input-group "
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailAd(e.target.value)} />
                </div>
                <div className="subject-div">
                    <label className="">Subject</label>
                    <input type="text" value={subject} className="input-group"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)} />
                </div>
                <div className="message-div">
                    <label className="">Message</label>
                    <textarea rows={5} value={message} className="input-group"
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)} />
                </div>
                <div className="button-div">
                    <button type="submit" className="btn btn-block">Email Me!</button>
                </div>

            </form>
        </section>
    );
}

export default Contact;