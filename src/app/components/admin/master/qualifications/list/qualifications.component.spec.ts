import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { QualificationsService } from '../service/qualifications.service';

import { QualificationsComponent } from './qualifications.component';

describe('Qualifications Management Component', () => {
  let comp: QualificationsComponent;
  let fixture: ComponentFixture<QualificationsComponent>;
  let service: QualificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [QualificationsComponent],
    })
      .overrideTemplate(QualificationsComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(QualificationsComponent);
    comp = fixture.componentInstance;
    service = TestBed.inject(QualificationsService);

    const headers = new HttpHeaders();
    jest.spyOn(service, 'query').mockReturnValue(
      of(
        new HttpResponse({
          body: [{ id: 'ABC' }],
          headers,
        })
      )
    );
  });

  it('Should call load all on init', () => {
    // WHEN
    comp.ngOnInit();

    // THEN
    expect(service.query).toHaveBeenCalled();
    expect(comp.qualifications?.[0]).toEqual(expect.objectContaining({ id: 'ABC' }));
  });
});
