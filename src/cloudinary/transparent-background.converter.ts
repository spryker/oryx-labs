/**
 * TODO: replace the mimic types whenever the packages are published
 *
 * import { Provider } from '@spryker-oryx/di';
 * import {
 *   ApiProductModel,
 *   DefaultProductMediaNormalizer,
 *   Size,
 * } from '@spryker-oryx/product';
 */
module ApiProductModel {
  export type Image = any;
}
type Provider = any;

export const enum Size {
  Xs = 'xs',
  Sm = 'sm',
  Md = 'md',
  Lg = 'lg',
  Xl = 'xl',
}

/**
 * Cloudinary provides an http API that can be used to _fetch_ remote resource and enable on-the-fly
 * transformation. The transformed image got distributed on the Cloudinary CDN.
 *
 * The CLOUDINARY_ID is required to resolve images from Cloudinary. You can use a free plan to resolve images
 * in non-production environments.
 */
const fetchUrl = `https://res.cloudinary.com/${
  (<any>import.meta).env.ORYX_CLOUDINARY_ID
}/image/fetch/`;

/**
 * Simple product image convertor that takes the large product image and assigns it to different image formats.
 * This provides:
 * - optimized images size (eg. xs, sm, lg)
 * - optimized image formats (typically using webP)
 * - transparent image backgrounds
 * - distributed images (no network latency)
 */
export const productImageConverter: Provider = {
  provide: 'oryx.ProductMediaNormalizer*Default',
  useValue: (image: ApiProductModel.Image) => {
    return {
      [Size.Xs]: `${fetchUrl}/e_bgremoval/w_100,f_auto/${
        image.externalUrlSmall ?? image.externalUrlLarge
      }`,
      [Size.Sm]: `${fetchUrl}/e_bgremoval/w_250,f_auto/${
        image.externalUrlSmall ?? image.externalUrlLarge
      }`,
      [Size.Lg]: `${fetchUrl}/e_bgremoval/f_auto/${
        image.externalUrlLarge ?? image.externalUrlSmall
      }`,
    };
  },
};
