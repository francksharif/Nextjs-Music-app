describe('Signup API', () => {
    it('should sign up successfully with unique username', () => {
      cy.request({
        method: 'POST',
        url: '/api/auth/signup',
        body: { username: `user${Date.now()}`, password: 'newpassword' }, // Nom unique pour éviter les doublons
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.success).to.eq(true);
      });
    });
  
    it('should fail if username already exists', () => {
      cy.request({
        method: 'POST',
        url: '/api/auth/signup',
        failOnStatusCode: false, 
        body: { username: 'user', password: 'test' },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.success).to.eq(false);
        expect(response.body.message).to.eq('Username already exists');
      });
    });
  });
  