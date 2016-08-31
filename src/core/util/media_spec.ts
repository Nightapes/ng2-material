import {TestBed, inject} from '@angular/core/testing';
import {Media} from './media';
import {NgZone, Provider} from "@angular/core";
import {ViewportHelper, BrowserViewportHelper} from "./viewport";
import {MockNgZone} from '../../platform/testing/ng_zone_mock';
import {_WORKER_UI_PLATFORM_PROVIDERS} from '@angular/platform-browser/src/worker_render';
export function main() {

  describe('MediaService', () => {
    const smallQuery = Media.getQuery('sm');
    const largeQuery = Media.getQuery('lg');
    describe('listen', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
        {provide: ViewportHelper, useClass: BrowserViewportHelper}, _WORKER_UI_PLATFORM_PROVIDERS, Media
        ]
      });
    });


  it('should return a listener with the given query', inject([Media], (service) => {
        const listener = service.listen(smallQuery);
        expect(listener.query).toBe(smallQuery);
        listener.destroy();
     }));

      it('should reference count and share matchMedia listeners with the same query', inject([Media], (service) => {
        expect(service.cache[largeQuery]).toBe(undefined);
        const listener = service.listen(largeQuery);
        expect(service.cache[largeQuery].references).toBe(1);
        const another = service.listen(largeQuery);
        expect(service.cache[largeQuery].references).toBe(2);
        listener.destroy();
        expect(service.cache[largeQuery].references).toBe(1);
        another.destroy();
        expect(service.cache[largeQuery]).toBe(undefined);
      }));
    });
  });
}
