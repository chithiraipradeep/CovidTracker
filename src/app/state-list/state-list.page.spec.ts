import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StateListPage } from './state-list.page';

describe('StateListPage', () => {
  let component: StateListPage;
  let fixture: ComponentFixture<StateListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StateListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
