export interface IRole {
    id: number,
    name: string,
    display_name: string,
    description: string,
    subRole: string|undefined,
    createdAt: Date,
    updatedAt: Date,
}