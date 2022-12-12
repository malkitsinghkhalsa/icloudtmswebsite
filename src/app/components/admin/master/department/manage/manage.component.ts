import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor() { }
  departmentsLst = [{
    "id": "1242",
    "PractitionerName": "test",
    "speciality":"test",
    "status": true
  },
  {
    "id": "24241",
    "PractitionerName": "test",
    "speciality":"test",
    "status": true
  },{
    "id": "12442",
    "PractitionerName": "test",
    "speciality":"test",
    "status": true
  },{
    "id": "153",
    "PractitionerName": "test",
    "speciality":"test",
    "status": true
  },{
    "id": "461",
    "PractitionerName": "test",
    "speciality":"test",
    "status": true
  },
  {
    "id": "1464",
    "PractitionerName": "test",
    "speciality":"test",
    "status": true
  },
  {
    "id": "146",
    "PractitionerName": "test",
    "speciality":"test",
    "status": true
  },
  {
    "id": "1355",
    "PractitionerName": "test",
    "speciality":"test",
    "status": true
  },
  {
    "id": "1464",
    "PractitionerName": "test",
    "speciality":"test",
    "status": true
  },
  {
    "id": "146",
    "PractitionerName": "test",
    "speciality":"test",
    "status": true
  }]

  departmentsLst2 = [{
    "id": "1242",
    "PractitionerName": "test",
    "speciality":"test",
    "status": true
  },
  {
    "id": "24241",
    "PractitionerName": "test",
    "speciality":"test",
    "status": true
  }]

  //PROVIDER TABLE
  providersList = [{
    "id": "1242",
    "ProviderName": "test",
    "type":"test",
    "status":true,
    "actions": ''
  },
  {
    "id": "1242",
    "ProviderName": "test",
    "type":"test",
    "status":true,
    "actions": ''
  }
 ]
  // PROVIDER TABLE ENDS



  displayedColumns=["id", "practitioner name","speciality", "status", "actions"];
  totalRecords=10
  paginationParams={
    itemsPerPage:10
  }
  ngOnInit(): void {
  }

  pageEvents(event:any){

  }

  
}

