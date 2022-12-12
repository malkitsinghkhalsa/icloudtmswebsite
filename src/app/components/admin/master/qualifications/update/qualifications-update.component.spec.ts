import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject, from } from 'rxjs';

import { QualificationsService } from '../service/qualifications.service';
import { IQualifications, Qualifications } from '../qualifications.model';

import { QualificationsUpdateComponent } from './qualifications-update.component';

describe('Qualifications Management Update Component', () => {
  let comp: QualificationsUpdateComponent;
  let fixture: ComponentFixture<QualificationsUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let qualificationsService: QualificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [QualificationsUpdateComponent],
      providers: [
        UntypedFormBuilder,
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{}]),
          },
        },
      ],
    })
      .overrideTemplate(QualificationsUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(QualificationsUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    qualificationsService = TestBed.inject(QualificationsService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should update editForm', () => {
      const qualifications: IQualifications = { id: 'CBA' };

      activatedRoute.data = of({ qualifications });
      comp.ngOnInit();

      expect(comp.editForm.value).toEqual(expect.objectContaining(qualifications));
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<Qualifications>>();
      const qualifications = { id: 'ABC' };
      jest.spyOn(qualificationsService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ qualifications });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: qualifications }));
      saveSubject.complete();

      // THEN
      expect(comp.previousState).toHaveBeenCalled();
      expect(qualificationsService.update).toHaveBeenCalledWith(qualifications);
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<Qualifications>>();
      const qualifications = new Qualifications();
      jest.spyOn(qualificationsService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ qualifications });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: qualifications }));
      saveSubject.complete();

      // THEN
      expect(qualificationsService.create).toHaveBeenCalledWith(qualifications);
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<Qualifications>>();
      const qualifications = { id: 'ABC' };
      jest.spyOn(qualificationsService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ qualifications });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(qualificationsService.update).toHaveBeenCalledWith(qualifications);
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });
});
