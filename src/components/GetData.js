import React from 'react'
import { store } from '../index'
import { Image } from 'semantic-ui-react'
import DisplayData from './DisplayData'
import Header from './Header'


class GetData extends React.Component {
    constructor(props) {
        super(props);
        this.token = '';
        this.state = {
            error: null,
            isLoaded: false,
            items: []

        };
        store.subscribe(() => this.updateData())
    }

    updateData() {
        const petState = store.getState()
        // console.log(petState, petState['petData'][0]['photos'][0]['small'], 'what')
        this.setState({
            items: petState.petData
        })

    }

    render() {
        let { isLoaded } = this.props;
        let { items } = this.state;

        items = items || [];

        isLoaded = true;
        if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div >
                    <DisplayData items={items} />
                </div>
            );
        }
    }
}
export default GetData; 