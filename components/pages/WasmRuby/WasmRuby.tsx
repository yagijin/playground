import { FC, useEffect, useState } from 'react'
import { Button, Heading, Text, Textarea, Flex, Center } from '@chakra-ui/react'
import { AiFillCaretRight } from 'react-icons/ai'
type props = {}

let rubyVM: any

const WasmRuby: FC<props> = ({}) => {
  const [code, setCode] = useState('')
  const [execResult, setExecResult] = useState('')

  const [isWasmLoaded, setIsWasmLoaded] = useState(false)

  const [textAreaHeight, setTextAreaHeight] = useState(100)

  useEffect(() => {
    setTextAreaHeight(window.innerHeight * 0.5)
  }, [])

  useEffect(() => {
    // @ts-ignore
    if (window?.['ruby-wasm-wasi'] === undefined) {
      // wasm設定のためのjsが読み込まれるまでわざと無限ループさせる
      setIsWasmLoaded(false)
      return
    }
    // @ts-ignore
    const { DefaultRubyVM } = window['ruby-wasm-wasi']
    ;(async () => {
      const response = await fetch(
        'https://cdn.jsdelivr.net/npm/ruby-head-wasm-wasi@latest/dist/ruby.wasm'
      )
      const bufferWasm = await response.arrayBuffer()
      const moduleWasm = await WebAssembly.compile(bufferWasm)
      rubyVM = await DefaultRubyVM(moduleWasm)

      rubyVM.vm.printVersion()
    })()
  }, [isWasmLoaded])

  return (
    <>
      <script
        src="https://cdn.jsdelivr.net/npm/@ruby/wasm-wasi@latest/dist/browser.umd.js"
        async
      ></script>
      <div
        id="wasm-container"
        style={{
          margin: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <Heading>Wasm Ruby</Heading>
        <Text>
          左のテキストエリアにコードを入力して実行を押すと実行結果が左に表示される。
          <br />例 : 1 + 1
        </Text>

        <Flex align="center" height={textAreaHeight}>
          <Textarea
            flex={5}
            onChange={(e) => {
              setCode(e.target.value)
            }}
            placeholder="Ruby Code Here!!"
            size="sm"
            height="100%"
            borderRadius="1rem"
            resize={'none'}
          ></Textarea>
          <AiFillCaretRight style={{ flex: 1 }} />
          <Text
            flex={5}
            backgroundColor="lightgray"
            width="100%"
            height="100%"
            padding="1rem"
            borderRadius="1rem"
          >
            {execResult}
          </Text>
        </Flex>
        <Center>
          <Button
            width={'4rem'}
            colorScheme="teal"
            onClick={() => {
              try {
                setExecResult(rubyVM.vm.eval(code).toString())
              } catch (err: any) {
                setExecResult(err)
              }
            }}
          >
            実行
          </Button>
        </Center>
      </div>
    </>
  )
}

export default WasmRuby
