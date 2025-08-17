
enum ValueFormat {
    //% block="intenger"
    int = 0,
    //% block="float"
    float = 1,
}

//% block="run test" color="#7f7e8c" icon="\uf121"
namespace RunTest {
    let runResult = 0

    //% blockId=runtest_init
    //% block="on run testing do"
    //% handlerStatement
    //% weight=20
    export function initRun(mystate: () => void) {
        const time = control.millis()
        mystate()
        runResult = control.millis() - time
    }

    //% blockId=runtest_result
    //% block="runtest result (millis) in $resultType"
    //% weight=19
    export function result(resultType: ValueFormat) {
        switch (resultType) {
            case 0: return runResult
            case 1: return runResult / 1000
        }
        return NaN
    }

    //% blockId=runtest_runtime
    //% block="system runtime (millis) in $resultType"
    //% weight=18
    export function sysRuntimeMs(resultType: ValueFormat) {
        switch (resultType) {
            case 0: return control.millis()
            case 1: return control.millis() / 1000
        }
        return NaN
    }

    //% blockId=runtest_deltatime
    //% block="delta time (millis) in $resultType"
    //% weight=17
    export function deltaMs(resultType: ValueFormat) {
        switch (resultType) {
            case 0: return control.eventContext().deltaTimeMillis
            case 1: return control.eventContext().deltaTime
        }
        return NaN
    }

}