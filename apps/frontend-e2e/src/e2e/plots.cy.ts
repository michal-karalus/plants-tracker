import { faker } from '@faker-js/faker';

import { plotsPage } from '../pages/plots.po';

describe('Plots', () => {
  beforeEach(() => {
    cy.exec('npm run db:seed');
    cy.visit('/');
  });

  it('should add plot', () => {
    const plotName = faker.lorem.sentence();
    plotsPage.getPlots().then((plots) => {
      plotsPage.addPlot(plotName);
      cy.location('pathname').should('match', /plot\/\d+/);
      cy.contains('Plots').click();
      plotsPage
        .getAllPlotsName()
        .should('have.length', plots.length + 1)
        .last()
        .then((plot) => expect(plot.text().trim()).equal(plotName));
    });
  });

  it('should edit plot', () => {
    const plotEditedName = faker.lorem.sentence();
    plotsPage.editPlot(plotEditedName);
    plotsPage
      .getLastPlotName()
      .then((plotName) => expect(plotName.text().trim()).equal(plotEditedName));
  });

  it('should delete plot', () => {
    plotsPage.getPlots().then((plots) => {
      plotsPage.deletePlot();
      plotsPage.getPlots().should('have.length', plots.length - 1);
    });
  });
});
