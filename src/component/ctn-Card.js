//import { useState } from 'react';
import styled from 'styled-components';//css, keyframes, ThemeProvider, createGlobalStyle 
import Card from './card';


export default function CtnCard(){

    //const [movie, setMovie] = useState([])
    let prueba = [
        {
            id:1,
            img:"https://i.ibb.co/gMDgFC5/20.jpg",
            value:"7.5"
        },
        {
            id:2,
            img:"https://i.ibb.co/hLD0KjN/19.jpg",
            value:"3.5"
        },
        {
            id:3,
            img:"https://i.ibb.co/Rj8SkMC/18.jpg",
            value:"9.5"
        },
        {
            id:4,
            img:"https://i.ibb.co/gzGGBWf/17.jpg",
            value:"9.5"
        },
        {
            id:5,
            img:"https://i.ibb.co/6Pv1zyq/2.jpg ",
            value:"8.5"
        },
        {
            id:6,
            img:" https://i.ibb.co/D7CtKVW/1.jpg",
            value:"6.5"
        },
        {
            id:7,
            img:"https://i.ibb.co/6XZdWJj/16.jpg",
            value:"7.0"
        },
        {
            id:7,
            img:"https://i.ibb.co/2Kcr9Nd/15.jpg",
            value:"7.0"
        },        {
            id:7,
            img:"https://i.ibb.co/HPNdT6s/3.jpg",
            value:"7.0"
        },        {
            id:8,
            img:"https://i.ibb.co/3Ms9dXC/4.jpg",
            value:"9.0"
        },        {
            id:9,
            img:"https://i.ibb.co/QCz5c2x/5.jpg",
            value:"6.0"
        },        {
            id:10,
            img:"https://i.ibb.co/rfsKHqG/10.jpg",
            value:"9.0"
        },        {
            id:11,
            img:"https://i.ibb.co/WxPG234/14.jpg",
            value:"10.0"
        },        {
            id:12,
            img:"https://i.ibb.co/mSYPmjT/11.jpg",
            value:"6.0"
        },        {
            id:13,
            img:"https://i.ibb.co/2tbzZ5q/12.jpg",
            value:"2.0"
        },        {
            id:14,
            img:"https://i.ibb.co/267mv85/21.jpg",
            value:"9.5"
        },        {
            id:15,
            img:"https://i.ibb.co/XZSDgCB/13.jpg",
            value:"7.4"
        },        {
            id:16,
            img:"https://i.ibb.co/7bHL6sM/7.jpg",
            value:"10"
        },        {
            id:17,
            img:"https://i.ibb.co/R9B8H9f/9.jpg",
            value:"5.0"
        },        {
            id:18,
            img:"https://i.ibb.co/2Nn6YnS/8.jpg",
            value:"4.0"
        },        {
            id:19,
            img:" https://i.ibb.co/r4Z0Hj3/6.jpg",
            value:"7.0"
        },        {
            id:20,
            img:"https://i.ibb.co/QCz5c2x/5.jpg",
            value:"7.0"
        },   


    ]
    const MainCard = styled.section`
    width:100%;
    height:auto;
    display:flex;
    flex-wrap:wrap;
    `;
    return(
        <MainCard>       
       {prueba.map(el => <Card key={el.id} image={el.img} rating={el.value}/>)}
        </MainCard>
)
}

/*

 const getMovie = async()=>{
        const response= database.collection('peliculas')
        const data = await response.get();

        data.docs.forEach(el =>{
               // console.log(el.data())
            const lista = {
                img: el.data().imagen,
                value: el.data().rating,
            }
            arr.push(lista)
        })

        
*/