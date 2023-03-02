export const debounce = (fn, ms) => {
    let timeout
    return function () {
        const fcCall = () => { fn.apply(this, arguments) }

        clearTimeout(timeout)

        timeout = setTimeout(fcCall, ms)
    }
}
