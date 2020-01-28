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
        var url = "https://api.petfinder.com/v2/animals?type=dog&good_with_children=true";
        var bearer = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQxMzRiNjE2NmE1MjlhY2ZmYjYxNGU2NGU0YTI4OWY5ZmE4NWFiYzZlZTgwZWZjOGQ2ZWEwMDk2MDFiOGY0N2YwODA4NGRlMGRhNTg3NmM1In0.eyJhdWQiOiJjeDFRMWhQMm12UjZqZUc0NDdjQVJrYThVUmp3cFdseW42bXlLZWRWM3c2YXAzcXkwdiIsImp0aSI6IjQxMzRiNjE2NmE1MjlhY2ZmYjYxNGU2NGU0YTI4OWY5ZmE4NWFiYzZlZTgwZWZjOGQ2ZWEwMDk2MDFiOGY0N2YwODA4NGRlMGRhNTg3NmM1IiwiaWF0IjoxNTgwMTY2NTQ5LCJuYmYiOjE1ODAxNjY1NDksImV4cCI6MTU4MDE3MDE0OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.Z94K4eM3cPEIVNo_VQ5GyZjK0vPVYk0UXG5tqHUVeb7MBZ7HvNF756gjoGqbYscT5pIcB140UHY5lYbyELcDwkPpC2AZATfJt0dAUk2OREQuqQH99e7GxciAIgj0con_apaUml9674UEnjYfAJYepdokffNTa6R8kLTtv0af0s-T3crigMkzl16bfMqgedrr0HFMHHt31i_d_WLdHPc8yl9BRgEVjOAZULDazLDv0ALBSxymDYkKFf0iPjaqee5eHMoN-8QdpzaPvycMUxm3oszwkjPAwzTKnjemTaqcvERQ-FPMZM-2VwEwsuHpD06mmvR-QuQtY1yPuIZl95WWZQ'

        fetch(url, {
            withCredentials: true,
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        items: result.items,
                        "Access-Control-Allow-Origin": true
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
                            {item.name} {item.price}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}
export default Test; 