import { AppFeature } from '@spryker-oryx/core';
import { productImageConverter } from './cloudinary';
import * as components from './components';
import { componentsProvider } from './providers';

export * from './components';

export const labsComponents = Object.values(components);

/**
 * The labs package provides demo features which are more less
 * in experimental state. The features are not production ready
 * and might even be broken as they're not thoroughly tested
 * and not covered with automated tests.
 */
export const labsFeature: AppFeature = {
  components: labsComponents,
  providers: [componentsProvider, productImageConverter],
};
