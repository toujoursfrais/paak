import NORMALIZER from './type'
/**
 * phone
 * 
 * @param value to be normalized as phone number
 */
export const phone = (value: String) => {
  if (!value) {
    return value
  }

  const onlyNums = value.replace(/[^\d]/g, '')
  if (onlyNums.length <= 3) {
    return onlyNums
  }
  if (onlyNums.length <= 7) {
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`
  }
  return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 6)}-${onlyNums.slice(6, 10)}`
}
phone.type = NORMALIZER

/**
 * time
 * 
 * @param value to be normalized as time (hh:mm)
 */
export const time = (value: String) => {
  if (!value) {
    return value
  }

  const onlyNums = value.replace(/[^\d]/g, '')
  if (onlyNums.length <= 2) {
    return onlyNums
  }

  if (onlyNums.length <= 4) {
    return `${onlyNums.slice(0, 2)}:${onlyNums.slice(2)}`
  }
}
time.type = NORMALIZER

// /**
//  * 
//  * @param value to be trimmed
//  */
// export const trim = (value: any) => {

// }