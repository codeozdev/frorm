import "./App.css";
import {useState} from "react";

function App() {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const [submit, setSubmit] = useState(false)
    const [valid, setValid] = useState(false)

    const handleFirstName = (e) => {
        setValues({...values, firstName: e.target.value});
    };

    const handleLastName = (e) => {
        setValues({...values, lastName: e.target.value});
    };

    const handleEmail = (e) => {
        setValues({...values, email: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (values.firstName && values.lastName && values.email) {
            setValid(true)
        }
        setSubmit(true)
    }

    return (
        <div className="container">
            <form className={"container-form"} onSubmit={handleSubmit}>
                {submit && valid ? <h5>Thank you for register</h5> : null}
                <input
                    type="text"
                    value={values.firstName}
                    onChange={handleFirstName}
                    placeholder={"First Name"}
                />
                {submit && !values.firstName ? <span>Please enter your name</span> : null}
                <input
                    type="text"
                    value={values.lastName}
                    onChange={handleLastName}
                    placeholder={"Last Name"}
                />
                {submit && !values.lastName ? <span>Please enter your lastname</span> : null}
                <input
                    type="text"
                    value={values.email}
                    onChange={handleEmail}
                    placeholder={"Email"}
                />
                {submit && !values.email ? <span>Please enter your lastname</span> : null}
                <button>Register</button>
            </form>
        </div>
    );
}

export default App;