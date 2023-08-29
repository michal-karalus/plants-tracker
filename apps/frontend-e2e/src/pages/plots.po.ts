export const plotsPage = {
  getPlots() {
    return cy.findAllByTestId('plot-item');
  },

  addPlot(name: string) {
    cy.contains('Add plot').click();
    cy.findByTestId('plot-name-input').type(name);
    cy.contains(/submit/i).click();
  },

  getAllPlotsName() {
    return cy.findAllByTestId('plot-name');
  },

  getLastPlotName() {
    return this.getAllPlotsName().last();
  },

  editPlot(name: string) {
    cy.contains(/edit plot/i).click();
    cy.findByTestId('plot-name-input').clear();
    cy.findByTestId('plot-name-input').type(name);
    cy.contains(/submit/i).click();
  },

  deletePlot() {
    cy.contains(/delete plot/i).click();
  },
};
