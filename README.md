# paak
[![Build Status](https://travis-ci.org/minnam/paak.svg?branch=master)](https://travis-ci.org/minnam/paak)
[![Coverage Status](https://coveralls.io/repos/github/minnam/paak/badge.svg?branch=master)](https://coveralls.io/github/minnam/paak?branch=master)
## Getting Started
```
  npm i paak
```

## Examples
### Front-end (React-form)
```javascript
import { v } from 'paak'

class SomeComponent extends React.component {
  render () {
    return (
        <SomeField 
          label='First Name'
          name='firstName'
          validate={[
            v.string('First name must be a text'),
            v.required('First name is required'),
          ]}
        />    
    )    
  }
}
```

### Back-end (Express/Router/Middleware)
In this example, we are using **paak** to validate body in REST API. 
#### some-router.js
```javascript
import { v, n, validate } from 'paak'

// schema for this specific route
const schemaForSomeRoute = {
  firstName: [
    v.string('First name must be a text'),
    v.required('First name is required'),
    n.trim()
  ],
  lastName: [
    v.string('Last name must be a text'),
    v.required('Last name is required'),
    n.trim()
  ],
  interests: [
    v.array(
      'Interest must be a collection',
      v.object({
        name: [
          v.string('Name of an interest must be a string')
        ]
      })
    )
  ]
}

export const validateBody = (schema: any) => {
  return async (req: Request, res: Response, next: Function) => {
    
    // will return undefined if there is no error
    const hasError = validate(req.body, schema)
  
    if (hasError) {
      res.status(400).json({ error: hasError })
    } else {
      next()
    }    
  }
}

router.route('/')
  .post(
    validateBody(schemaForSomeRoute),
    SomeController.create
  )
```
