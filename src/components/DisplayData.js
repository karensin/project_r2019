import React, { useEffect, useState } from 'react'
import GetData from './GetData'
import { Item } from 'semantic-ui-react'
import { Icon, Label } from 'semantic-ui-react'

// import { Image, Card, Icon } from 'semantic-ui-react'

// import { Container, Row, Col } from 'react-bootstrap';

// use react library 'card' to display each pet's breed, age, photo, 
function DisplayData(props) {
    const { items } = props
    const [photo, setPhoto] = useState([])

    function DisplayPhoto(item) {
        let dogPhoto = process.env.PUBLIC_URL + "/imgs/goofyDog.jpeg"
        let catPhoto = process.env.PUBLIC_URL + "/imgs/cat2.jpeg"
        let randoPhoto = process.env.PUBLIC_URL + "/imgs/smilingDog.jpeg"
        if (item['photos'][0]) {
            if (item['photos'][0]['full'] !== null) {
                return item['photos'][0]['full']
            }
        } else {
            if (item['species'] === 'Cat') {
                return catPhoto
            } else if (item['species'] === 'Dog') {
                return dogPhoto
            } else {
                return randoPhoto
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
    //cats children 
    function tag(item) {
        let tags = []
        for (let speices in item['environment']) {
            console.log('did u run', speices)
            if (item['environment'][speices] !== null) {
                if (item['environment'][speices] === true) {
                    tags.push(<Label> {speices} friendly</Label>)
                }
            }
        }
        for (let attribute in item['attributes']) {
            if (item['attributes'][attribute] !== null) {
                if (item['attributes'][attribute] === true) {
                    tags.push(<Label> {attribute} </Label>)
                }
            }
        }
        return tags

    }
    function description(description) {
        let str = '!@#$%^&*()?><./;{}|'
        if (description.includes(...str)) {

        }
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
        // console.log(DisplayName('**karen'))
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
    function getColor(item) {
        if (item['colors'] !== null) {
            if (item['colors'][['primary']]) {
                return item['colors']['primary']
            }

        } else {
            return null
        }
    }
    return (
        <div>
            <Item.Group>
                {items.map((item) => (
                    <Item className="columnBox">
                        <Item.Image className="crop" size='medium' src={DisplayPhoto(item)} wrapped ui={false} />
                        <Item.Content>
                            <Item.Header>{DisplayName(item.name)} {item.age}</Item.Header>
                            <Item.Meta>   For adoption please contact
                                  <Icon name='mail' />  {item['contact']['email']}
                                <Icon name='phone' /> {item['contact']['phone']} </Item.Meta>
                            <Item.Description>
                                {DisplayName(item.name)} is a {getColor(item)} {item.breeds.primary}waiting to join your family!
                                Joined in {item.published_at}:
                            </Item.Description>
                            <Item.Extra>  {tag(item)}</Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
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