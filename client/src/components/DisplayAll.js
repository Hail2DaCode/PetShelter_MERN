import React, {useState, useEffect, } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
const PetList = (props) => {
    /* We deconstruct getter and setter which were passed down 
    via props by the parent component (app.js) to our child 
    component (PetList.js). Now we can easily use the getter 
    and setter without having to write props.getter or props.setter every time: */
    // const {removeFromDOM, Author, setAuthor} = props;
    const [petList, setPetList] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/Pet")
    	.then((res)=>{
	    console.log(res.data);
            setPetList(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])
    return (
        <div className = "container">
            <Header link = {"add a pet to the pet shelter"} nav={'pets/new'} message={"These pets are looking for a good home"}/>
            <table className='table'>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
                </thead>
                
                <tbody>
                {petList.sort(((a,b)=> {if (a.type > b.type) {
    return 1;
  }
  if (a.type < b.type) {
    return -1;
  }
  return 0;
})).map((pet,index) => 
                <tr key={index} id={pet.name}><td>{pet.name}</td>
                <td>{pet.type}</td>
                <td className='d-flex justify-content-between'>
                    <Link to={`/pets/${pet._id}`}>details</Link>
                    <Link to={`/pets/${pet._id}/edit`}>edit</Link>
                </td>
                </tr> )
}
                </tbody>
            </table>
        </div>
    )
}
export default PetList;

