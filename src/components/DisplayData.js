import React, { useEffect, useState } from 'react'
import GetData from './GetData'
import { Item } from 'semantic-ui-react'
import { Icon, Label } from 'semantic-ui-react'
import { Button, Pagination } from 'semantic-ui-react'
import { Container, Row, Col } from 'react-bootstrap';


// use react library 'card' to display each pet's breed, age, photo, 
function DisplayData(props) {

    const { items } = props
    const [photo, setPhoto] = useState([])

    useEffect(() => {
        function mapItems() {
            for (let i = 0; i < items.length; i++) {
                let item = items[i]
            }
        }
        mapItems()
    }, [items])

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


    function getTimeDiff(dataTime) {
        // let validMonth=false
        //format= NOW year - Past Year    AND Now Month-Past Month +1 
        let getToday = new Date()
        let year = getToday.getFullYear() //return present year
        let month = getToday.getUTCMonth(); //return present month 
        let past = new Date(dataTime)
        let pastYear = past.getFullYear()
        let pastMonth = past.getUTCMonth()

        let yearDiff = year - pastYear
        let monthDiff = month - pastMonth + 1
        if (monthDiff < 0) {
            monthDiff *= -1
        }
        if (yearDiff === 0) {
            yearDiff = ''
        } else if (yearDiff === 1) {
            yearDiff = '1 Year'
        } else {
            yearDiff = `${yearDiff} Years `
        }
        let result = `${yearDiff} ${monthDiff} Months`
        return result

    }

    function getYear(dataTime) {
        let d = new Date(dataTime)
        return d.getFullYear()
    }


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
        <Container style={{ marginTop: '125px' }}>
            <Item.Group>
                {items.map((item) => (
                    <Item className="columnBox">
                        <Item.Image className="crop" size='medium' src={DisplayPhoto(item)} wrapped ui={false} />
                        <Item.Content>
                            <Item.Header>{DisplayName(item.name)} </Item.Header>
                            <Item.Meta>
                                <Icon name='mail' />  {item['contact']['email']}
                                <Icon name='phone' /> {item['contact']['phone']} </Item.Meta>
                            <Item.Description>
                                <Label>  <strong> Age:</strong> {item.age} </Label>
                                <Label><strong> Gender: </strong>  {item.gender}</Label>
                                <Label><strong>  Size: </strong>   {item.size}</Label>
                                <br /> <div> {DisplayName(item.name)} is a {getColor(item)} {item.breeds.primary},our fury friend was admitted to the shelter since {getYear(item.published_at)} and has been in the shelter for {getTimeDiff(item.published_at)}
                                </div>
                            </Item.Description>
                            <Item.Extra>  {tag(item)}</Item.Extra>
                        </Item.Content>
                        <Button className="detailsbtn" href={item['url']}> Click for more details </Button>
                    </Item>
                ))}
            </Item.Group>

        </Container>
    )

}
export default DisplayData;