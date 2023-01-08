// timer.ts
export function setupTimer() {
  let time = 0
  if (import.meta.hot) {
    if ('time' in import.meta.hot.data) {
      time = import.meta.hot.data.time
    }
  }
  const $time = document.querySelector('#timer')!
  const setTime = () => {
    $time.textContent = `time: ${++time}`
    if (import.meta.hot) {
      import.meta.hot.data.time = time
    }
  }
  const timer = setInterval(setTime, 1000)

  if (import.meta.hot) {
    import.meta.hot.data.timer = timer
  }

  setTime()
}

if (import.meta.hot) {
  import.meta.hot.dispose((data) => {
    const timer = data.timer
    timer && clearInterval(timer)
  })
}
