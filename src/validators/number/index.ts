import VALIDATOR from '../type'

export const number = (error: string | boolean) => {
  return (value: any) => {
    if (!isNaN(Number(value))) {
      return undefined
    }

    return error
  } 
}
number.type = VALIDATOR