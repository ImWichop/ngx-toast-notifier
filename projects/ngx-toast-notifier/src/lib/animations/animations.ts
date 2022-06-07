import {
  animate,
  AnimationTriggerMetadata,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const onEnterLeave: AnimationTriggerMetadata = trigger('onEnterLeave', [
  transition(':enter', [
    style({ opacity: '0' }),
    animate(500, style({ opacity: '1' })),
  ]),
  transition(':leave', [
    style({ opacity: '1' }),
    animate(500, style({ opacity: '0' })),
  ]),
]);
