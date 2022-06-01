const response = {
  statusCode: 200,
  endpoint: 'GET /api/v1/dummies',
  body: {
    message: 'Hello World',
    data: [
      { id: 1, name: 'Andre', age: 20 },
      { id: 2, name: 'Bella', age: 21 },
      ,
   ],
  },
  totalData: 100,
  responseTime: '1506ms'
};

console.log(response);
