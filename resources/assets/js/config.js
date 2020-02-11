let baseUrl = ''
if (process.env.NODE_ENV === 'production') {
   baseUrl = 'http://yourdomain.com/api/';
}
else {
   baseUrl = 'http://localhost/projects/mps_erp/api/';
}

export const apiHost = baseUrl
