import { Provider } from '@spryker-oryx/di';
import {
  ApiProductModel,
  DefaultProductMediaNormalizer,
  Size,
} from '@spryker-oryx/product';

/**
 * The demo ID is not on a paid plan, which means that it cannot be heavily used. If you like to copy
 * this implementation for you production usage, make sure that you provide a reliable Cloudinary account.
 */
const demoCloudinaryID = 'dmunlcvip';

/**
 * Cloudinary provides an http API that can be used to _fetch_ remote resource and enable on-the-fly
 * transformation. The transformed image got distributed on the Cloudinary CDN.
 */
const fetchUrl = `https://res.cloudinary.com/${demoCloudinaryID}/image/fetch/`;

/**
 * Simple product image convertor that takes the large product image and assigns it to different image formats.
 * This provides:
 * - optimised images size (eg. xs, sm, lg)
 * - optimised image formats (typically using webP)
 * - transparent image backgrounds
 * - distributed images (no network latency)
 */
export const productImageConverter: Provider = {
  provide: DefaultProductMediaNormalizer,
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
