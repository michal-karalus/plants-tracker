describe('Plots', () => {
  beforeEach(() => {
    cy.exec('npm run db:seed');
    cy.visit('/');
  });

  it('should add plot', () => {
    const plotName = 'test plot';
    cy.contains('Add plot').click();
    cy.findByTestId('plot-name-input').type(plotName);
    cy.contains(/submit/i).click();
    cy.contains('Plots').click();
    cy.findAllByTestId('plot-name')
      .should('have.length', 2)
      .last()
      .then((plot) => {
        expect(plot.text().trim()).equal(plotName);
      });
  });
});
