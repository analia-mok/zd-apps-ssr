describe('test-app: Index component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=index--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to Index!');
  });
});
