module.exports = {
  put: {
    summary: 'Returns an edited user and new token',
    tags: [
      'Users'
    ],
    description: 'This method is used to update an user',
    produces: [
      'application/xml',
      'application/json'
    ],
    security: [
      {
        ApiKeyAuth: []
      }
    ],
    parameters: [{
      name: 'id',
      in: 'path',
      description: 'ID of member to edit',
      required: true,
      type: 'integer',
      format: 'int64'
    }],
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
                token: {
                  type: 'string',
                  default: 'ajfkjfafgsgSDGDSGsdfkgjsdjjfg'
                },
                user: {
                  type: 'object',
                  $ref: '#/components/schemas/User'
                }
              }
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
            $ref: '#/components/schemas/User'
          }
        }
      }
    }
  }
}
