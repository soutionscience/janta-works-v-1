import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobPostPage } from './job-post.page';

describe('JobPostPage', () => {
  let component: JobPostPage;
  let fixture: ComponentFixture<JobPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobPostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
