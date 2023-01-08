// render.ts
export function render() {
  const root = document.querySelector<HTMLDivElement>('#root')!
  root.innerHTML = `
<div>
  <h1></h1>
  <button id="counter" type="button"></button>
  <button id="timer" type="button"></button>
</div>
`
}

if (import.meta.hot) {
  import.meta.hot.decline()
}
