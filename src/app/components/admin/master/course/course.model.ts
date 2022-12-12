

export interface ICourse {
  Id?: string;
  Code?: string | null;
  Display?: string | null;
  Definition?: string | null;
  Active?: boolean | null;
  Status?: number | null;
  Source?: number | null;
}

export class Course implements ICourse {
  constructor(
    public Id?: string,
    public Code?: string | null,
    public Display?: string | null,
    public Definition?: string | null,

    public Status?: number | null,
    public Source?: number | null
  ) { }
}

export function getCourseIdentifier(course: ICourse): string | undefined {
  return course.Id;
}
