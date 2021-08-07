import React from 'react';

const ContactForm= (props)=>{   
    return(
        <div className= 'ContactForm' style= {{fontSize: '20px', fontFamily: 'bold'}}>
            Fill up the form and our team will get back to you within 24 hours
            <div className= 'form'>
                <div className= 'pair'>
                    <input className= 'input' type= 'text' placeholder= 'Name' />
                    <input className= 'input' type= 'email' placeholder= 'Email' />
                </div>
                <div className= 'pair'>
                    <input className= 'input' type= 'text' placeholder= 'Phone' />
                    <input className= 'input' type= 'text' placeholder= 'Subject' />
                </div>
                <textarea className= 'textarea' placeholder= 'Message'>
                </textarea>
                <button type= 'submit' className= 'submitBtn'>Submit</button>
            </div>
        </div>
    );
}

export default ContactForm;