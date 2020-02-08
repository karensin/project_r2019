import React from 'react'
import { store } from './index'

class Test extends React.Component {
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
        console.log(petState)
        this.setState({
            items: petState.petData
        })
    }

    makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
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
                <ul>
                    {items.map(item => (
                        <li key={this.makeid(5)}>
                            {item.name}: {item.type} | {item.breeds.primary}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}
export default Test; 