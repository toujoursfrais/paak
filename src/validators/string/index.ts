import VALIDATOR from '../type'

export const string = (error: string | boolean | boolean) => {
  return (value: any) => {
    if (value && typeof value === 'string') {    
      return undefined
    }
    return error
  }
}
string.type = VALIDATOR

export const regex = (error: string | boolean, regex: RegExp) => {
  return (value: any) => {
    if (regex.test(value)) {
      return undefined
    }
    return error
  }
}
regex.type = VALIDATOR

export const email = (error: string | boolean) => {
  return regex(error, /^[A-Z0-9'._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
}
email.type = VALIDATOR

export const mongodbId = (error: string | boolean) => {
  return regex(error, /^[0-9a-fA-F]{24}$/)
}
mongodbId.type = VALIDATOR

export const phone = (error: string | boolean) => {
  return regex(error, /^\d{3}[-]{1}\d{3}[-]{1}\d{4}$/i)
}
phone.type = VALIDATOR