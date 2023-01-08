// counter.ts
export function setupCounter() {
  let count = 0
  if (import.meta.hot) {
    if ('count' in import.meta.hot.data) {
      count = import.meta.hot.data.count
    }
  }
  const $count = document.querySelector<HTMLButtonElement>('#counter')!
  const setCounter = () => {
    $count.innerHTML = `count is ${++count}`
    if (import.meta.hot) {
      import.meta.hot.data.count = count
    }
  }
  $count.addEventListener('click', () => setCounter())
  setCounter()
}
