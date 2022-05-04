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
            type: 'integer',
            format: 'int64',
            readOnly: true
          },
          firstName: {
            type: 'string',
            format: 'string',
            default: 'UsuarioName'
          },
          lastName: {
            type: 'string',
            format: 'string',
            default: 'UsuarioApellido'
          },
          email: {
            type: 'string',
            format: 'email',
            default: 'test@test.com'
          },
          image: {
            type: 'string',
            format: 'string',
            default: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png'
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
            default: 'admin@test.com'
          },
          password: {
            type: 'string',
            format: 'password',
            default: '123456'
          }
        }
      },
      Member: {
        type: 'object',
        required: [
          'name'
        ],
        properties: {
          id: {
            type: 'integer',
            format: '$int64',
            readOnly: true
          },
          name: {
            type: 'string',
            format: 'string',
            default: 'Member Name'
          },
          image: {
            type: 'string',
            format: 'string',
            default: 'https://www.fom78.com.ar/img/category/github.svg'
          },
          createdAt: {
            type: 'date',
            format: 'date',
            readOnly: true,
            default: Date()
          },
          updatedAt: {
            type: 'date',
            format: 'date',
            readOnly: true,
            default: Date()
          }
        }
      },
      Register: {
        type: 'object',
        required: [
          'email',
          'password'
        ],
        properties: {
          firstName: {
            type: 'string',
            format: 'string',
            default: 'UsuarioName'
          },
          lastName: {
            type: 'string',
            format: 'string',
            default: 'UsuarioApellido'
          },
          email: {
            type: 'string',
            default: 'user@test.com'
          },
          password: {
            type: 'string',
            format: 'password',
            default: '123456'
          }
        }
      },
      New: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            format: 'string',
            default: 'New Name'
          },
          image: {
            type: 'string',
            format: 'string',
            default: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          },
          createdAt: {
            type: 'date',
            format: 'date',
            readOnly: true,
            default: Date()
          }
        }
      },
      NewDetail: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: '$int64',
            readOnly: true
          },
          name: {
            type: 'string',
            format: 'string',
            default: 'New Name'
          },
          type: {
            type: 'string',
            format: 'string',
            default: 'news'
          },
          image: {
            type: 'string',
            format: 'string',
            default: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          },
          categoryId: {
            type: 'integer',
            format: '$int64',
            default: 1
          },
          createdAt: {
            type: 'date',
            format: 'date',
            readOnly: true,
            default: Date()
          },
          updatedAt: {
            type: 'date',
            format: 'date',
            readOnly: true,
            default: Date()
          },
          deletedAt: {
            type: 'date',
            format: 'date',
            allowNull: true
          }
        }
      },
      Testimony: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            default: 'Primer Testimonio'
          },
          image: {
            type: 'string',
            default: 'https://www.alkemy.org/static/media/meli.a0e74e85.svg'
          },
          content: {
            type: 'string',
            default: 'Contenido Primer Testimonio'
          }
        }
      }
    }
  }
}
