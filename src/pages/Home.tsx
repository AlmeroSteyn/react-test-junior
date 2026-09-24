import {
  deliveriesSocketSubscribe,
  deliveriesSocketUnsubscribe,
} from '../api/data-socket'
import { type IDelivery, SocketActionsEnum } from '../api/types.ts'
import { useEffect, useMemo, useRef, useState } from 'react'

export function Home() {
  const [deliveryList, setDeliveryList] = useState<IDelivery[]>([])
  const socketFn = useRef<
    ((action: SocketActionsEnum, payload: IDelivery) => void) | null
  >(null)

  const deliveriesDisplay = useMemo(
    () => ({
      newDeliveries: deliveryList.filter(
        (delivery) => !delivery.delivered && !delivery.inTransit
      ),
      inTransit: deliveryList.filter((delivery) => delivery.inTransit),
      delivered: deliveryList.filter((delivery) => delivery.delivered),
    }),
    [deliveryList]
  )

  const { newDeliveries, inTransit, delivered } = deliveriesDisplay

  function socketCb(deliveries: IDelivery[]) {
    setDeliveryList(deliveries)
  }

  useEffect(() => {
    async function onLoad() {
      socketFn.current = await deliveriesSocketSubscribe(socketCb)
    }

    onLoad()

    return () => {
      deliveriesSocketUnsubscribe()
    }
  }, [])

  return (
    <div className="p-6">
      <h1 className="w-full text-center font-bold text-3xl mb-8">
        Welcome to Offroad package delivery!
      </h1>
      <section className="mb-6">
        <h2 className="font-bold text-xl">New packages</h2>
        {newDeliveries.length !== 0 && (
          <ul>
            {newDeliveries.map((delivery) => (
              <li key={delivery.id}>{delivery.name}</li>
            ))}
          </ul>
        )}
      </section>
      <section className="mb-6">
        <h2 className="font-bold text-xl">Upcoming deliveries</h2>
        {inTransit.length !== 0 && (
          <ul>
            {inTransit.map((delivery) => (
              <li key={delivery.id}>{delivery.name}</li>
            ))}
          </ul>
        )}
      </section>
      <section className="mb-6">
        <h2 className="font-bold text-xl">Delivered packages</h2>
        {delivered.length !== 0 && (
          <ul>
            {delivered.map((delivery) => (
              <li key={delivery.id}>{delivery.name}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
