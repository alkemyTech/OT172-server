module.exports = {
  post: {
    summary: 'Create a entrie type news',
    tags: [
      'News'
    ],
    description: 'This method is used create a entrie type new',
    produces: [
      'application/json'
    ],
    security: [
      {
        ApiKeyAuth: []
      }
    ],
    responses: {
      201: {
        description: 'created',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  default: 'created'
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
    },
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            default: { message: 'created' }
          }
        }
      }
    }
  }
}
