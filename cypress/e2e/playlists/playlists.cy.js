describe('Playlists API', () => {
    const userId = 1727228845418; 
    it('should get all playlists for a user', () => {
      cy.request(`/api/playlists/${userId}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array'); 
      });
    });


    it('should create a new playlist for the user', () => {
        const newPlaylistName = `My Playlist ${Date.now()}`;
        cy.request({
          method: 'POST',
          url: `/api/playlists/${userId}`,
          body: { playlistName: newPlaylistName },
        }).then((response) => {
          expect(response.status).to.eq(201);
          expect(response.body.name).to.eq(newPlaylistName);
        });
      });



      it('should delete an existing playlist', () => {
        const playlistId = 1; 
        cy.request({
          method: 'DELETE',
          url: `/api/playlists/${userId}`,
          body: { playlistId: '1' },
        }).then((response) => {
          expect(response.status).to.eq(204); 
        });
      });
})