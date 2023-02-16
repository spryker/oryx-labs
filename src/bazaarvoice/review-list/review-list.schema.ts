import { ContentComponentSchema } from '@spryker-oryx/experience';
import { FormFieldType } from '@spryker-oryx/form';
import { acpCategory } from '../category';
import { BazaarvoiceReviewListComponent } from './review-list.component';

export const reviewListComponentSchema: ContentComponentSchema<BazaarvoiceReviewListComponent> =
  {
    name: 'Product review list',
    category: acpCategory,
    group: 'BazaarVoice',
    options: {
      enableSearch: {
        type: FormFieldType.Boolean,
      },
    },
  };
