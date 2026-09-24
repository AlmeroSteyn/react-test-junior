import { type IDelivery, SocketActionsEnum } from './types.ts'

let deliveriesState: IDelivery[] = [
  {
    id: 'b8e9b0c2-5c8e-4a6f-9982-f4d1e2e34501',
    name: 'Electronics Package - Laptop',
    inTransit: false,
    delivered: false,
  },
  {
    id: 'c9f0a1d3-6d9f-4b70-8a93-a5e2f3f45602',
    name: 'Office Supplies - Printer Paper',
    inTransit: true,
    delivered: false,
  },
  {
    id: 'da01b2e4-7ea0-4c81-9ba4-b6f3a4a56703',
    name: 'Kitchenware - Espresso Machine',
    inTransit: false,
    delivered: true,
  },
  {
    id: 'eb12c3f5-8fb1-4d92-acb5-c7a4b5b67804',
    name: 'Books - TypeScript Handbook',
    inTransit: false,
    delivered: false,
  },
  {
    id: 'fc23d4a6-9ac2-4ea3-bdc6-d8b5c6c78905',
    name: 'Apparel - Winter Jacket',
    inTransit: true,
    delivered: false,
  },
  {
    id: 'ad34e5b7-abd3-4fb4-ced7-e9c6d7d89006',
    name: 'Home Decor - Desk Lamp',
    inTransit: false,
    delivered: true,
  },
  {
    id: 'be45f6c8-bce4-40c5-dfe8-fad7e8e90107',
    name: 'Fitness Equipment - Dumbbells',
    inTransit: false,
    delivered: false,
  },
  {
    id: 'cf56a7d9-cdf5-41d6-e0f9-0be8f9fa1208',
    name: 'Smart Home - Thermostat',
    inTransit: true,
    delivered: false,
  },
  {
    id: 'd067b8ea-def6-42e7-f10a-1cf90afb2309',
    name: 'Audio - Noise-Cancelling Headphones',
    inTransit: false,
    delivered: true,
  },
  {
    id: 'e178c9fb-eff7-43f8-821b-2da01bac340a',
    name: 'Footwear - Running Shoes',
    inTransit: false,
    delivered: false,
  },
  {
    id: 'f289da0c-f008-4409-932c-3eb12cbd450b',
    name: 'Gaming - Mechanical Keyboard',
    inTransit: true,
    delivered: false,
  },
  {
    id: '039aeb1d-0119-451a-a43d-4fc23dce560c',
    name: 'Garden - Hand Tool Set',
    inTransit: false,
    delivered: true,
  },
  {
    id: '14abfc2e-122a-462b-b54e-50d34edf670d',
    name: 'Beverages - Specialty Coffee Beans',
    inTransit: false,
    delivered: false,
  },
  {
    id: '25bc0d3f-233b-473c-c65f-61e45fe0780e',
    name: 'Stationery - Sketchbook & Pencils',
    inTransit: true,
    delivered: false,
  },
  {
    id: '36cd1e40-344c-484d-d760-72f560f1890f',
    name: 'Camera Gear - Aluminum Tripod',
    inTransit: false,
    delivered: true,
  },
  {
    id: '47de2f51-455d-495e-e871-830671029a10',
    name: 'Pet Supplies - Dog Food',
    inTransit: false,
    delivered: false,
  },
  {
    id: '58ef3062-566e-4a6f-f982-94178213ab11',
    name: 'Automotive - Car Care Kit',
    inTransit: true,
    delivered: false,
  },
  {
    id: '69f04173-677f-4b70-8a93-a5289324bc12',
    name: 'Lighting - LED Desk Light',
    inTransit: false,
    delivered: true,
  },
  {
    id: '7a015284-7880-4c81-9ba4-b639a435cd13',
    name: 'Cosmetics - Skincare Set',
    inTransit: false,
    delivered: false,
  },
  {
    id: '8b126395-8991-4d92-acb5-c74ab546de14',
    name: 'Board Games - Strategy Game',
    inTransit: true,
    delivered: false,
  },
]
let intervalId: number | undefined

function getDeliveries() {
  return deliveriesState
}

function addNewDelivery(delivery: IDelivery) {
  deliveriesState = [...deliveriesState, delivery]
}

function updateDelivery(delivery: IDelivery) {
  const index = deliveriesState.findIndex((d) => d.id === delivery.id)
  if (index !== -1) {
    deliveriesState[index] = delivery
  }

  deliveriesState = [...deliveriesState]
}

export function deliveriesSocketSubscribe(
  cbFn: (deliveries: IDelivery[]) => void
) {
  const actionFn = (action: SocketActionsEnum, payload: IDelivery) => {
    switch (action) {
      case SocketActionsEnum.UPDATE:
        updateDelivery(payload)
        break
      case SocketActionsEnum.ADD:
        addNewDelivery(payload)
        break
    }
  }

  cbFn(getDeliveries())

  intervalId = setInterval(() => {
    cbFn(getDeliveries())
  }, 5000)

  return Promise.resolve(actionFn)
}

export function deliveriesSocketUnsubscribe() {
  clearInterval(intervalId)
}
