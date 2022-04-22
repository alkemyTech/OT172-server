module.exports = {
  post: {
    summary: 'Returns a logged user and token',
    tags: [
      'Users'
    ],
    description: 'This method is used to login',
    produces: [
      'application/xml',
      'application/json'
    ],
    responses: {
      200: {
        description: 'correct operation',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/UserWithToken'
            }
          }
        }
      },
      400: {
        description: 'User already in use',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              description: 'User already in use',
              default: { ok: false, msg: 'Email <email> already in use' }
            }
          }
        }
      },
      401: {
        description: 'User provided wrong credentials',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              description: 'User provided wrong credentials',
              default: { ok: false, msg: 'User provided wrong credentials' }
            }
          }
        }
      },
      404: {
        description: 'User does not exist',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              description: 'Usuario o pass incorrectos',
              default: { ok: false, msg: 'User does not exist' }
            }
          }
        }
      },
      500: {
        description: 'Internal error',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              description: 'Internal error',
              default: { ok: false, error: 'internal message send' }
            }
          }
        }
      }
    },
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Login'
          }
        }
      }
    }
  }
}
