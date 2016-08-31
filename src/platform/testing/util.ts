import {Component} from "@angular/core";
import {ComponentFixture, TestComponentBuilder} from "@angular/core/testing";
import {Ng2MaterialModule} from "../../module";
import {async, inject, TestBed} from '@angular/core/testing';

export function promiseWait(milliseconds: number = 10): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), milliseconds);
  });
}




/**
 * Run a basic lifecycle sanity check on a component. This will create the given component
 * template, wait a few moments, then destroy it.
 * @param name The name for the describe block
 * @param selector The selector that's being tested (for inner describe)
 * @param template The template that contains the component usage.
 */
export function componentSanityCheck(name: string, selector: string, template: string) {
  @Component({
    selector: 'test-app',
    template: template
  })
  class TestComponent {
  }

  describe(name, () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          Ng2MaterialModule
        ]
      });
    });


    function setup(): Promise<any> {
      return new Promise((resolve, reject) => {
        resolve(TestBed.createComponent);
      })
        .then((fixture: ComponentFixture<TestComponent>) => {
          fixture.detectChanges();
          return fixture;
        })
        .catch(console.error.bind(console));
    }



    describe(selector, () => {
      it('should instantiate component without fail', async(inject([], () => {
        setup()
          .then(() => promiseWait());
      })));
      it('should destroy component without fail', async(inject([], () => {
        setup()
          .then((api: ComponentFixture<TestComponent>) => api.destroy())
          .then(() => promiseWait());
      })));
    });
  });

}
