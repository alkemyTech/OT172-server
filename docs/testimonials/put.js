module.exports = {
  put: {
    summary: 'Update a testimony',
    tags: [
      'Testimonials'
    ],
    description: 'This method is used to update an testimony if it exist',
    produces: [
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
      description: 'ID of testimony to edit',
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
                msg: {
                  type: 'string',
                  default: 'Testimony updated'
                }
              }
            }
          }
        }
      },
      400: {
        description: 'Invalid data',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              description: 'Invalid data',
              default: { ok: false, msg: 'id must be a integer' }
            }
          }
        }
      },
      404: {
        description: 'Testimony not found',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              description: 'Testimony not found',
              default: { ok: false, msg: 'Testimony does\'nt exist' }
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
            $ref: '#/components/schemas/Testimony'
          }
        }
      }
    }
  }
}
