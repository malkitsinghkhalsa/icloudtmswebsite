import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject, from } from 'rxjs';
import { DepartmentService } from '../service/department.service';
import { IDepartment, Department } from '../department.model';
import { DepartmentUpdateComponent } from './department-update.component';

describe('DepartmentUpdateComponent', () => {
  let component: DepartmentUpdateComponent;
  let fixture: ComponentFixture<DepartmentUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let service: DepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [DepartmentUpdateComponent],
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
      .overrideTemplate(DepartmentUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(DepartmentUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    service = TestBed.inject(DepartmentService);

    component = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should update editForm', () => {
      const deptObj: IDepartment = { id: 'CBA' };

      activatedRoute.data = of({ deptObj });
      component.ngOnInit();

      expect(component.editForm.value).toEqual(expect.objectContaining(deptObj));
    });
  });
  
  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<Department>>();
      const objDepartment = { id: 'ABC' };
      jest.spyOn(service, 'update').mockReturnValue(saveSubject);
      jest.spyOn(component, 'previousState');
      activatedRoute.data = of({ objDepartment });
      component.ngOnInit();

      // WHEN
      component.save();
      expect(component.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: objDepartment }));
      saveSubject.complete();

      // THEN
      expect(component.previousState).toHaveBeenCalled();
      expect(service.update).toHaveBeenCalledWith(objDepartment);
      expect(component.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<Department>>();
      const departmentObj = new Department();
      jest.spyOn(service, 'create').mockReturnValue(saveSubject);
      jest.spyOn(component, 'previousState');
      activatedRoute.data = of({ departmentObj });
      component.ngOnInit();

      // WHEN
      component.save();
      expect(component.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: departmentObj }));
      saveSubject.complete();

      // THEN
      expect(service.create).toHaveBeenCalledWith(departmentObj);
      expect(component.isSaving).toEqual(false);
      expect(component.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<Department>>();
      const departmentObj = { id: 'ABC' };
      jest.spyOn(service, 'update').mockReturnValue(saveSubject);
      jest.spyOn(component, 'previousState');
      activatedRoute.data = of({ departmentObj });
      component.ngOnInit();

      // WHEN
      component.save();
      expect(component.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(service.update).toHaveBeenCalledWith(departmentObj);
      expect(component.isSaving).toEqual(false);
      expect(component.previousState).not.toHaveBeenCalled();
    });
  });
});
