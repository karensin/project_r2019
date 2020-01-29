import React from 'react'

const domain = "https://api.petfinder.com";
const tokenUrl = '/v2/oauth2/token';
const url = `/v2/animals?type=dog&good_with_children=true`;;
class Test extends React.Component {
    constructor(props) {
        super(props);
        this.token = '';
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    async getToken() {
        const response = await fetch(`${domain}${tokenUrl}`, {
            body: "grant_type=client_credentials&client_id=cx1Q1hP2mvR6jeG447cARka8URjwpWlyn6myKedV3w6ap3qy0v&client_secret=j6t83Wt0nfH075v0hhdYnutWnnuvfmtnDbmY8JOb",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: 'POST'
        });
        const jsonResponse = await response.json();
        this.token = jsonResponse.access_token;
    }

    async requestData() {
        const bearer = `Bearer ${this.token}`;
        try {
            const res = await fetch(domain + url, {
                withCredentials: true,
                headers: {
                    Authorization: bearer,
                    'Content-Type': 'application/json'
                }
            });
            const jsonRes = await res.json();
            this.setState({
                isLoaded: true,
                items: jsonRes.animals
            });
        } catch (error) {
            this.setState({
                isLoaded: true,
                error
            });
        }
    }

    async componentDidMount() {
        await this.getToken();
        console.log(this.token);
        this.requestData();

        // .then(res => res.json())
        // .then(
        //     (result) => {
        //         this.setState({
        //             isLoaded: true,
        //             items: result.animals
        //         });
        //     },
        //     // Note: it's important to handle errors here
        //     // instead of a catch() block so that we don't swallow
        //     // exceptions from actual bugs in components.
        //     (error) => {
        //         this.setState({
        //             isLoaded: true,
        //             error
        //         });
        //     }
        // )
    }

    render() {
        const { error, isLoaded, items } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.name}>
                            {item.name}: {item.type} | {item.breeds.primary}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}
export default Test; 