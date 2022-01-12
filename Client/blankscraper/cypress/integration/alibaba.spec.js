describe("Alibaba test", () => {
  it("open the alibaba page and checks alibaba menu item is highlighted", () => {
    cy.visit("http://localhost:3001/alibabascraper");
    cy.get(".btn-focus").contains("Alibaba");
  });

  it("renders list of valid card items", () => {
    cy.get(".cardItem", { timeout: 10000 })
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
