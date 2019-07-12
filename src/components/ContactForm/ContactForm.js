import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import contactService from '../../utils/contactService'
import './ContactForm.css'

class ContactForm extends Component {

    state = {
        name: '',
        email: '',
        message: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await contactService.create(this.state, this.props.user)
            this.props.handleUpdateContacts(this.state)
        } catch (err) {
            console.log(err)
        }
    }

    isFormInvalid() {
        return !(this.state.name && this.state.email && this.state.message)
    }
    render () {
        return (
            <div>
            <h1>Contact Us</h1>
            <form className='form-horizontal' onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <div className='col-sm-4'>
                        <input className='form-control' type='text' name='name' value={this.state.name} placeholder='Name: John Doe' onChange={this.handleChange}></input>
                    </div>
                </div>
                <div className='form-group'>
                    <div className='col-sm-4'>
                        <input className='form-control' type='text' name='email' value={this.state.email} placeholder='Email: JohnDoe@gmail.com' onChange={this.handleChange}></input>
                    </div>
                </div>
                <div className='form-group'>
                    <div className='col-sm-12'>
                        <textarea className='form-control' rows='3' type='text' name='message' value={this.state.message} placeholder='Message: Your question here' onChange={this.handleChange}></textarea>
                    </div>
                </div>
                <div className='form-group'>
                    <div className='col-sm-12'>
                        <button type='submit' className='btn btn-default' disabled={this.isFormInvalid()}>Submit</button>
                        <Link to='/'>Cancel</Link>
                    </div>
                </div>
            </form>
            </div>
        )
    }
}

export default ContactForm