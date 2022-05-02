module.exports = {
  get: {
    summary: 'Returns all all users, only admin user',
    tags: [
      'Users'
    ],
    description: 'This method is used to show all the users',
    produces: [
      'application/json'
    ],
    security: [
      {
        ApiKeyAuth: []
      }
    ],
    responses: {
      200: {
        description: 'correct operation',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                news: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/User'
                  }
                }
              }
            }
          }
        }
      },
      403: {
        description: 'Token is missing',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              description: 'Token is missing',
              default: { msg: 'Token is missing' }
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
    }
  }
}
