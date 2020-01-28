import React from 'react'

const domain = "https://api.petfinder.com"
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
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjgzNmUxMDI2ZjBlNWY4MTNkYTZmMTA1ZWViMjIxMWRiYjYzMGIxOWEyMjExNDFhMjI2MjNhOThkZTVjYTE4MDI5Nzc5ZGY1YzM3ZWQ1MTJiIn0.eyJhdWQiOiJjeDFRMWhQMm12UjZqZUc0NDdjQVJrYThVUmp3cFdseW42bXlLZWRWM3c2YXAzcXkwdiIsImp0aSI6IjgzNmUxMDI2ZjBlNWY4MTNkYTZmMTA1ZWViMjIxMWRiYjYzMGIxOWEyMjExNDFhMjI2MjNhOThkZTVjYTE4MDI5Nzc5ZGY1YzM3ZWQ1MTJiIiwiaWF0IjoxNTgwMjQyMDIyLCJuYmYiOjE1ODAyNDIwMjIsImV4cCI6MTU4MDI0NTYyMiwic3ViIjoiIiwic2NvcGVzIjpbXX0.jvk5jGemeEH6oOft9S0ryFs4u9Nq5OP0aUSFa0AKlQydpnXq4dzNbPBmy53gpySyBrehfXhjk-JYs0ENHgGbr210tw-sZYYfk23T4lWjOMrpeU1e2HCmbfzM2D7gL7YfvFyJA0NVVTuFI76bCC8EdPdamhSw50i48_1C9n2kK19LsIcJEwyJSyhqMgIJcGZdWhJyFcbGkrXiZuFUCNuW796gYZFTKpeX4kEudBiNV0xOfxWOXpxPaz5Twy00SsSpcAffdLW91yMRC6oUyweKotJBCoB2BmmypwjUrQX7I_tCeK4tVgeR3qMghzonaFiLOSwwh9HzsDYNj-TAZp8rGw";
        let url = `/v2/animals?type=dog&good_with_children=true`;
        let bearer = 'Bearer ' + token;
        console.log(url);
        console.log(bearer);

        // fetch(domain + "/v2/oauth2/token", {
        //     mode: 'no-cors',
        //     body: "grant_type=client_credentials&client_id=cx1Q1hP2mvR6jeG447cARka8URjwpWlyn6myKedV3w6ap3qy0v&client_secret=j6t83Wt0nfH075v0hhdYnutWnnuvfmtnDbmY8JOb",
        //     headers: {
        //         "Content-Type": "application/x-www-form-urlencoded"
        //     },
        //     method: 'POST'
        // })
        // .then(res => res.json())
        // .then(
        // (res) => {
        fetch(domain + url, {
            withCredentials: true,
            // mode: 'no-cors'
            headers: {
                Authorization: bearer,
                'Content-Type': 'application/json',
                // credentials: 'same-origin',
                // "Access-Control-Allow-Origin": "*",
                // 'Access-Control-Allow-Methods': "*",
                // 'Access-Control-Expose-Headers': '*',
                // 'Access-Control-Allow-Headers': '*',
                // body: JSON.stringify({
                //     grant_type: "client_credentials",
                //     client_id: "cx1Q1hP2mvR6jeG447cARka8URjwpWlyn6myKedV3w6ap3qy0v",
                //     client_secret: "j6t83Wt0nfH075v0hhdYnutWnnuvfmtnDbmY8JOb"
                // })
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
        // })
    }




    render() {
        return (<div></div >)
        // const { error, isLoaded, items } = this.state;
        // if (error) {
        //     return <div>Error: {error.message}</div>;
        // } else if (!isLoaded) {
        //     return <div>Loading...</div>;
        // } else {
        //     return (
        //         <ul>
        //             {items.map(item => (
        //                 <li key={item.name}>
        //                     {item.name} {item.price}
        //                 </li>
        //             ))}
        //         </ul>
        //     );
        // }
    }
}
export default Test; 