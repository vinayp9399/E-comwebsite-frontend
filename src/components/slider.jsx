import { useEffect, useState } from 'react';
import '../css/home.css';
const Slider = ()=>{
    let images =['https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/home-landing-web/Homepage_Banners_1920x655_38aEuqC.jpg?format=webp&w=1300&dpr=1.5',
    'https://blog.elverys.ie/app/uploads/2018/06/NIKE-BANNERS-1920X696-2-1.jpg',
    'https://storage.sg.content-cdn.io/in-resources/7f703506-689d-4b4e-b482-c32d60769d33/Images/ProductImages/Source/Home%20Page%20Banner%20images/Home%20Banner%203-Earpods.jpeg']
    let [imageno, setimageno] = useState(0);
    const [image, setimage]=useState('https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/home-landing-web/Homepage_Banners_1920x655_38aEuqC.jpg?format=webp&w=1300&dpr=1.5');

    function changeSlide(){
        setimage(images[imageno]);
        if(imageno >= images.length -1){
            imageno = 0;
        }else{
            imageno = imageno + 1;
        }
        setTimeout(changeSlide,5000);
    }

    const prevSlide=()=>{
        
        setimageno(imageno-1);
        console.log(imageno);
        setimage(images[imageno]);
    }

    const nextSlide=()=>{
        if(imageno >= images.length -1){
            imageno = 0;
        }else{
            imageno = imageno + 1;
        }
        setimage(images[imageno]);
        // setimageno(imageno+1);
        // console.log(imageno);
        // setimage(images[imageno]);
    }
    
    useEffect(()=>{
        changeSlide();
    },[])
    return(
        <>
            <img id="imagegalary" src={image} class="img2" alt=""/>
            <a class="prev" onClick={()=>{prevSlide()}}>❮</a>
            <a class="next" onClick={()=>{nextSlide()}}>❯</a>
        </>
    )
}
export default Slider