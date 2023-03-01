import { isServer } from "solid-js/web";
import { createStore } from 'solid-js/store';
import { createEffect, createResource, Suspense } from 'solid-js';
import type { Component } from 'solid-js';
import styles from './App.module.css';
import { HydrationScript } from 'solid-js/web';

type MockData = {
  first: string;
  last: string;
  id: string;
}

const initialData = {
  first: '...',
  last: '...',
  id: '...'
}

const mockData = {
  first: 'Yimmy',
  last: 'Henriquez',
  id: '123'
};

async function callApi(mockData: MockData) {
  console.log(`callApi() called on ${isServer ? 'server' : 'client'}`);
  return new Promise<MockData>((resolve, reject) => {
    setTimeout(() => {
      console.log('callApi() resolved');
      resolve(mockData);
    }, 5000);
  })
}

export function User() {
  createEffect(() => {
    console.log('data() has been updated, now updating state...');
    setState(data() as MockData);
  });

  const [data] = createResource(mockData, callApi);
  const [state, setState] = createStore(initialData)

  return (
    <div class={styles.User}>
        <p>The following values should first render with initialValue and then render with the results of `callApi()`</p>
        <Suspense fallback={() => 'loading...'}>
          <div class={styles.App}>
            <header>
              <h1>Hello {state.first} {state.last}!</h1>
              <p>Your id is {state.id}</p>
            </header>

            <form>
              <input placeholder='first' value={state.first} onInput={(event) => setState('first', event.currentTarget.value)}/>
              <input placeholder='last' value={state.last}  onInput={(event) => setState('last', event.currentTarget.value)}/>
              <input placeholder='id' value={state.id}  onInput={(event) => setState('id', event.currentTarget.value)}/>
            </form>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr />
          <div style={{ color: '#ccc' }}>
            <p>On a separate note, is there a way to have this Suspense bind to "data" without having to manually include it in the JSX by doing something like this: {JSON.stringify(data())}</p>
          </div>
        </Suspense>
    </div>
  )
}