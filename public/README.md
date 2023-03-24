# CHAT ALPACA

*Chat Alpaca* é uma interface web para interagir com o Alpaca como se fosse o chatgpt

#### 1 **Dependencias**

- npm >= 8.5.5
- Nodejs >= v16.15.0

#### 2 **Instalação**

- `npm install`

#### 3 **Iniciação**

- Crie o seu `.env` com base no `.env.example`
- Baixe o [Modelo 7b](https://huggingface.co/Sosaka/Alpaca-native-4bit-ggml/blob/main/ggml-alpaca-7b-q4.bin)
- Coloque-o dentro da pasta raiz do projeto
- rode o comando `npm run start`
- acesse o [Localhost na porta 3000](http://localhost:3000)

##### 4 **Créditos**

- [antimatter15 - alcapa.cpp](https://github.com/antimatter15/alpaca.cpp)

This combines [Facebook's LLaMA](https://github.com/facebookresearch/llama), [Stanford Alpaca](https://crfm.stanford.edu/2023/03/13/alpaca.html), [alpaca-lora](https://github.com/tloen/alpaca-lora) and [corresponding weights](https://huggingface.co/tloen/alpaca-lora-7b/tree/main) by Eric Wang (which uses [Jason Phang's implementation of LLaMA](https://github.com/huggingface/transformers/pull/21955) on top of Hugging Face Transformers), and [llama.cpp](https://github.com/ggerganov/llama.cpp) by Georgi Gerganov. The chat implementation is based on Matvey Soloviev's [Interactive Mode](https://github.com/ggerganov/llama.cpp/pull/61) for llama.cpp. Inspired by [Simon Willison's](https://til.simonwillison.net/llms/llama-7b-m2) getting started guide for LLaMA. [Andy Matuschak](https://twitter.com/andy_matuschak/status/1636769182066053120)'s thread on adapting this to 13B, using fine tuning weights by [Sam Witteveen](https://huggingface.co/samwit/alpaca13B-lora).