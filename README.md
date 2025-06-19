# Fetch de descontos para a steam
---
Esse é um projeto simples para entender melhor como funciona o uso de APIs, o uso de JavaScript para criação de servidores e seu uso no backend.
<details>
<summary>Detalhes</summary>

Ferramentas usadas para a criação desse projeto:
-
 - **Node** e seu gerenciador de pacotes **npm**
 - **Framework:** Express.js
 - **Cliente HTTP:** Axios

Para o front-end:
- 
 - Bibliotecas: React com template VITE
</details>

## Como usar o aplicativo
**1º Passo:** Clone o repositório com o terminal
```
git clone https://github.com/mesadebilhar/steamDesconto-react
```
**2º Passo:** Com o terminal aberto, entre na pasta e inicie a requisição da API
```
cd STEAMWEBAPIREACT/steamAPIbackend
node steam.js
```
**3º Passo:** Abra outro terminal ou abra uma janela nele se ele possibilitar e inicie a interface
```
cd steamDesconto-React/steamPromoReact/vite-project
npm run dev
```

Ao abrir o site ele irá mostrar as promoções especiais que tem atualmente na steam\
O endpoint do steam.js é /promos, caso queira ver o JSON.

Material de referência:
-
 - https://expressjs.com/pt-br/5x/api.html
 - https://axios-http.com/ptbr/docs/intro
 - https://axios-http.com/ptbr/docs/instance
 - https://www.youtube.com/watch?v=AX5DWEVurJ0&t
