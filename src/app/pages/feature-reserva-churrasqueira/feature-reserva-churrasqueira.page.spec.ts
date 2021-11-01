import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeatureReservaChurrasqueiraPage } from './feature-reserva-churrasqueira.page';

describe('FeatureReservaChurrasqueiraPage', () => {
  let component: FeatureReservaChurrasqueiraPage;
  let fixture: ComponentFixture<FeatureReservaChurrasqueiraPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureReservaChurrasqueiraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureReservaChurrasqueiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
