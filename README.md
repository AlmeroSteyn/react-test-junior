# Offroad Apps Junior Web Developer Assignment

The project uses the following technologies

- React 19
- React Router
- Vitest
- React Aria Components
- Vite
- Vitest

## Mock websocket type implementation

The project hosts a mock websocket type implementation that will return the data from all deliveries each
5 seconds.

It has already been implemented in the `src/pages/Home.tsx` file. This will already place the incoming data in React State so that it can be used in the UI. It also places an updater function in the `socketFn` React Ref that can be used to add or update deliveries.

### To add a delivery:

```
socketFn.current(SocketActionsEnum.ADD,{id: '123', name: 'Test Delivery', status: 'Delivered'})
```

### To update a delivery:

```
socketFn.current(SocketActionsEnum.UPDATE,{id: '123', name: 'Test Delivery', status: 'Delivered'})
```

This will then update the delivery with the related ID.

## Installing the project

Install the dependencies with `npm install`. The use `npm run dev` to start the vite development server.

Consult `package.json' for further available helper scripts.

## The Assignment

Currently the project shows all deliveries available in memory. This needs to be expanded to add and edit deliveries as well as view their details.

For all UI elements, make use of the [React Aria Components](https://react-aria.adobe.com/getting-started) library.

1. Create a display panel for each delivery.
2. Create add and edit forms for deliveries.
3. Create this on one page so that the page is divided in three columns (LIST OF DELIVERIES | DELIVERY DETAILS | ADD/EDIT DELIVERY FORM).
4. Ensure that your application retains its state when the page is refreshed.
5. The websocket code can be subscribed to **ONLY ONCE**, so make use of standard React patterns and use what is at your disposal to ensure that the data and actions are propagated correctly.
6. Make use of semantic HTML elements, keep Accessibility in mind and refactor existing code where needed.
7. Write unit tests for your new code (see example in `src/pages/__tests__/About.test.tsx`).
8. Ensure that no linting errors are present.

### Bonus Bonanza

If you have time, make the application updates optimistic (that means that state changes are shown instantly and no longer lag behind due to the websocket mock 5 second delay).
