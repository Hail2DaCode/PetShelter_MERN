import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PetForm from './PetForm';
import { useNavigate  } from 'react-router-dom';

const NewPet = (props) => {
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const createPet = petParam => {
        axios.post('http://localhost:8000/api/Pet', petParam)
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigate('/')

            })
            .catch((err)=>{console.log(err); return (setErrors(err.response.data.errors));})
    }
    return(
        <PetForm onSubmitProp = {createPet} initialName = ""  initialType="" initialDescription="" initialFirstSkill="" initialSecondSkill="" initialThirdSkill="" message = "Know a pet needing a Home" errors={errors}/>
    )
}
export default NewPet;