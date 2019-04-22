import VALIDATOR from '../type'

export const validate = (body: any, schema: any, error: string | boolean): any => {
  for (const key in schema) {    
    let hasError

    const bodyArray = Object.keys(body)
    const schemaArray = Object.keys(schema)
    const bodySchemaDiff = bodyArray.filter((value: string) => { return schemaArray.indexOf(value) < 0 })

    if (bodySchemaDiff.length > 0) {
      return `${error} (${bodySchemaDiff.toString()})`
    }
        

    if (Object.prototype.toString.call(schema[key]) === '[object Object]') {
      hasError = validate(body[key], schema[key], error)
    } else {
      for (let i = 0; i < schema[key].length; i++) {        
        hasError = schema[key][i](body[key])
        if (hasError) {
          return `${hasError}`
        }
      }      
    }
    
    if (hasError) {
      return `${hasError}`
    }
  }
}

export const object = (error: string | boolean, schema: any) => {  
  return (value: any) => {    

    if (Object.prototype.toString.call(value) !== '[object Object]') {
      return `${error}`
    }

    error = validate(value, schema, error)

    if (error) {
      return error
    }

    return error
  }
}
object.type = VALIDATOR