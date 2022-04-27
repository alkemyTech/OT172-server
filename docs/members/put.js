module.exports = {
  put: {
    summary: 'Returns a members was created',
    tags: [
      'Members'
    ],
    description: 'This method is used create a new member',
    parameters: [{
      name: 'id',
      in: 'path',
      description: 'ID of member to edit',
      required: true,
      type: 'integer',
      format: 'int64'
    }],
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
                message: {
                  type: 'string',
                  default: 'Member updated successfully!'
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
            $ref: '#/components/schemas/Member'
          }
        }
      }
    }
  }
}
