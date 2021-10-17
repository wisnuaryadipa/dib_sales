export interface ISalesVisit {
    id: number,
    idUser: string|undefined,
    idStore: string,
    timeVisit: string|undefined,
    description: string,
    lat: string|undefined,
    lng: string|undefined,
    statusResponse: string|undefined,
    statusRepeatOrder: string|undefined,
    isStatusChange: number|undefined,
    presentTo: string,
    salesName: string|undefined,
    picName: string|undefined,
    isVisitingOutsideStore: number|undefined,
    createdAt: Date,
    updatedAt: Date,
}