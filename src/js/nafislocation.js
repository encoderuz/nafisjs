export function nafislocation(){
    return {
        location: window.location,
        hash: location.hash,
        host: location.host,
        hostname: location.hostname,
        href: location.href,
        origin: location.origin,
        pathname: location.pathname,
        port: location.port,
        protocol: location.protocol,
        replace: (url) => location.replace(url),
        reload: () => location.reload(),
        assign: (url) => location.assign(url),
        search: () => location.search,
        toStr: () => location.toString()
    };

}
