import * as React from 'react';
import { useState } from 'react';
import { email } from '../../utils/mailgun';
import Swal from 'sweetalert2';

export interface ContactProps { }

const Contact: React.SFC<ContactProps> = () => {

    const [name, setName] = useState('')
    const [emailAd, setEmailAd] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [saveStatus, setSaveStatus] = useState('');


    const handleEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let newSubject = name + " - " + subject;
        let body = {
            emailAd,
            newSubject,
            message
        }

        try {
            if (name && emailAd) {
                email(body)
                setSaveStatus('success')
                history.back()
            } else {
                setSaveStatus('error')
            }
        } catch (e) {
            console.log(e)
        }

    }

    const handleConfirm = () => {
        if (saveStatus === 'erroe') {
            Swal.fire('Please check required fields')
        }
        // else if (saveStatus === 'error') {

        // }
    };



    return (
        <section className="contact-section">
            <form className="form-group email-form"
                onSubmit={(e) => handleEmail(e)} >
                <div className="email-div m-3">
                    <label className="">Name (required)</label>
                    <input type="text" value={name} className="name-input input-group p-2 px-4"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
                </div>
                <div className="email-div m-3">
                    <label className="">Email (required)</label>
                    <input type="text" value={emailAd} className="email-input input-group p-2 px-4"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailAd(e.target.value)} />
                </div>
                <div className="subject-div m-3">
                    <label className="">Subject</label>
                    <input type="text" value={subject} className="subject-input input-group p-2 px-4"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)} />
                </div>
                <div className="message-div m-3">
                    <label className="">Message</label>
                    <textarea rows={10} value={message} className="message-input input-group p-2 px-4"
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)} />
                </div>
                <div className="button-div">
                    <button type="submit" className="btn btn-primary rounded-pill m-3">Send</button>
                </div>
                {handleConfirm()}
            </form>
        </section>
    );
}

export default Contact;