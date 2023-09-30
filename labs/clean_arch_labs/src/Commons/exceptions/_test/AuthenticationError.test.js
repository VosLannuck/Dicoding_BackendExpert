const AuthenticationError = require('../AuthenticationError');

describe('Authentications', () => {
  
  it('should return correct AuthenticationsError value', ()=> {
    
    const authentications = new AuthenticationError('authentication error!');
    
    expect(authentications.statusCode).toEqual(401);
    expect(authentications.name).toEqual('AuthenticationError');
    expect(authentications.message).toEqual('authentication error!');
  });

});

