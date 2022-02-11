const EnvironmentConfig = {
    apiUrl: process.env.REACT_APP_PIPEFY_API_URL || '',
    apiToken: `Bearer ${process.env.REACT_APP_PIPEFY_API_TOKEN || ''}`
}

export default EnvironmentConfig