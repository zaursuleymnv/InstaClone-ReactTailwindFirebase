import Yup from "./validate"

export const RegisterSchema = Yup.object().shape({
    email: Yup.string()
        .required()
        .email(),
    full_name: Yup.string()
        .required(),
    username: Yup.mixed()
        .required()
        .test({
            message: 'Username must consist of alphanumeric characters and underscores only.',
            test: str => /^[a-z0-9._]+$/i.test(str)
        }),
    password: Yup.string()
        .required()
})