import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SEARCHComponent } from './search.component';

describe('SEARCHComponent', () => {
  let component: SEARCHComponent;
  let fixture: ComponentFixture<SEARCHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SEARCHComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SEARCHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
