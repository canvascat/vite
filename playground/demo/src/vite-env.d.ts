/// <reference types="vite/client" />

declare module '*.svg?sprite' {
  const src: string
  export default src
}
