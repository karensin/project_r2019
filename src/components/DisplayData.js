import React, { useEffect, useState } from 'react'
import GetData from './GetData'
import { Image, Card, Icon } from 'semantic-ui-react'



// use react library 'card' to display each pet's breed, age, photo, 
function DisplayData(props) {
    const { items } = props
    const [photo, setPhoto] = useState([])

    function DisplayPhoto(item) {
        if (item['photos'][0]) {
            if (item['photos'][0]['full'] !== null) {
                return item['photos'][0]['full']
            } else {
                return null
            }


        }
    }
    function DisplayName(itemName) {
        if (itemName) {
            if (itemName.includes('*')) {
                let nameArr = [...itemName]
                let newName = nameArr.filter((letter) => {
                    if (letter === '*') {
                        return false
                    } else {
                        return true
                    }
                })
                return newName.join('')
            } else {
                return itemName
            }
        } else {
            return itemName = 'This fur baby does not have a name yet'
        }
    }
    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    useEffect(() => {
        function mapItems() {
            // console.log(items[0]['primary_photo_cropped']['small'])
            for (let i = 0; i < items.length; i++) {
                let item = items[i]
                console.log(item, '_______', item['photos'], item['photos'][0], 'lookie')
                // if (items['primary_photo_cropped']) {
                //     console.log(item['primary_photo_cropped']['small'], '__________hehe')
                // }

            }
        }
        console.log(DisplayName('**karen'))
        mapItems()
    }, [items])
    // {
    //     items.map(item => (
    //         <li key={makeid(5)}>
    //             {DisplayName(item.name)}: {item.type} | {item.breeds.primary}|
    //             <Image src={DisplayPhoto(item)} size='small' circular />
    //         </li>
    //     ))
    // }
    return (
        <div>
            {items.map((item) => (
                <Card>
                    <Image src={DisplayPhoto(item)} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{DisplayName(item.name)}</Card.Header>
                        <Card.Meta>Joined in 2016</Card.Meta>
                        <Card.Description>
                            {DisplayName(item.name)} is a {item.breeds.primary} living in Nashville.
                </Card.Description>
                    </Card.Content>
                </Card>
            ))}

            {/* {items.map(item => (
                <li key={makeid(5)}>
                    {DisplayName(item.name)}: {item.type} | {item.breeds.primary}|
                    <Image src={DisplayPhoto(item)} size='small' circular />
                </li>
            ))} */}
            {/* {console.log(items, 'props')} */}
        </div>
    )

}
export default DisplayData;