import { FC, useEffect, useState } from 'react'
// @ts-ignore
import { DefaultRubyVM } from 'ruby-head-wasm-wasi/dist/browser.umd'
import styles from './WasmRuby.module.scss'

type props = {}

let rubyVM

const WasmRuby: FC<props> = ({}) => {
  const [code, setCode] = useState('')
  const [execResult, setExecResult] = useState('')
  useEffect(() => {
    ;(async () => {
      const response = await fetch(
        'https://cdn.jsdelivr.net/npm/ruby-head-wasm-wasi@latest/dist/ruby.wasm'
      )
      const bufferWasm = await response.arrayBuffer()
      const moduleWasm = await WebAssembly.compile(bufferWasm)
      rubyVM = await DefaultRubyVM(moduleWasm)

      rubyVM.vm.printVersion()

      try {
        rubyVM.vm.eval(`
          require "js"
          luckiness = ["Lucky", "Unlucky"].sample
          #JS::eval("document.getElementById('wasm-container').innerText = '#{luckiness}'")
      `)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])
  return (
    <div id="wasm-container" className={styles['wasm-container']}>
      <h1>Rubyが動くよ。</h1>
      <p>
        左のテキストエリアにコードを入力して実行を押してね。実行結果が左に表示されるよ。
      </p>
      <div className={styles.container}>
        <div className={styles['textarea-container']}>
          <textarea
            className={styles.textarea}
            onChange={(e) => {
              setCode(e.target.value)
            }}
          ></textarea>
          <textarea value={execResult} className={styles.textarea}></textarea>
        </div>
        <button
          onClick={() => {
            try {
              setExecResult(rubyVM.vm.eval(code).toString())
            } catch (err) {
              setExecResult(err)
            }
          }}
        >
          実行
        </button>
      </div>
    </div>
  )
}

export default WasmRuby
