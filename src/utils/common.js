export default {
    getUrlQuery(url) {
        if(url.indexOf('?') == -1) {
            return {}
        }
       const query =  url.split('?')[1]
            .split('&')
            .map(v => v.split('='))
            .filter(v => v.length === 2)
            .reduce((prev, next) => Object.assign(prev, {[next[0]]: next[1]}), {});
        return query
    }

}
