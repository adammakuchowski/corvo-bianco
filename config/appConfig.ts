const isLocal = process.env.NODE_ENV === 'development'

const config = {
  apiBaseUrl: isLocal ? 'http://localhost:8080' : 'https://corvo-bianco-api.azurewebsites.net',
}

export default config
