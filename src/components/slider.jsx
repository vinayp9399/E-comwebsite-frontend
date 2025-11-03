import { useEffect, useState } from 'react';
import '../css/home.css';
const Slider = ()=>{
    let images =['https://images-eu.ssl-images-amazon.com/images/G/31/sudipta/BAU/GW/PC/High1_Budget_store_Unrec._CB779539446_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/yesbank/makeup_PC._CB796616147_.png',
    'https://images-eu.ssl-images-amazon.com/images/G/31/Img25/Consumables/Grocery/SVD/Nov/SVD_PC_Hero_01_3000x1200._CB779402117_.jpg']
    let [imageno, setimageno] = useState(0);
    const [image, setimage]=useState('https://images-eu.ssl-images-amazon.com/images/G/31/sudipta/BAU/GW/PC/High1_Budget_store_Unrec._CB779539446_.jpg');

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