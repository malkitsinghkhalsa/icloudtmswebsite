import { Injectable } from "@angular/core";

import { IfStmt } from "@angular/compiler";
@Injectable()
export class MasterService {
  constructor() { }

  CurrentUser: any;
  fromId: any;
  toId: any;
  encounterUId: any;
  message: any;
  teleConsultationId: any;
  TablepageSize = [10, 25, 50, 100];
  currentTableSize = 10;
  //invcConnectionMaster: any;
  SyncBtn: boolean = false
  invcReg: boolean = false;

  ConsultationSaveBtn: boolean = false
  ConsultationDraftBtn: boolean = false;


}
