import * as array from './validators/array'
import * as common from './validators/common'
import * as date from './validators/date'
import * as object from './validators/object'
import * as string from './validators/string'

import * as n from './normalizers'

export const paak = {
  v: {
    array,
    common,
    date,
    object,
    string,
  },
  n,
  validate: object.validate
}