module.exports = {
  components: {
    parameters: {
      sortParam: {
        name: 'sort',
        in: 'query',
        description: ' ordenacion',
        example: '+fecha -nombre',
        schema: {
          type: 'string'
        }
      },
      limitParam: {
        name: 'limit',
        in: 'query',
        description: 'número de resultados a obtener',
        example: 50,
        schema: {
          type: 'integer'
        }
      },
      skipParam: {
        name: 'skip',
        in: 'query',
        description: 'número de resultados desde el que partir',
        example: 0,
        schema: {
          type: 'integer'
        }
      },
      page: {
        name: 'page',
        in: 'query',
        description: ' numero de pagina',
        example: 0,
        schema: {
          type: 'number'
        }
      },
      pageSize: {
        name: 'pageSize',
        in: 'query',
        description: 'Cantidad por pagina',
        example: 10,
        schema: {
          type: 'number'
        }
      }
    },
    securitySchemes: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'x-access-token'
      }
    },
    schemas: {
      User: {
        type: 'object',
        required: [
          'email',
          'password'
        ],
        properties: {
          id: {
            type: 'string',
            format: 'uuid',
            readOnly: true
          },
          password: {
            type: 'string',
            format: 'password',
            default: '123456'
          },
          email: {
            type: 'string',
            format: 'email',
            default: 'test@test.com'
          },
          role: {
            type: 'array',
            items: {
              type: 'string',
              enum: [
                'Admin',
                'Standard'
              ],
              description: 'id del rol asignado'
            }
          }
        }
      },
      Login: {
        type: 'object',
        required: [
          'email',
          'password'
        ],
        properties: {
          email: {
            type: 'string',
            default: 'test@test.com'
          },
          password: {
            type: 'string',
            format: 'password',
            default: '123456'
          }
        }
      },
      UserWithToken: {
        allOf: [{
          $ref: '#/components/schemas/User'
        },
        {
          type: 'object',
          properties: {
            token: {
              type: 'string',
              default: ''
            }
          }
        }
        ]
      }
    }
  }
}
