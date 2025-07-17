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
        let result = `${yearDiff} ${monthDiff > 0 ? `${monthDiff} Months` : ''} `
        return result

    }


    return (
        <Row style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'baseline' }}>
            {items.map((item) => (
                <Card
                    key={makeid(5)}
                    className="pet-card"

                >
                    <Image src={getImageByItem(item)} style={{ height: '250px', objectFit: 'contain' }} className="p-2" />
                    <CardContent>
                        <CardHeader>{item.name}</CardHeader>
                        <CardMeta>  Time in Shelter : {getTimeDiff(item.published_at)}
                        </CardMeta>
                        <CardDescription>
                            <Label className='mb-2'> <Icon name={item.gender === 'Male' ? 'man' : 'woman'} /> {item.gender}  </Label>
                            <Label className='mb-2'>  {item.age} </Label>
                            <Label className='mb-2'>  {item.breeds.primary} {item.breeds.secondary}</Label>

                        </CardDescription>
                    </CardContent>
                    <CardContent extra className='d-flex justify-content-between'>
                        <Button
                            size="small"
                            className="detailsbtn d-flex"
                            href={item['contact']['email'] ? `mailto:${item['contact']['email']}` : item['url']}


                        >
                            <Icon name='mail' /> <span> Contact</span>
                        </Button>
                        <Button
                            size="small"
                            className="detailsbtn d-flex"
                            href={item['url']}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon name='paw' /> Learn More
                        </Button>
                    </CardContent>
                </Card>
            ))
            }
        </Row >
    )

}
export default DisplayData;

