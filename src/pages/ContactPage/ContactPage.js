import React, { Component } from 'react'
import contactService from '../../utils/contactService'
import ContactForm from '../../components/ContactForm/ContactForm'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

class ContactPage extends Component {

    state = {
        errMessage: '',
        contacts: []
    }

    async componentDidMount() {
        await contactService.index(this.props.user)
            .then(results => {
                this.setState({ contacts: [...results] })
            })
    }

    handleUpdateContacts = (contact) => {
        this.setState({ contacts: [...this.state.contacts, { ...contact }] })
    }

    updateMessage = (errMsg) => {
        this.setState({ errMessage: errMsg })
    }

    render() {
        const contacts = this.state.contacts.map((contact, idx) => (
            <p>{contact.name}</p>
        ))
        return (
            <div>
                <NavBar
                    {...this.props}
                />
                <ContactForm
                    {...this.props}
                    handleUpdateContacts={this.handleUpdateContacts}
                    updateMessage={this.updateMessage}
                />
                <p>{this.state.errMessage}</p>
                {contacts}
            </div>
        )
    }
}

export default ContactPage