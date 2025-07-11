// services/api.js

import axios from 'axios'

export const health = () => axios.get('/api/health')



