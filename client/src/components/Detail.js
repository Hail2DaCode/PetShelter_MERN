import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, useNavigate} from "react-router-dom";
import Header from './Header';
const Pet = (props) => {
    const navigate = useNavigate();
    const [pet, setPet] = useState({})
    const {id} = useParams();
    const [like, setLike] = useState(0);
    const handleClick = () => {
        setLike(like + 1)
    }
    const deletepet = () => {
       axios.delete('http://localhost:8000/api/pet/' + id)
          .then(res => { console.log(res)
              // removeFromDOM(petId)
            })
            .catch(err => console.log(err));
           navigate('/');
    }
    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/" + id)
            .then( res => {
                console.log(res.data);
                setPet(res.data);
            })
            .catch( err => console.log(err) );
    }, []);
    return (
        <div className="container">
            <Header link={"back to home"} nav={'/'} message={`Details about ${pet.name}`}/>
            <button className='d-inline' type='button' onClick={deletepet}>Adopt {pet.name}</button>
            <div>
                <div className='col d-flex justify-content-evenly'>
                    <h1>Pet Type: </h1><p className='fs-3'>{pet.type}</p>
                </div>
                <div className='col d-flex justify-content-evenly'>
                    <h1>Description:</h1><p className='fs-3'>{pet.description}</p>
                </div>
                <div className='col d-flex justify-content-evenly align-items-center'>
                    <h1>Skills:</h1> 
                    <p>{pet.firstSkill}</p>
                    <p>{pet.secondSkill}</p>
                    <p>{pet.thirdSkill}</p>
                </div>
                {like === 0?
                <div className='d-flex justify-content-between'><button type = 'button' className='btn btn-primary' onClick={handleClick}>Like {pet.name}</button><p>{like}</p></div>: <div className='d-flex justify-content-between'><button className='btn btn-primary' disabled onClick={handleClick}>Like {pet.name}</button><p>{like}</p></div> }
            </div>
        </div>
    );
}
export default Pet;

