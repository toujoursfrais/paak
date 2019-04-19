export const validate = (body: any, schema: any): any => {
  for (const key in body) {
    if (schema[key]) {      
      let hasError

      if (Object.prototype.toString.call(schema[key]) === '[object Object]') {
        hasError = validate(body[key], schema[key])
      } else {
        for (let i = 0; i < schema[key].length; i++) {        
          hasError = schema[key][i](body[key])
          if (hasError) {
            return hasError
          }
        }      
      }
      
      if (hasError) {
        return hasError
      }
    }
  }
}

export const mongodbId = (errorMessage: string) => {
  return (value: any) => {
    if (value && typeof value === 'string') {
      if (value.match(/^[0-9a-fA-F]{24}$/)) {
        return undefined
      }
      return errorMessage
    }
    return errorMessage
  }
}

export const string = (errorMessage: string, allowNull: boolean = false) => {
  return (value: any) => {
    if (value && typeof value === 'string') {
      return undefined
    }
    return errorMessage
  }
}

export const required = (errorMessage: string) => {
  return (value: any) => {
    if (value !== 'undefined') {
      return undefined
    }
    return errorMessage
  }
}

export const email = (errorMessage: string) => {
  return (value: any) => {
    if (/^[A-Z0-9'._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return undefined
    }
    return errorMessage
  }
}

export const object = (errorMessage: string, schema: any) => {  
  return (value: any) => {    

    if (Object.prototype.toString.call(value) === '[object Object]') {
      return errorMessage
    }

    errorMessage = validate(value, schema)

    if (errorMessage) {
      return errorMessage
    }

    return errorMessage
  }
}

export const array = (errorMessage: string, schema: any) => {  
  return (value: any) => {    
    if (value && typeof value === 'object' && value.constructor === Array) {
      for (let i = 0; i < value.length; i++) {        
        const hasError = schema(value[i])
        if (hasError) {
          return hasError
        }
      }
    }

    return errorMessage
  }
}

export const date = (errorMessage: string) => {
  return (value: any) => {
    if (new Date(value).toDateString() !== 'Invalid Date') {
      return undefined
    }

    return errorMessage
  }
}

export const max = (errorMessage: string, length: number) => {
  return (value: string | []) => {
    if (value.length <= length) {
      return undefined
    }

    return errorMessage
  }
}

export const min = (errorMessage: string, length: number) => {
  return (value: string | []) => {
    if (value.length >= length) {
      return undefined
    }

    return errorMessage
  }
}

export const number = (errorMessage: string) => {
  return (value: any) => {
    if (!isNaN(Number(value))) {
      return undefined
    }

    return errorMessage
  } 
}

export const phone = (errorMessage: string) => {
  return (value: string) => {
    if (/^\d{3}[-]{1}\d{3}[-]{1}\d{4}$/i.test(value)) {
      return undefined
    }
    return errorMessage
  }
}