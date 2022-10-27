import { useState } from "react";
import FormLogIn from "components/form-login/FormLogIn";

const AuthorizationPage = () => {
    const [enterForm, setEnterForm] = useState('LogIn')

    const changeEnterFetch = ({ target }) => {
        const { name } = target
        setEnterForm(name)
    }

    const onSubmitForm = (data) => {
        if (enterForm === 'LogIn') {
            console.log(`login`);
            console.log(data);
            return
        }
        console.log(`register`)
        console.log(data)
    }
    return (
        <FormLogIn onSubmit={onSubmitForm} changeFetch={changeEnterFetch} />
    );
}

export default AuthorizationPage;