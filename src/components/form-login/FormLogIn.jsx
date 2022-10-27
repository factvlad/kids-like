import useForm from "shared/hooks/useForm";
import TextFields from "shared/elemForm/text-field/TextFields";
import { initialState } from "./initialState";
import { fields } from "./fieldsSample";


const FormLogIn = ({ onSubmit, changeFetch }) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit })
    const { email, password } = state
    return (
        <form onSubmit={handleSubmit}>
            <TextFields name={email} onChange={handleChange}  {...fields.email} />
            <TextFields name={password} onChange={handleChange} {...fields.password} />
            <button type='submit' name="LogIn" onClick={changeFetch}>logIn</button>
            <button type='submit' name="Registration" onClick={changeFetch}>Registaration</button>
        </form>
    );
}

export default FormLogIn;