import * as yup from 'yup';

let formValidator = yup.object().shape({
    name: yup.string().required(),
    sector: yup.string().required(),
    terms: yup.bool().required(),
});

export default formValidator;