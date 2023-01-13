import { useState } from 'react';
import bird from './Svg/bird.svg';
import cat from './Svg/cat.svg';
import cow from './Svg/cow.svg';
import dog from './Svg/dog.svg';
import gator from './Svg/gator.svg';
import heart from './Svg/heart.svg';
import horse from './Svg/horse.svg';
import './AnimalShow.css';


const SvgMap={
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}

function AnimalShow({type}){
    const [clicks, setClick] = useState(0);
    const handleClick = () =>{
        setClick(clicks + 1);
    };
        return (
        <div className='animal-show' onClick={handleClick}>
            <img className='animal' alt="animal"  src={SvgMap[type]} />
            <img className='heart' alt='heart' src={heart} style={{width: 10 + 10 * clicks}} />
        </div> 
    )
    
}
export default AnimalShow;