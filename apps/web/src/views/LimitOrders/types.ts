import { Order } from '@gelatonetwork/limit-orders-lib'

export enum ORDER_CATEGORY {
  Open = 0,
  Expired = 1,
  History = 2,
}

export enum LimitOrderStatus {
  OPEN = 'open',
