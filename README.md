# EcoTrend

E-commerce de produtos sustentáveis, desenvolvido como Check-Point 04 da disciplina de Engenharia de Software (Web Development with JS) da FIAP.

## Sobre o projeto

O EcoTrend reúne produtos voltados a um estilo de vida mais consciente, divididos em quatro categorias: roupas e acessórios sustentáveis, beleza e cuidados pessoais, itens para casa e tecnologia verde. O projeto foi construído em React, com os dados dos produtos vindos de um arquivo JSON buscado de forma assíncrona, carrinho de compras persistido no navegador e uma simulação de checkout com Promises.

## Funcionalidades

- Listagem de produtos carregada via `fetch`, com indicador de carregamento
- Filtro por categoria e por faixa de preço, sem recarregar a página
- Carrinho de compras com adição, remoção e persistência via `localStorage`
- Checkout simulado com `async/await`, exibindo confirmação de pedido ou erro

## Tecnologias

- React
- Vite

## Como rodar localmente

```bash
git clone https://github.com/Apexxon/Ecommerce-ecotread.git
cd Ecommerce-ecotread/ecotrend
npm install
npm run dev
```

O projeto abre em `http://localhost:5173`.

## Equipe

| Nome | RM |
|---|---|
| Mateus Tavares | 571189 |
| Jose | 569037 |
| Enzo | 569630 |
| Donas | 568626 |
| Rafael | 571280 |

## Deploy

