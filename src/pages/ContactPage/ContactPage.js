import React, { Component } from 'react'
import contactService from '../../utils/contactService'
import ContactForm from '../../components/ContactForm/ContactForm'

class ContactPage extends Component {

    state = {
        errMessage: '',
        contacts: []
    }

    async componentDidMount() {
        await contactService.index(this.props.user)
            .then(results => {
                this.setState({contacts: [...results]})
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