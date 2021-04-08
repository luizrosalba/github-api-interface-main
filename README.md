# Criando um Front-End totalmente componentizado na prática com ReactJs da Digital Innovation One 
## Luiz Fernando Rosalba - [http://luizrosalba](https://luizrosalba.netlify.app/)
## Projeto entregue como Lab - 
## Professor : Matheus Benites 

## Parte 1 Entendendo Responsividade
- Consenso : Mantenha Responsividade única 
- Ex: Campo de login deve ser um componente tratado que apenas recebe o login 
- Não fazer componentes com várias funcões 
- Ex: Mostra os dados do usuário e além disso uma lista de repositorios. Isso faz que o componente não seja reutilizável 
- Responsabilidade, Manutenção, Extensibilidade e clean code

![Capturar](https://user-images.githubusercontent.com/676230/114019179-769b0100-9844-11eb-97fb-68f66dea55ea.PNG)

- Vamos usar a API do GITHUB 
- Cada componente em um contexto 

## Parte 2 Transformando a interface em Lego
-  Mantenha Responsividade única 
## Parte 3 Transformando nosso lego em interface 
- Set-ExecutionPolicy RemoteSigned
- yarn start
- Repositories renderiza os repositorios 
- Stared renderiza os repositorios com estrela 
- styled-components
- Provider : GithubProvider a ContextAPI foi usada para distribuir os dados do usuário
- ResetCss usa o reset style do styled-components

```Js
import { createGlobalStyle } from "styled-components";

export const ResetCSS = createGlobalStyle`

```
Sobre Context API 

<p> Lembrando : Contexto (context) é usado principalmente quando algum dado precisa ser acessado por muitos 
componentes em diferentes níveis.Use contexto moderadamente uma vez que isto pode dificultar a reutilização de
componentes. Contexto (context) disponibiliza uma forma de passar dados entre a árvore de componentes 
sem precisar passar props manualmente em cada nível. 
<a href="https://pt-br.reactjs.org/docs/context.html">Mais sobre</a>
</p>


Sobre API 


<p> Lembrando : Uma API simples é um endereço que ao ser consultado fornece conteúdo na maioria das vezes por JSON
que pode ser consumido por uma aplicação 
</p>

- Provider guarda e busca os dados 
- Componentes filhos do provider 
- Botão buscar -> api.get user -> estado do provider 
- Qualquer lugar que conheça o provider será atualizado (Single source of Truth)
- Usamos o axios (HTTP mais facil que Fetch)
- Usando styles Components : 

```JS
import styled from "styled-components";
export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;
```
e no consumidor : 
``` JS 
import * as S from "./styled";
 <S.WrapperTabs
    selectedTabClassName="is-selected"
    selectedTabPanelClassName="is-selected"
 >
```

- Pergunta constante : Quais componentes podem ser quebrados ? 
- 100 linhas já é grande para um componente 
  
## Extra: 

- usando forms 
  
![Capturar](https://user-images.githubusercontent.com/676230/114026562-c1b91200-984c-11eb-8e5a-d579bb20cb91.PNG)


### Features

- Search infos by username
- Search repo by username
- Search starred by username

### Preview

Print of the finished project.

![plot](./image/snapshot-1.png)

### Libraries used

- [axios](https://www.npmjs.com/package/axios)
- [react-tabs](https://www.npmjs.com/package/react-tabs)
- [styled-components](https://styled-components.com/)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About project

This repository was created in order to show how we can create a frontend application with reusable components.

We will create an application using the github public api.
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
