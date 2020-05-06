import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobPostSlidersPage } from './job-post-sliders.page';

describe('JobPostSlidersPage', () => {
  let component: JobPostSlidersPage;
  let fixture: ComponentFixture<JobPostSlidersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobPostSlidersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobPostSlidersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
