import React, { useEffect, useState } from 'react'
import GetData from './GetData'
import { Item } from 'semantic-ui-react'
import { Icon, Label } from 'semantic-ui-react'
import { Button, Pagination, Card, CardMeta, Image, CardContent, CardDescription, CardGroup, CardHeader } from 'semantic-ui-react'
import { Container, Row, Col } from 'react-bootstrap';


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

    function getImageByItem(item) {
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
            }
            if (item['species'] === 'Dog') {
                return dogPhoto
            }
            return randoPhoto

        }
    }

    function displayName(itemName) {
        if (itemName) {
            if (itemName.includes('*')) {
                let nameArr = [...itemName]
                let newName = nameArr.filter((letter) => {
                    if (letter === '*') {
                        return false
                    }
                    return true

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
    const extra = (item) => {
        return (
            <Button size="small" className="detailsbtn" href={item['url']}> Click for more details </Button>)
    }

    return (
        <Row style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'baseline' }}>

            {items.map((item) => (
                <Card
                    key={makeid(5)}
                    className="pet-card"
                    style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}
                >
                    <Image src={getImageByItem(item)} style={{ height: '250px', objectFit: 'contain' }} className="p-2" />
                    <CardContent>
                        <CardHeader>{item.name}</CardHeader>
                        <CardMeta>  In shelter for  {getTimeDiff(item.published_at)}
                        </CardMeta>
                        <CardDescription>
                            <Label>  {item.gender} <Icon name={item.gender === 'male' ? 'man' : 'woman'} /> </Label>
                            <Label>  {item.size}</Label>
                            <Label>  {item.age} </Label>

                        </CardDescription>
                    </CardContent>
                    <CardContent extra className='d-flex justify-content-between'>
                        <Button size="small" className="detailsbtn d-flex" href={item['contact']['email'] ? `mailto:${item['contact']['email']}` : item['url']}>
                            <Icon name='mail' /> <span> Contact</span>
                        </Button>
                        <Button size="small" className="detailsbtn d-flex" href={item['url']}>
                            <Icon name='paw' /> Learn More
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </Row>
    )

}
export default DisplayData;

{/* <Item className="columnBox">
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
<Button className="detailsbtn" href={item['url']}> Click for more details </Button></>
</Item > */}