import React from 'react'

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        let token = "";
        let url = "/v2/animals?type=dog&good_with_children=true";
        let bearer = 'Bearer '

        fetch("/v2/oauth2/token")
            .then(res => res.json())
            .then(
                (res) => {
                    console.log(res)
                    fetch(url, {
                        withCredentials: true,
                        headers: {
                            'Authorization': bearer,
                            'Content-Type': 'application/json',
                            "Access-Control-Allow-Origin": "*",
                            'Access-Control-Allow-Methods': "GET, PUT, POST, DELETE, HEAD, OPTIONS",
                            'Access-Control-Expose-Headers': 'Authorization',
                            body: {
                                grant_type: "client_credentials",
                                client_id: "cx1Q1hP2mvR6jeG447cARka8URjwpWlyn6myKedV3w6ap3qy0v",
                                client_secret: "j6t83Wt0nfH075v0hhdYnutWnnuvfmtnDbmY8JOb"
                            }
                        }
                    }).then(res => res.json())
                        .then(
                            (result) => {
                                console.log(result)
                                this.setState({
                                    isLoaded: true,
                                    items: result.items
                                });
                            },
                            // Note: it's important to handle errors here
                            // instead of a catch() block so that we don't swallow
                            // exceptions from actual bugs in components.
                            (error) => {
                                this.setState({
                                    isLoaded: true,
                                    error
                                });
                            }
                        )
                })
    }





    render() {
        return (<div></div>)
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
                            {item.name} {item.price}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}
export default Test; 