import { ContentComponentSchema } from '@spryker-oryx/experience';
import { acpCategory } from '../category';
import { BazaarvoiceRatingComponent } from './rating.component';

export const ratingComponentSchema: ContentComponentSchema<BazaarvoiceRatingComponent> =
  {
    name: 'Product average rating',
    category: acpCategory,
    group: 'BazaarVoice',
  };
