export function initErrorOverlay() {
  if (__DEV__) {
    require('./reactErrorOverlay').init();
  }
}

export function dismissErrorOverlay() {
  if (__DEV__) {
    require('./reactErrorOverlay').dismiss();
  }
}
