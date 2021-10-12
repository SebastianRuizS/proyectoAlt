import LogOutHeader from './Headers/LogOutHeader';
import LogInHeader from './Headers/LogInHeader';
import React, {useState} from 'react';


const GeneralHeader = () => {
    const [logged, setLogged] = useState(false);

    const logIn = () => {
        setLogged(true);
    };

    const logOut = () => {
        setLogged(false);
    };

    if(logged){
        return(
            <LogInHeader logOut = {logOut}/>
        );
    }else{
        return(
            <LogOutHeader logIn = {logIn} />
            );
    }
}



export default GeneralHeader;