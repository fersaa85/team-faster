import { required, confirmed, length, email } from "vee-validate/dist/rules";
import { extend } from "vee-validate";

extend("required", {
  ...required,
  message: "El campo es requerido"
});

extend("email", {
  ...email,
  message: "El campo debe ser un correo válido"
});

extend("confirmed", {
  ...confirmed,
  message: "Las contraseñas no son iguales"
});

// extend("min", value => {
//     ...min,
//     message: "Debe tener al menos "+value+" caracteres"
//   });
extend('min', {
    validate(value, { length }) {
      return value.length >= length;
    },
    params: ['length'],
    message: 'El {_field_} debe tener al menos {length} caracteres'
  });
extend('max', {
    validate(value, { length }) {
      return value.length <= length;
    },
    params: ['length'],
    message: 'El {_field_} debe tener máximo {length} caracteres'
});

extend("length", {
  ...length,
  message: "This field must have 2 options"
});