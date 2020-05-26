import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'semantic-ui-react'

const ageOptions = [
    { key: 'baby', text: 'Baby', value: 'baby' },
    { key: 'young', text: 'Young', value: 'young' },
    { key: 'adult', text: 'Adult', value: 'adult' },
    { key: 'Senior', text: 'Senior', value: 'senior' },


]
export function DropdownExampleMultipleSelection() {
    return (<Dropdown placeholder='Age' fluid multiple selection options={ageOptions} />)
}
class Footer extends Component {





    render() {
        return (
            <footer className="footer">

                {DropdownExampleMultipleSelection()}

            </footer>
        )
    }
}
export default Footer;