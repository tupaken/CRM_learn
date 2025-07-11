const corsConfig = {
    enabled: true,
    origin: [
      'http://localhost:8000',
      'http://127.0.0.1:8000'
    ],
    methods: ['GET','POST','PUT','DELETE','OPTIONS'],
    headers: true,
    exposeHeaders: ['Content-Disposition'],
    credentials: true,
  };
  

  