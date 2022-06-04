import { Directive } from '@angular/core';

@Directive({
  selector: '[appScroll]',
  host: {'(window:scroll)': 'track($event)'}
})
export class ScrollDirective {
    track($event: Event) {
        console.debug("Scroll Event", $event);
    }
}