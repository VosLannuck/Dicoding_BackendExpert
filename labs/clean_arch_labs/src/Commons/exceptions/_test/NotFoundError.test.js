const NotFoundError = require('../NotfoundError');

describe('NotFoundError', ()=> {
  
  it('should have correct initialization', ()=> {
    const notFoundError = new NotFoundError('not found!');

    expect(notFoundError.statusCode).toEqual(404);
    expect(notFoundError.name).toEqual('NotFoundError');
    expect(notFoundError.message).toEqual('not found!');

  });
});
