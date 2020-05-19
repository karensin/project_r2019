import React from 'react'
import { store } from '../index'
import { Image } from 'semantic-ui-react'
import DisplayData from './DisplayData'


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
                <div>
                    {/* <Image src='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48016172/1/?bust=1589856412&width=100' size='small' circular /> */}
                    <DisplayData items={items} />
                    {/* <ul>
                        
                    </ul> */}
                </div>
            );
        }
    }
}
export default GetData; 