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
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImMzNDE3MjFkMWUwMmZiYzc0NTcxNTdjMmVhMGY5NzdlMDdlMGQ1MTA5NjIxNDM3MWNiNjM2NGM4YmU5ZmQwMzllZTg5YWE4YzRkMDcxMDU4In0.eyJhdWQiOiJjeDFRMWhQMm12UjZqZUc0NDdjQVJrYThVUmp3cFdseW42bXlLZWRWM3c2YXAzcXkwdiIsImp0aSI6ImMzNDE3MjFkMWUwMmZiYzc0NTcxNTdjMmVhMGY5NzdlMDdlMGQ1MTA5NjIxNDM3MWNiNjM2NGM4YmU5ZmQwMzllZTg5YWE4YzRkMDcxMDU4IiwiaWF0IjoxNTgwMTgzODU4LCJuYmYiOjE1ODAxODM4NTgsImV4cCI6MTU4MDE4NzQ1OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.vn6dXMabxIV_Uubs4mkpuLPPcAaR-D-SVeBzctuG21JScoIPrBIUAIfEb0K57G9JFzIc45KoVJIREvvJEWe7_IOHDo0-KoqMIV2gG96hEizh1LmQ_e1AjlzojBHDqXtHFxo-aQKkf6um-5bUxni_iVhVdFE5crzYEYrfQqS7pewSQfraYIQ86OZh7j-SQGdjNBQD2-6hTs6DdamnXaImweGpEmnSBpn55FdQK7X8gvf7-J2xIScbqtQf09R9jbN0Bjwb9Ff5tEnHYzD-a-3gSqssFUxhLfze_st9XKpdYRqV4yBJrJXhY5pyMagnIsHpce1teZSwVV11QxYkpmypWA";
        let url = "/v2/animals?type=dog&good_with_children=true";
        let bearer = 'Bearer ' + token;

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
            mode: 'no-cors',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Methods': "GET, PUT, POST, DELETE, HEAD, OPTIONS",
                'Access-Control-Expose-Headers': 'Authorization',
                'Access-Control-Allow-Headers': '*',
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