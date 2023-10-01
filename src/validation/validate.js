import * as Yup from "yup"

Yup.setLocale({
    mixed: {
        required: "Don't forget to complete this field."
    },
    string: {
        email: "Please enter a valid email address."
    }
})

export default Yup