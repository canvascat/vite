// main.ts
import { render } from './render'
import { setupCounter } from './counter'
import { setupTimer } from './timer'
import { renderTitle } from './render-title'

render()
renderTitle()
setupCounter()
setupTimer()

// if (import.meta.hot) {
//   import.meta.hot.accept("./render-title.ts", (module) => {
//     console.log(module);
//     if (module) {
//       module.renderTitle();
//     }
//   });
// }

if (import.meta.hot) {
  import.meta.hot.accept(
    ['./render-title.ts', './counter.ts', './timer.ts'],
    (modules) => {
      console.log(modules)
      const [renderTitleModule, counterModule, timerModule] = modules

      if (renderTitleModule) {
        renderTitleModule.renderTitle()
      }

      if (counterModule) {
        counterModule.setupCounter()
      }

      if (timerModule) {
        timerModule.setupTimer()
      }
    }
  )
}
