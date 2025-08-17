
//% block="run test" color="#7f7e8c" icon="\uf121"
namespace runtest {
    let runResult = 0

    //% blockId=runtest_init
    //% block="on run testing do $mystat"
    //% handlerStatement
    export function init(mystat: () => void) {
        const time = control.millis()
        mystat()
        runResult = control.millis() - time
    }

    //% blockId=runtest_result
    //% block="runtest result (millis)"
    export function result() {
        return runResult
    }

    //% blockId=runtest_runtime
    //% block="system runtime (millis)"
    export function sysRuntimeMS() {
        return control.millis()
    }

}