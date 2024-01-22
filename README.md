# Meu Campeonato (Frontend)

Este é o frontend do projeto "Meu Campeonato". O frontend é desenvolvido em React.js utilizando Typescript e Vite e implementa a interface do usuário para simular campeonatos de futebol do bairro.

## Tecnologias Utilizadas

- [React.js](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces de usuário.
- [Typescript](https://www.typescriptlang.org/) - Superset JavaScript que adiciona tipagem estática ao código.
- [Vite](https://vitejs.dev) - Ferramenta de construção de projetos frontend
- [Tailwind CSS](https://tailwindcss.com/) - Framework de utilitários CSS para estilização.
- [Material Tailwind](https://www.material-tailwind.com) - BIblioteca de componentes do Material baseada em Tailwind CSS
- [Axios](https://axios-http.com/) - Cliente HTTP para fazer requisições à API do backend.
- [React Hook Form](https://react-hook-form.com/) - Biblioteca para gerenciar formulários no React.
- [Yup](https://github.com/jquense/yup) - Biblioteca para validação de esquemas.
- [Lodash](https://lodash.com/) (opcional) - Utilitários de JavaScript.
- [Material-UI](https://mui.com/) (opcional) - Componentes de interface React com design Material.
- [React Router](https://reactrouter.com/) - Biblioteca para navegação entre páginas no React.
- [React Query](https://react-query.tanstack.com/) - Biblioteca para gerenciamento de estados e dados em aplicações React.

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes requisitos instalados:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

## Configuração

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/meu-campeonato-frontend.git

2. Abra o projeto no seu ambiente de desenvolvimento.

3. Configure as variáveis de ambiente necessárias. No caso só é necessário configurar a variável do enredeço da API, da segunte forma:
    ```bash
    VITE_API_URL = https://suaapi.com

4. Instale as dependências do projeto:
    ```bash
    npm install ou yarn

5. Executando a aplicação:
    ```bash
    npm run dev ou yarn dev
    
## Arquitetura
    A arquitetura dessa aplicação usa um pouco de um conceito de componentização chamado design atômico,
    que consiste em isolar componentes em partes menores e maiores onde as menores partes são átomos e as
    maiores podem ser moléculas ou organismos. Também é feito uma tentativa onde os caomponentes possuem o
    mínimo de lógica possível. COntendo somente lógicas de renderização e regras de negócio ficando isoladas
    na camada service ou helpers. Como estamos usando tailwind, é necessário fazer algumas configurações para
    que ele funcione, como a criação de um css global e cofiguração de tema para ter um controle melhor dos
    design tokens da aplicação. Vamos para a estrutura de pastas e arquivos:

- #### assets
    Aqui guardamos todos os nossos arquivos estáticos, como imagens e textos. 
- #### components
    Aqui guardamos os componentes da aplicação, organizados em atoms, molecules e organisms, 
    seguindo a metodologia de design atômico.
- #### config
    Aqui guardamos as configurações específicas necessárias para o funcionamento da aplicação, como a
    configuração das rotas e api.
- #### context
    Nessa pasta guardamos os contextos da aplicação, que são componentes criados usando um recurso do React
    chamado Context API para auxiliar a gerenciar estados de forma global e evitar prop drilling. No caso
    temos 2 contextos expecíficos: O Global, que é responsável por disponibilizar uma instância do React Query
    para ser usado na aplicação inteira e o Auth, que é responsável por aplicar as regras de autenticação e
    redirecionamento da aplicação
- #### features
    Este diretório é onde ficam guardadas as telas da nossa aplicação e suas particularidades. As features
    estão divididas em 2 subpastas, Championship, que agrupa as telas das funcionalidades da aplicação e suas
    validações e Onboarding, que guarda as telas de login e register e suas validações
- #### hooks
    Pasta que contém os hooks personalizados da aplicação, como por exemplo o useVerifyToken, que é um hook
    responsável por executar a verificação do token atual
- #### models
    Pasta que contem a tipagem das entidades da aplicação. Chamamos de entidades mas elas basicamente são
    correspondentes às DTOs do backend
- #### services
    Aqui mantemos as classes que fazem as requisições para a API. Essas classes tem em comum a herança de uma
    classe base abstrata que tem alguns métodos genéricos para fazer as requisições de acordo com a tipagem
    passada na instância
- #### types
    Esta pasta contém as tipagens utilizadas na aplicação que não são necessáriamente de uma entidade ou
    componente
- #### util
    Pasta que contém os utilitários da aplicação, ou seja, os helpers, enums e demais recursos que podem ser usados em qualquer lugar da aplicação independente do contexto
