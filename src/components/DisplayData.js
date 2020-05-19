import React, { useEffect, useState } from 'react'
import GetData from './GetData'
import { Image } from 'semantic-ui-react'




function DisplayData(props) {
    const { items } = props
    const [photo, setPhoto] = useState([])

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
                console.log(item, '_______', item['photos'], item['photos'][0]['full'], 'lookie')
                // if (items['primary_photo_cropped']) {
                //     console.log(item['primary_photo_cropped']['small'], '__________hehe')
                // }

            }
        }

        mapItems()
    }, [props])

    return (
        <div>
            {items.map(item => (
                <li key={makeid(5)}>
                    {item.name}: {item.type} | {item.breeds.primary}|
                    <Image src='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48016172/1/?bust=1589856412&width=100' size='small' circular />
                </li>
            ))}
            {/* {console.log(items, 'props')} */}
        </div>
    )

}
export default DisplayData;