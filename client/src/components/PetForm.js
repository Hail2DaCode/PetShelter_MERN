import React, { useEffect, useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';


const PetForm = (props) => {
    const navigate= useNavigate();
    const {initialName, initialType, initialDescription, initialFirstSkill, initialSecondSkill, initialThirdSkill, message, onSubmitProp, errors} = props;
    const [name, setName] = useState(initialName);
    const [type, setType] = useState(initialType);
    const [description, setDescription] = useState(initialDescription);
    const [firstSkill, setFirstSkill] = useState(initialFirstSkill)
    const [secondSkill, setSecondSkill] = useState(initialSecondSkill)
    const [thirdSkill, setThirdSkill] = useState(initialThirdSkill);
    const [petList, setPetList] = useState([])
    const [disable, setDisable] = useState(false)
    // const [errors, setErrors] = useState([]);
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        // petList.map((pet, index) => {if (pet.name === name) {setDisable(true);
        //     console.log(disable);} })
                
        //make a post request to create a new Product
        onSubmitProp({name,type,description,firstSkill, secondSkill, thirdSkill});
    }
    
    return(
        <div className='container'>
            <Header link={"back to home"} nav={'/'} message={props.message}/>
            <div className="col">
                <form className='row' onSubmit={onSubmitHandler}>
                    <div className='col my-3'>
                    <label htmlFor="petname" className='form-label'>Pet Name:</label>
                    <input type='text' value={name} id="petname" name='petname' className='form-control' onChange={(e)=>setName(e.target.value)}/>
                    { errors.name? <p className='text-danger'>{errors.name.message}</p>:null}
                    <label htmlFor="pettype" className='form-label'>Pet Type:</label>
                    <input type='text' value={type} id="pettype" name='pettype' className='form-control' onChange={(e)=>setType(e.target.value)}/>
                    { errors.type? <p className='text-danger'>{errors.type.message}</p>:null}
                    <label htmlFor="petdescription" className='form-label'>Pet Description:</label>
                    <input type='text' value={description} id="petdescription" name='petdescription' className='form-control' onChange={(e)=>setDescription(e.target.value)}/>
                    { errors.description? <p className='text-danger'>{errors.description.message}</p>:null}
                    </div>
                    <div className='col my-3'>
                    <label htmlFor="firstSkill" className='form-label'>Skill 1:</label>
                    <input type='text' value={firstSkill} id="firstSkill" name='firstSkill' className='form-control' onChange={(e)=>setFirstSkill(e.target.value)}/>
                    <label htmlFor="secondskill" className='form-label'>Skill 2:</label>
                    <input type='text' value={secondSkill} id="secondskill" name='secondskill' className='form-control' onChange={(e)=>setSecondSkill( e.target.value)}/>
                    <label htmlFor="thirdskill" className='form-label'>Skill 3:</label>
                    <input type='text' value={thirdSkill} id="thirdskill" name='thirdskill' className='form-control' onChange={(e)=>setThirdSkill( e.target.value)}/>
                    </div>
                    <div className='d-block'>
                    <button type ='submit' className='btn btn-success mx-5' >Add Pet</button>   
                    </div>
                </form>
            </div>
        </div>
    )
}
export default PetForm;