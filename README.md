## BUG?

When doing SSR + Streaming, state is not updated.

### Details

This reference app starts up a web server that hosts a SolidJS reference client.

The server initially renders the application and makes the necessary api call via `callApi()`.  On the client, we use the `<Suspense>` component that does not render until the results of the api call are resolved and streamed.

Once the results of the api call are resolved, we use `createEffect()` to update our local state.

The issue is that the state only updates for the input boxers.  While the content passed to the input fields in the `form` component is updated, the content in the `header` component is not.

### To Reproduce

1. pnpm install
2. pnpm build
3. pnpm start
4. Wait a few seconds for the stream to resolve
5. Note the input fields are updated with the results of the api call, but the "Hello ..." and "Your id is ..." text is not updated.
6. Note typing in any of the input fields updates "Hello ..." and "Your id is ...".

