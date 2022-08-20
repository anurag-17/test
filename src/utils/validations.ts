import { toast } from "react-toastify";

//patterns for validations
// const emailPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// const phonePattern = /^[0-9]{10}$/;
// const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// const namePattern = /^[a-zA-Z]+$/;
// const numberPattern = /^[0-9]+$/;
// const alphaNumericPattern = /^[a-zA-Z0-9]+$/;
// const alphaNumericSpacePattern = /^[a-zA-Z0-9 ]+$/;
// const alphaNumericSpaceDashPattern = /^[a-zA-Z0-9-]+$/;
// const alphaNumericSpaceDashUnderscorePattern = /^[a-zA-Z0-9-_]+$/;
// const alphaNumericSpaceDashUnderscoreSpacePattern = /^[a-zA-Z0-9-_ ]+$/;
// c
export const patterns = {
  name: /[^a-zA-Z\s]/g,
  // phone: /^(\s*-?\d+(\.\d+)?)(\s*,\s*-?\d+(\.\d+)?)*$/,
  // phone: /^(\+|0)\d{10}$/,
  phone: /\D/g,

  decimal: /^(\d+(\.\d{3}))?$/,
  measurement: /[^0-9.]?$/,
  text:/[^a-zA-Z0-9\s-]+$/,
  textAndCharacters:/[^a-zA-Z\s-.]+$/
}

// check if form input fields are empty
export const isEmptyFormFiled = (objects: Record<string, any>) => {
  const value = Object.values(objects).includes("");
  return value;
};

export const validate = {
  isEmptyFormFiled: (objects: Record<string, any>) => {
    const value = Object.values(objects).includes("");
    return value;
  },
  isValidNotEmail: (value: string) => {
    const EMAIL_PATTERN =
      /* eslint-disable-next-line */
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!EMAIL_PATTERN.test(value && value.trim())) {
      return toast.error("Invalid email address!");
    }
  },
}

export const validateInput = (type: string, value:string, required=false) => {
  // if (type?.trim() === 'phone') {
  //   const numberPhone = patterns.phone;
  //   if (
  //     (numberPhone.test(value) && value !== '') ||
  //     (value.length < 11 && value.length > 15)
  //   ) {
  //    return value + ' is not a valid phone number'
  //   }
  // }

  if (type?.trim() === 'phone') {
    const numberPhone = patterns.phone;
    if (!numberPhone.test(value.trim())) {
     return 'Inavlid Phone Number';
    }else if ( value.length  < 10) {
      return 'phone number is too short';
    }else {
      return '';
    }
  }

  if (type?.trim() === 'email') {
    const mail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!mail.test(value.trim())) {
     return 'Please enter a valid email';
    }
  }

  if (value === '' && required === true) {
    return 'This field is required';
}



if (type?.trim() === 'name') {
  const name = /[^a-zA-Z\s]/g;
  if (name.test(value.trim())) {
   return 'is not a valid name (only letters)';
  }else if ( value.length  > 150) {
    return 'name is too long';
  }else {
    return '';
  }
}

if (type?.trim() === 'city') {

  if (patterns?.text?.test(value.trim())) {
   return 'is not a valid city name';
  }else if ( value.length  > 30) {
    return 'name is too long';
  }else {
    return '';
  }
}

if (type?.trim() === 'state') {
  if (patterns?.text?.test(value.trim())) {
   return 'is not a valid state name';
  }else if ( value.length  > 30) {
    return 'name is too long';
  }else {
    return '';
  }
}

if (type?.trim() === 'country') {
  if (patterns?.text?.test(value.trim())) {
   return 'is not a valid country';
  }else if ( value.length  > 30) {
    return 'name is too long';
  }else {
    return '';
  }
}

if (type?.trim() === 'postalCode') {
  if (patterns?.text?.test(value.trim())) {
   return 'is not a valid postal code';
  }else if ( value.length  > 7) {
    return 'postal code is too long';
  }else {
    return '';
  }
}

if (type?.trim() === 'text') {
  const name = patterns.text;
  if (name.test(value.trim())) {
   return 'is not a valid name';
  }else if ( value.length  > 30) {
    return 'name is too long';
  }else {
    return '';
  }
}

if (type?.trim() === 'address') {
  const name = patterns.text;
  if (name.test(value.trim())) {
   return 'is not a valid valid address';
  }else if ( value.length  > 255) {
    return value + ' adress is too long';
  }else {
    return '';
  }
}

if (type?.trim() === 'displayName') {
  const name = /[^a-zA-Z\s0-9]/g;
  if (name.test(value.trim())) {
   return 'is not a valid name';
  }else if ( value.length  > 30) {
    return 'name is too long';
  }else {
    return '';
  }
}



if (type?.trim() === 'height') {
  const name = patterns.decimal;
  if (name.test(value.trim())) {
   return 'not a valid height';
  }else if ( value.length  > 5) {
    return 'height should be less than 5 numbers';
  }else {
    return '';
  }
}

if (type?.trim() === 'weight') {
  const name = patterns.decimal;
  if (name.test(value.trim())) {
   return 'not a valid weight';
  }else if ( value.length  > 5) {
    return 'weight should be less than 5 numbers';
  }else {
    return '';
  }
}
}

// removeObjectKey
export const removeObjectKey = (object: Record<string, any>, key: string) => {
  const { [key]: deletedKey, ...newObject } = object;
  return newObject;
}

export const removeObjectKeys = (object: Record<string, any>, keys: string[]) => {
  const newObject = keys.reduce((acc, key) => {
    const { [key]: deletedKey, ...newObject } = acc;
    return newObject;
  }, object);
  return newObject;
}

//validations   


