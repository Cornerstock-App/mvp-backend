import React, { useState } from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import FileUpload from '../../utils/FileUpload'
import Axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;

const shops = [
    { key: 1, value: "Shop1" },
    { key: 2, value: "Shop2" },
    { key: 3, value: "Shop3" }
]

function UploadProductPage(props) {

    const [TitleValue, setTitleValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [PriceValue, setPriceValue] = useState()
    const [ShopValue, setShopValue] = useState(1)

    const [Images, setImages] = useState([])


    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }

    const onShopsSelectChange = (event) => {
        setShopValue(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }
    const onSubmit = (event) => {
        event.preventDefault();


        if (!TitleValue || !DescriptionValue || !PriceValue ||
            !ShopValue || !Images) {
            return alert('fill all the fields first!')
        }

        const variables = {
            writer: props.user.userData._id,
            title: TitleValue,
            description: DescriptionValue,
            price: PriceValue,
            images: Images,
            shops: ShopValue,
        }

        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Product Successfully Uploaded')
                    props.history.push('/')
                } else {
                    alert('Failed to upload Product')
                }
            })

    }

    return (
        <div style={{ 
            maxWidth: '700px', 
            margin: '2rem auto' 
            }}>
            <div style={{ 
                textAlign: 'center', 
                marginBottom: '2rem' 
                }}>
                <Title level={2}> Upload Product</Title>
            </div>


            <Form onSubmit={onSubmit} >

                {/* DropZone */}
                <FileUpload refreshFunction={updateImages} />

                <br />
                <br />
                <label>Title</label>
                <Input
                    onChange={onTitleChange}
                    value={TitleValue}
                />
                <br />
                <br />
                <label>Description</label>
                <TextArea
                    onChange={onDescriptionChange}
                    value={DescriptionValue}
                />
                <br />
                <br />
                <label>Price(GH₵)</label>
                <Input
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                />
                <br/>
                <br/>
                <select onChange={onShopsSelectChange} 
                value={ShopValue}>
                    {shops.map(item => (
                        <option key={item.key} 
                        value={item.key}>{item.value} 
                        </option>
                    ))}
                </select>
                <br />
                <br />

                <Button
                    onClick={onSubmit}
                    style={{ 
                    background: '#FF4F00'
                    }} 
                >
                    Add product
                </Button>

            </Form>

        </div>
    )
}

export default UploadProductPage
