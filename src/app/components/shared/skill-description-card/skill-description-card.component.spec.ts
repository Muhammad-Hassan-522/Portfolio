import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDescriptionCardComponent } from './skill-description-card.component';

describe('SkillDescriptionCardComponent', () => {
  let component: SkillDescriptionCardComponent;
  let fixture: ComponentFixture<SkillDescriptionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillDescriptionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillDescriptionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
