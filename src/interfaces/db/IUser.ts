

export interface IUser {
    id: number,
    name: string,
    email: string,
    password: string,
    rememberToken: string|undefined,
    uuid: string|undefined,
    createdAt: Date,
    updatedAt: Date,
}