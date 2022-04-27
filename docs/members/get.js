module.exports = {
  get: {
    summary: 'Returns all members',
    tags: [
      'Members'
    ],
    description: 'This method is used to show al members',
    produces: [
      'application/xml',
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
                ok: {
                  type: 'boolean',
                  default: true
                },
                members: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Member'
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
