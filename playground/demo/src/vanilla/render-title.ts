// render-title.ts
export function renderTitle() {
  const $h1 = document.querySelector('h1')!
  $h1.textContent = 'HMR DEME 1'
}

// if (import.meta.hot) {
//   import.meta.hot.accept((module) => {
//     console.log(module);
//     if (module) {
//       module.renderTitle();
//     }
//   });
// }
