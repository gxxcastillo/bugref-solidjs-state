import { isServer } from "solid-js/web";
import { createStore } from 'solid-js/store';
import { createEffect, createResource, Suspense } from 'solid-js';
import type { Component } from 'solid-js';
import styles from './App.module.css';
import { HydrationScript } from 'solid-js/web';
import { User } from "./User";

export function App() {
  return (
    <html>
      <head>
        <title>My Solid App</title>
        <HydrationScript />
      </head>
      <body>
        <User />
        <script src="/client.js" type="module" async></script>
      </body>
    </html>
  );
};
