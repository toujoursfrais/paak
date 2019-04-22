
export const required = (errorMessage: string) => {
  return (value: any) => {
    if (value !== 'undefined') {
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