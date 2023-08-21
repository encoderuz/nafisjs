export function nafishistory(){
    return{
        history: window.history,
        back: () => history.back(),
        go: (delta) => history.go(delta),
        forward: () => history.forward(),
        length: history.length,
        scrollRes: history.scrollRestoration,
        state: history.state,
        pushState: (state, unused, url) => history.pushState(state, unused, url),


    }
}
