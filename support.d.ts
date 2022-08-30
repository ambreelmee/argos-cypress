declare namespace Cypress {
  interface Chainable {
    /**
     * Stabilize the UI and takes a screenshot of the application under test.
     *
     * @example
     *    cy.argosScreenshot("my-screenshot")
     *    cy.get(".post").argosScreenshot()
     */
    argosScreenshot: (
      name: string,
      options: Partial<Loggable & Timeoutable & ScreenshotOptions>
    ) => Chainable<null>;
  }
}
