import { store } from '../index'
import { Image } from 'semantic-ui-react'
import DisplayData from './DisplayData'
import Header from './Header'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'
import React, { useEffect, useState } from 'react';


function GetData(props) {
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const petState = store.getState();
            setItems(petState.petData || []);
        });
        // Initialize items on mount
        const petState = store.getState();
        setItems(petState.petData || []);
        return () => unsubscribe();
    }, []);

    if (!isLoaded) {
        return (<h1>Loading...</h1>);
    } else {
        return (
            <div className="dataBox">
                <DisplayData items={items} />
            </div>
        );
    }
}
export default GetData; 