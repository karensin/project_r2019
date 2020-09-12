import React from 'react'
import { store } from '../index'
import { Image } from 'semantic-ui-react'
import DisplayData from './DisplayData'
import Header from './Header'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'


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
            return (<h1>Loading...</h1>)
        } else {
            return (
                <div className="dataBox">
                    <DisplayData items={items} />
                </div>
            );
        }
    }
}
export default GetData; 