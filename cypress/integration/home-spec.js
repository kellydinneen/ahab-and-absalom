describe('Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should show title', () => {
    cy.get('header').find('.title').contains('Ahab & Absalom')
  })

  it('Should show logo', () => {
    cy.get('main').children().first().should('have.class', 'crowns')
  })

  it('Should show welcome message', () => {
    cy.get('main').find('.opening')
      .children().first().contains('We’re open!')
      .next().contains('Pop in')
  })

  it('Should show contact info and hours', () => {
    cy.get('main').find('.contact-info')
      .children().first().contains('Leadville, Colorado')
      .next().contains('122 E 7th St')
      .next().contains('(719) 293 - 2342')
      .next().contains('Open Thursday')
  })

  it('Should show about section on click', () => {
    cy.get('main').find('.about-header').click()
    cy.get('main').find('.about').should('be.visible')
    cy.get('main').find('.about-header').click()
    cy.get('main').find('.about-header')
      .next().should('have.class', 'contact-info')
  })

});
