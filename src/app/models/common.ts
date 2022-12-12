export interface IOrganization {
    Display?: string | null,
    Id?: number | null,
    OrganizationDefinition?: string | null,
    Uid?: string | null
}

export interface IMenuActions {
    Id?: number | null,
    MenuId?: number | null,
    MenuName?: string | null,
    ActionId?: number | null,
    ActionName?: string | null
}

export interface IActions {
    Id?: number | null,
    ActionName?: string | null,
    Definition?: string | null,
    checked: any
}

export interface IGender {
    Id?: number | null,
    Display?: string | null,
    Definition?: string | null,
    Code?: string | null,
    Priority?: number | null,
    Active?: boolean | null
}