import { TextField, ThemeProvider } from "@mui/material";
import { useContext, useId } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { ThemeContext } from "../contexts/ThemeContext";

/**
 * Email
 * Password
 * First Name
 * Last Name
 * DOB
 */

export const RegistrationForm = () => {
    
    // action (Where to submit the form)
    // method (POST, GET)

    const id = useId();
    const { register, handleSubmit, setError, formState: { errors } } = useForm();

    const { theme } = useContext(ThemeContext);

    

    const onSubmit = (data: FieldValues) => {
        // e.preventDefault(); // default behavior is to refresh the page

        if (data.email.length < 8) {
            setError('email', { message: 'Email Too Short' });
            return;
        }

        console.log(data);

        // Supply any logic here (submit data to some API, validate, etc.)
    }

    /**
     * {
     *   "name": 'first-name',
     *   "onChange": () => {},
     * 
     * }
     */

    const lastNameProps = register('first-name')

        /**
         * div {
         *   color: red;
         *   background-color: orange;
         * }
         */

    return (
        <form style={theme} onSubmit={handleSubmit(onSubmit)}>
            <div>
                {/* Casts to a boolean, if true, return the right. Else, return false */}
                {/* color: red */}
                {!!errors.email && <span className="form-error">{`${errors.email.message}`}</span>}
                <TextField
                    variant="outlined"
                    {...register('email', { required: 'Must Provide an Email' })}                    
                />
            </div>
            <label htmlFor={`first-name-${id}`}>First Name</label>
            <input
                id={`first-name-${id}`}
                {...register('firstName')}
                placeholder="First Name"
            />
            <button type="submit">Submit</button>
        </form>
    );
}