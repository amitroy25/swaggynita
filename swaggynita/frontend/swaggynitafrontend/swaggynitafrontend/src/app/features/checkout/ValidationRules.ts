import * as yup from 'yup';



export const ValidationRules = [
    yup.object({
        firstName: yup.string()
                       .matches(/^[A-Za-z]+$/, "First name must contain only alphabets")
                      .required('Fist name is required'),
        lastName: yup.string()
                     .matches(/^[A-Za-z]+$/, "First name must contain only alphabets")
                     .required('Last name is required'),
        address1: yup.string().required('Address1 is required'),
        address2: yup.string().optional(),
        city: yup.string().required('City name is required'),
        state: yup.string().required('State name is required'),
        zip: yup.string()
                .matches(/^\d{6}$/, "ZIP code must be 6 digits")
                .required('Zip is required'),
        country: yup.string().required('Country name is required'),
    }),
    yup.object(),
    yup.object({
        cardName: yup.string()
                    .matches(/^[A-Z]+$/, " name must contain only capital alphabets")
                     .required(),
        cardNumber: yup.string().required("Card number is required")
                                .matches(/^\d{16}$/, "Card number must be 16 digits"),
        expDate: yup.string().required(),
        cvv: yup.string()
                .matches(/^\d{3}$/, "cvv code must be 3 digits")
                .required()
    })
]