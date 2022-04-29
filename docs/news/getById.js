module.exports = {
  get: {
    summary: 'Returns a specific new',
    tags: [
      'News'
    ],
    description: 'This method is used to show a particular new',
    parameters: [{
      name: 'id',
      in: 'path',
      description: 'ID of new to get',
      required: true,
      type: 'integer',
      format: 'int64'
    }],
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
                  $ref: '#/components/schemas/NewDetail'
                }
              }
            }
          }
        }
      },
      400: {
        description: 'Bad Request',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              description: 'Bad Request',
              default: { msg: 'id must be a number' }
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
