export function nafisscreen(){
    const self = {
        screen: window.screen,
        height: screen.height,
        width: screen.width,
        aheight: screen.availHeight,
        awidth: screen.availWidth,
        pxDepth: screen.pixelDepth,
        colorDepth: screen.colorDepth,
        orientation: screen.orientation,
        orientationType: screen.orientation.type
    }
    return self;
}
