import VALIDATOR from '../type'

/**
 * date
 * 
 * @param error Error mesasge to return when validation fails
 */
export const date = (error: string | boolean) => {
  return (value: any) => {
    if (new Date(value).toDateString() !== 'Invalid Date') {
      return undefined
    }

    return error
  }
}
date.type = VALIDATOR