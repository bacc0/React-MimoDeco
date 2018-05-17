import React from 'react';
import Footer from '../components/common/Footer';
import axios from '././common/Axios';

export class ContactPageSuccess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            phoneNumber: '',
            text: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {

        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        // axios.post('api/users', {user: this.state});
       
        this.props.history.push('/contact');

        axios.post('/Contact Info.json', { user: this.state })

 
        .then(response => console.log(response))
        .catch(error => console.log(error));
}
    render() {
        return (
            <div>
                <div class="blur-4">
                <header class="header-contact" > </header>
                    <form onSubmit={this.onSubmit}  className="contact-form">
                        <div  className="form-group">
                            <div id="contact-page-title">
                                <h2>We're happy to hear from you</h2>
                            </div>
                         <input  className="form-uni"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                    type="text"
                                    name="username"
                                    className="form-control"
                                    placeholder="Name / required"
                            required />
                        <input 
                                    value={this.state.phoneNumber}
                                    onChange={this.onChange}
                                    type="text"
                                    name="phoneNumber"
                                    className="form-control"
                                    placeholder="Phone number"
                            />
                        <input  
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    placeholder="Email "
                            />
                        <textarea  
                                    value={this.state.text}
                                    onChange={this.onChange}
                                    type="text"
                                    name="text"
                                    className="form-control"
                                    placeholder="Message / required"
                            required  />
                    
                            <div  className="form-group" className="col col-8" className="submit-button-holder">
                            <input type="submit"   value=" Submit " id="submit-button-form" className="btno btn-white"/>
                                {/* <button>Sent</button> */}
                            </div>
                        </div>
                    </form>
                    </div>
                    <div className="success-message">
                         <div className="success-message-text">
                         <h2>Your message has been successfully sent!</h2>
                         <br/>
                         <h3>We will contact you shortly.</h3>
                         <br/>
                         <br/>
                         <a href="/" className="btnb"> Home </a>
                         </div>
                    </div>

                    <div class="blur-4">
                <Footer/>
           </div>
           </div>
        );
    }
}

export default ContactPageSuccess;
