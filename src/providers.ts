import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * TODO: replace the mimic types whenever the packages are published
 *
 * import { Provider } from '@spryker-oryx/di';
 * import { ComponentMapping } from '@spryker-oryx/experience';
 */
const ComponentMapping = {};
type Provider = any;

export const componentsProvider: Provider = {
  provide: ComponentMapping,
  useValue: {
    ['bv-product-average-rating']: {
      template: (uid: string, layoutClasses?: string) =>
        html`<bv-product-average-rating
          uid="${uid}"
          class=${ifDefined(layoutClasses)}
        ></bv-product-average-rating>`,
    },

    ['bv-product-review-list']: {
      template: (uid: string, layoutClasses?: string) =>
        html`<bv-product-review-list
          uid="${uid}"
          class=${ifDefined(layoutClasses)}
        ></bv-product-review-list>`,
    },
  },
};
