import VALIDATOR from '../type'
/**
 * array
 * 
 * @param error Error message to return when validation fails
 * @param schema Any validation function
 */
export const array = (error: string | boolean | boolean, schema?: any) => {  
  return (value: any) => {    
    if (value && typeof value === 'object' && value.constructor === Array) {
      if (schema) {
        for (let i = 0; i < value.length; i++) {      
          const hasError = schema(value[i])
  
          if (hasError) {
            return hasError
          }
        }
      }      
    } else {
      return error
    }

    return undefined
  }
}

array.type = VALIDATOR