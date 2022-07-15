# Comandos
## npm init --y
Cria o package.json e inicializa a aplicação node com os atributos default graças ao --y;

## yarn install
Instala todas as dependências listadas em package.json;

## yarn add -D @types/express
Adiciona dependência @types/express conforme solicitado no erro ao renomear o arquivo index.js para index.ts;

# Dependências
## npm install --global yarn
Instala o yarn que é um gerenciador de pacotes;

## yarn add nodemon
Reinicia o servidor a cada alteração salva no código;

## yarn add express
Framework para facilitar a criação de rotas e comunicação do servidor;

## yarn add -D typescript
Instala typscript como dependência de desenvolvimento;

## yarn tsc index.ts
Executa o arquivo TypeScript e cria um arquivo JavaScript;

## yarn add -D ts-node-dev
Ao executar o arquivo Typescript, um arquivo javascript é criado esse módulo automatiza isso;

## yarn ts-node-dev index.ts
Comando que automatiza: execução arquivo index.ts - criação arquivo index.js - execução arquivo index.js;

## npx tsc --init
Cria o tsconfig.json e inicializa o Typescript na aplicação;

## yarn add -D jest
Instala jest como dependência de desenvolvimento;

## yarn add -D @types/jest
Adiciona os tipos (TypeScript) do jest;

## yarn add -D ts-jest
Instala lib que exibe as opções Run | Debug no código;

## npx jest --init
Inicia o jest e faz um questionario para criar o arquivo jest.config.ts;

## yarn start
Inicia o servidor. Conforme configurado no package.json;

# Estrutura
## /
Diretório de arquivos de configuração;

## /src
Diretório para arquivos de funcionalidades e porta de entrada para o projeto;

## /src/controllers
Diretório para isolar funcionalidades de usuário;

# /src/controllers/mocks
Diretório para objetos que substituem implementações reais em um cenário de teste unitário;

# package.json
## "type": "commonjs",
Habilita a syntax simples de importação 'import' ao inves de 'require';

## "scripts": {
criar "dev": "ts-node-dev src/index.ts", "test": "jest", "build": "rm -rf ./build && tsc" e "start": "nodemon build/";

# tsconfig.json
## "outDir": "./",
Vem comentado por padrão, descomentar e alterar './' para './build';

## "moduleResolution": "node",
Vem comentado por padrão, descomentar;

# jest.config.ts
## testMatch: [...
Vem comentado por padrão, descomentar;

## preset: undefined
Vem comentado por padrão, descomentar e alterar 'undefined' para 'ts-jest';


# Possíveis erros
## Error: Must use import to load ES Module
Alterar o valor "type" do package.json e o "commonjs" de tsconfig.json iguais com "commonjs";

## error An unexpected error occurred: "C:\\Users...\package.json: Unexpected string in JSON at position 206"
Alterar o valor "type" do package.json e o "module" de tsconfig.json iguais com "module";

## Error: Jest: Failed to parse the TypeScript config file C:\Users\...

