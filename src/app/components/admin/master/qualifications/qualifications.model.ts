export interface IQualifications {
  Id?: string;
  Code?: string | null;
  Display?: string | null;
  Definition?: string | null;
  Active?: boolean | null;
  ModifiedBy?: number | null;
  ModifiedDate?: string | null;
  Priority?: number | null;
  Status?: number | null;
  Source?: number | null;
}

export class Qualifications implements IQualifications {
  constructor(
    public Id?: string,
    public Code?: string | null,
    public Display?: string | null,
    public Definition?: string | null,
    public Active?: boolean | null,
    public ModifiedBy?: number | null,
    public ModifiedDate?: string | null,
    public Priority?: number | null,
    public Status?: number | null,
    public Source?: number | null
  ) { this.Active = this.Active ?? false; }
}

export function getQualificationsIdentifier(qualifications: IQualifications): string | undefined {
  return qualifications.Id;
}
