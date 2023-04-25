import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import PetForm from './PetForm';

const EditPet = (props) => {
    const {id} = useParams();
    const [pet, setPet] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/api/Pet/' + id)
            .then(res => {
                // setTitle(res.data.Title);
                // setPrice(res.data.Price);
                // setDescription(res.data.Description);
                console.log(res.data);
                setPet(res.data)
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [])
    const updatepet = (petParam) => {
        axios.put('http://localhost:8000/api/Pet/' + id, petParam)
            .then(res => {
                console.log(res);
                navigate("/"); // this will take us back to the Main.js
            })
            .catch(err => {console.log(err); (setErrors(err.response.data.errors));} )
    }
    return( <div>
        {loaded && <PetForm onSubmitProp = {updatepet} initialName = {pet.name} initialType={pet.type} initialDescription={pet.description} initialFirstSkill={pet.firstSkill} initialSecondSkill={pet.secondSkill} initialThirdSkill={pet.thirdSkill}  message={`Edit ${pet.name}`} errors={errors}/>}
    </div>
    )
}
export default EditPet;