describe("All test", () => {
  it("open the home page and checks all menu item is highlighted", () => {
    cy.visit("http://localhost:3001/");
    cy.get(".btn-focus").contains("All");
  });

  it("renders list of valid card items", () => {
    cy.get(".cardItem", { timeout: 40000 })
      .children()
      .eq(0)
      .should("have.class", "cardImage");
    cy.get(".cardItem").children().eq(1).should("have.class", "cardTitle");
    cy.get(".cardItem").children().eq(2).should("have.class", "cardPrice");
  });

  it("clicks item and new tab is opened", () => {
    cy.window().then((win) => {
      cy.stub(win, "open");
      cy.get(".cardItem").first().click();
      cy.window().its("open").should("be.called");
    });
  });
});
