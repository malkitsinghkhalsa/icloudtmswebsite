import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { QualificationsDetailComponent } from './qualifications-detail.component';

describe('Qualifications Management Detail Component', () => {
  let comp: QualificationsDetailComponent;
  let fixture: ComponentFixture<QualificationsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QualificationsDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { data: of({ qualifications: { id: 'ABC' } }) },
        },
      ],
    })
      .overrideTemplate(QualificationsDetailComponent, '')
      .compileComponents();
    fixture = TestBed.createComponent(QualificationsDetailComponent);
    comp = fixture.componentInstance;
  });

  describe('OnInit', () => {
    it('Should load qualifications on init', () => {
      // WHEN
      comp.ngOnInit();

      // THEN
      expect(comp.qualifications).toEqual(expect.objectContaining({ id: 'ABC' }));
    });
  });
});
