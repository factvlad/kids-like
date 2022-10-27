import { useDispatch } from "react-redux";
import { useState } from "react";
import FormLogIn from "components/form-login/FormLogIn";
import { registerOperation, loginOperation } from "../../redux/auth/auth-operations"

const AuthorizationPage = () => {
  const [enterForm, setEnterForm] = useState('LogIn')

  const changeEnterFetch = ({ target }) => {
    const { name } = target
    setEnterForm(name)
  }
  const dispatch = useDispatch()

  const onSubmitForm = (data) => {
    if (enterForm === 'LogIn') {
      console.log(`login`);
      console.log(data);
      dispatch(loginOperation(data))
      return
    }
    console.log(`register`)
    console.log(data)
    dispatch(registerOperation(data))
  }
  return (
    <FormLogIn onSubmit={ onSubmitForm } changeFetch={ changeEnterFetch } />
  );
}

export default AuthorizationPage;
