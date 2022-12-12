import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { IQualifications, Qualifications } from '../qualifications.model';

import { QualificationsService } from './qualifications.service';

describe('Qualifications Service', () => {
  let service: QualificationsService;
  let httpMock: HttpTestingController;
  let elemDefault: IQualifications;
  let expectedResult: IQualifications | IQualifications[] | boolean | null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    expectedResult = null;
    service = TestBed.inject(QualificationsService);
    httpMock = TestBed.inject(HttpTestingController);

    elemDefault = {
      id: 'AAAAAAA',
      code: 'AAAAAAA',
      display: 'AAAAAAA',
      defination: 'AAAAAAA',
      isActive: 'AAAAAAA',
      modifiedBy: 0,
      modifiedDate: 'AAAAAAA',
      priority: 0,
      status: 0,
      source: 0,
    };
  });

  describe('Service methods', () => {
    it('should find an element', () => {
      const returnedFromService = Object.assign({}, elemDefault);

      service.find('ABC').subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(elemDefault);
    });

    it('should create a Qualifications', () => {
      const returnedFromService = Object.assign(
        {
          id: 'ID',
        },
        elemDefault
      );

      const expected = Object.assign({}, returnedFromService);

      service.create(new Qualifications()).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'POST' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should update a Qualifications', () => {
      const returnedFromService = Object.assign(
        {
          id: 'BBBBBB',
          code: 'BBBBBB',
          display: 'BBBBBB',
          defination: 'BBBBBB',
          isActive: 'BBBBBB',
          modifiedBy: 1,
          modifiedDate: 'BBBBBB',
          priority: 1,
          status: 1,
          source: 1,
        },
        elemDefault
      );

      const expected = Object.assign({}, returnedFromService);

      service.update(expected).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PUT' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should partial update a Qualifications', () => {
      const patchObject = Object.assign(
        {
          defination: 'BBBBBB',
          isActive: 'BBBBBB',
          priority: 1,
          source: 1,
        },
        new Qualifications()
      );

      const returnedFromService = Object.assign(patchObject, elemDefault);

      const expected = Object.assign({}, returnedFromService);

      service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PATCH' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should return a list of Qualifications', () => {
      const returnedFromService = Object.assign(
        {
          id: 'BBBBBB',
          code: 'BBBBBB',
          display: 'BBBBBB',
          defination: 'BBBBBB',
          isActive: 'BBBBBB',
          modifiedBy: 1,
          modifiedDate: 'BBBBBB',
          priority: 1,
          status: 1,
          source: 1,
        },
        elemDefault
      );

      const expected = Object.assign({}, returnedFromService);

      service.query().subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush([returnedFromService]);
      httpMock.verify();
      expect(expectedResult).toContainEqual(expected);
    });

    it('should delete a Qualifications', () => {
      service.delete('ABC').subscribe(resp => (expectedResult = resp.ok));

      const req = httpMock.expectOne({ method: 'DELETE' });
      req.flush({ status: 200 });
      expect(expectedResult);
    });

    describe('addQualificationsToCollectionIfMissing', () => {
      it('should add a Qualifications to an empty array', () => {
        const qualifications: IQualifications = { id: 'ABC' };
        expectedResult = service.addQualificationsToCollectionIfMissing([], qualifications);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(qualifications);
      });

      it('should not add a Qualifications to an array that contains it', () => {
        const qualifications: IQualifications = { id: 'ABC' };
        const qualificationsCollection: IQualifications[] = [
          {
            ...qualifications,
          },
          { id: 'CBA' },
        ];
        expectedResult = service.addQualificationsToCollectionIfMissing(qualificationsCollection, qualifications);
        expect(expectedResult).toHaveLength(2);
      });

      it("should add a Qualifications to an array that doesn't contain it", () => {
        const qualifications: IQualifications = { id: 'ABC' };
        const qualificationsCollection: IQualifications[] = [{ id: 'CBA' }];
        expectedResult = service.addQualificationsToCollectionIfMissing(qualificationsCollection, qualifications);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(qualifications);
      });

      it('should add only unique Qualifications to an array', () => {
        const qualificationsArray: IQualifications[] = [{ id: 'ABC' }, { id: 'CBA' }, { id: '7ed7697c-6118-4d25-a6f0-4d91af86454d' }];
        const qualificationsCollection: IQualifications[] = [{ id: 'ABC' }];
        expectedResult = service.addQualificationsToCollectionIfMissing(qualificationsCollection, ...qualificationsArray);
        expect(expectedResult).toHaveLength(3);
      });

      it('should accept varargs', () => {
        const qualifications: IQualifications = { id: 'ABC' };
        const qualifications2: IQualifications = { id: 'CBA' };
        expectedResult = service.addQualificationsToCollectionIfMissing([], qualifications, qualifications2);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(qualifications);
        expect(expectedResult).toContain(qualifications2);
      });

      it('should accept null and undefined values', () => {
        const qualifications: IQualifications = { id: 'ABC' };
        expectedResult = service.addQualificationsToCollectionIfMissing([], null, qualifications, undefined);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(qualifications);
      });

      it('should return initial array if no Qualifications is added', () => {
        const qualificationsCollection: IQualifications[] = [{ id: 'ABC' }];
        expectedResult = service.addQualificationsToCollectionIfMissing(qualificationsCollection, undefined, null);
        expect(expectedResult).toEqual(qualificationsCollection);
      });
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
