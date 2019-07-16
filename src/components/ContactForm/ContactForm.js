import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import contactService from '../../utils/contactService'
import './ContactForm.css'
import SideBar from '../SideBar/SideBar'

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
    render() {
        const contacts = this.props.contacts.map((contact, idx) => (
            <p>{contact.name}</p>
        ))
        return (
            <div>
                <div className='row'>
                    <form className='col s8' onSubmit={this.handleSubmit}>
                        <div className='row one'>
                            <div className='input-field col s4'>
                                <input type='text' name='name' placeholder='John Doe' value={this.state.name} onChange={this.handleChange}></input>
                                <label className='active black-text' for='name'>Name</label>
                            </div>
                            <div className='input-field col s4'>
                                <input className='form-control' type='text' name='email' value={this.state.email} placeholder='Doe@gmail.com' onChange={this.handleChange}></input>
                                <label className='active black-text' for='email'>Email</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='input-field col s8'>
                                <textarea id='textarea1' className='materialize-textarea' type='text' name='message' value={this.state.message} placeholder='Your Question Here' onChange={this.handleChange}></textarea>
                                <label className='active black-text' for='textarea1'>Message</label>
                            </div>
                        </div>
                        <div className='btnRow'>
                            <button type='submit' className='btn btn-default' disabled={this.isFormInvalid()}>Submit</button>
                            <Link className='btn btn-default' to='/'>Cancel</Link>
                        </div>
                        {contacts}
                    </form>
                    <SideBar />
                </div>
            </div>
        )
    }
}

export default ContactForm