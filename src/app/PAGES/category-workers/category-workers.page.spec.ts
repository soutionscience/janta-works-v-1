import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoryWorkersPage } from './category-workers.page';

describe('CategoryWorkersPage', () => {
  let component: CategoryWorkersPage;
  let fixture: ComponentFixture<CategoryWorkersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryWorkersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryWorkersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
