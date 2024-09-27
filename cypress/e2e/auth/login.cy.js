describe('Login API', () => {
  it('should log in successfully with valid credentials', () => {
    cy.request({
      method: 'POST',
      url: '/api/auth/login',
      body: { username: 'user', password: 'test' },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.success).to.eq(true);
      expect(response.body.userId).to.exist;
    });
  });

  it('should fail to log in with invalid credentials', () => {
    cy.request({
      method: 'POST',
      url: '/api/auth/login',
      failOnStatusCode: false,
      body: { username: 'wronguser', password: 'wrongpassword' },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.success).to.eq(false);
      expect(response.body.message).to.eq('Invalid username or password');
    });
  });
});
