// services/api.js
export const health = () => {
  return useAxios().get('/health')
}
