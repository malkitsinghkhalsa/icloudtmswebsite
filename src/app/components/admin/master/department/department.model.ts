export interface IDepartment {
    Id?: string;
    Code?: string | null;
    Display?: string | null;
    Definition?: string | null;
    ConceptCode?:string | null;
    ParentDepartmentCode?:number | null;
    Special?:boolean | null;
    Priority?:number | null;
    Active?: boolean | null;
    CreatedBy?: number | null;
    CreatedDate?: string | null;
    ModifiedBy?: number | null;
    ModifiedDate?: string | null;
    Source?: number | null;
  }

  export class Department implements IDepartment {
    constructor(
      public Id?: string,
      public Code?: string | null,
      public Display?: string | null,
      public Definition?: string | null,
      public ConceptCode?: string | null,
      public ParentDepartmentCode?: number | null,
      public Active?: boolean | null,
      public Special?: boolean | null,
      public ModifiedBy?: number | null,
      public ModifiedDate?: string | null,
      public Priority?: number | null,
      public Status?: number | null,
      public Source?: number | null
    ) {this.Active = this.Active ?? false;
      this.Special = this.Special ?? false; }
  }

  export function getComorbidityIdentifier(department: IDepartment): string | undefined {
    return department.Id;
  }
  