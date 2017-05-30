var customizations = {}
switch (process.env.NODE_ENV) {
  case 'staging':
    customizations = {
      message: 'Staging'
    }
    break
  case 'production':
    customizations = {
      message: 'Production'
    }
    break
  default:
    customizations = {
      message: 'Development'
    }
    break
}

export default {
  port: 3000,
  bodyLimit: '100kb',
  BUILD_TIMESTAMP: process.env.BUILD_TIMESTAMP || new Date().toString(),
  ...customizations,
}
