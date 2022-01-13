import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand({
  failureThreshold: 0.05,
  failureThresholdType: 'percent',
  customDiffConfig: {threshold: 0.1},
  capture: 'viewport'
})

Cypress.Commands.overwrite('matchImageSnapshot', (originalFn, snapshotName, options) => {
  if (Cypress.env('COMPARE_IMAGE_SNAPSHOTS')) {
    originalFn(snapshotName, options)
  } else {
    cy.log('snapshot matching is disabled')
  }
})
