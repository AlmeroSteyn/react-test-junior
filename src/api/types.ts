export interface IDelivery {
  id: string
  name: string
  inTransit: boolean
  delivered: boolean
}

export enum SocketActionsEnum {
  UPDATE = 'UPDATE',
  ADD = 'ADD',
}
