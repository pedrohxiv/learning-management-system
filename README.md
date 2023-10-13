# Plataforma de Gerenciamento de Ensino - LMS

## Descrição do Projeto

A Plataforma de Gerenciamento de Ensino (LMS) oferece uma experiência educacional envolvente e interativa para alunos e professores. Utilizei as tecnologias mais recentes, incluindo Next.js 13 com App Router, Prisma como ORM, Stripe para pagamentos, e muitas outras, para criar uma plataforma robusta e intuitiva.

## Principais Funcionalidades

- **Navegação e Filtro de Cursos:** Os alunos podem explorar uma variedade de cursos e filtrá-los de acordo com suas preferências e interesses.

- **Compra de Cursos com Stripe:** Integrei o Stripe para processar pagamentos de forma segura e fácil, permitindo aos alunos comprar cursos de maneira conveniente.

- **Marcação de Capítulos:** Os alunos podem marcar capítulos como concluídos ou não concluídos, acompanhando seu progresso de aprendizado.

- **Calculadora de Progresso:** A plataforma calcula automaticamente o progresso de cada curso com base nos capítulos marcados como concluídos, proporcionando uma visão clara do progresso do aluno.

- **Dashboard do Aluno:** Os alunos têm acesso a um painel personalizado que exibe seus cursos, progresso e outras informações relevantes.

- **Modo Professor:** Os professores têm a capacidade de criar novos cursos e capítulos, além de gerenciar o conteúdo do curso.

- **Reordenação Fácil de Capítulos:** Os professores podem reorganizar a ordem dos capítulos usando a funcionalidade de arrastar e soltar, facilitando a organização do conteúdo do curso.

- **Upload de Recursos Multimídia:** Os professores podem fazer upload de imagens, anexos e vídeos utilizando o UploadThing, proporcionando uma experiência multimídia rica.

- **Processamento de Vídeo com Mux:** Utilizei o Mux para processar vídeos, garantindo alta qualidade e desempenho na reprodução.

- **Reprodutor de Vídeo HLS:** Implementei um reprodutor de vídeo HLS usando Mux para uma experiência de visualização de vídeo fluida e eficaz.

- **Editor de Texto Rico:** A plataforma oferece um editor de texto rico para a descrição dos capítulos, permitindo formatação avançada e apresentação atraente do conteúdo.

- **Autenticação Segura com Clerk:** Utilizei o Clerk para autenticação, garantindo que os dados dos alunos e professores estejam seguros e protegidos.

- **ORM Eficiente com Prisma:** Implementei uma camada de banco de dados eficiente usando Prisma, garantindo acesso rápido e seguro aos dados do sistema.

## Dependências

A plataforma utiliza várias dependências para garantir seu funcionamento suave. Algumas das principais dependências incluem:

- `@clerk/nextjs`: ^4.25.3
- `@hello-pangea/dnd`: ^16.3.0
- `@hookform/resolvers`: ^3.3.1
- `@mux/mux-node`: ^7.3.2
- `@mux/mux-player-react`: ^2.0.1
- `@prisma/client`: ^5.4.1
- `@radix-ui/react-alert-dialog`: ^1.0.5
- `@radix-ui/react-checkbox`: ^1.0.4
- `@radix-ui/react-dialog`: ^1.0.5
- `@radix-ui/react-dropdown-menu`: ^2.0.6
- `@radix-ui/react-label`: ^2.0.2
- `@radix-ui/react-popover`: ^1.0.7
- `@radix-ui/react-progress`: ^1.0.3
- `@radix-ui/react-separator`: ^1.0.3
- `@radix-ui/react-slot`: ^1.0.2
- `@radix-ui/react-toast`: ^1.1.5
- `@tanstack/react-table`: ^8.10.6
- `@types/node`: ^20.8.3
- `@types/react`: ^18.2.25
- `@types/react-dom`: ^18.2.11
- `@uploadthing/react`: ^5.6.2
- `autoprefixer`: ^10.4.16
- `axios`: ^1.5.1
- `class-variance-authority`: ^0.7.0
- `clsx`: ^2.0.0
- `cmdk`: ^0.2.0
- `eslint`: ^8.51.0
- `eslint-config-next`: ^13.4.12
- `lucide-react`: ^0.284.0
- `next`: ^13.4.12
- `postcss`: ^8.4.31
- `prisma`: ^5.4.1
- `query-string`: ^8.1.0
- `react`: ^18.2.0
- `react-confetti`: ^6.1.0
- `react-dom`: ^18.2.0
- `react-dropzone`: ^14.2.3
- `react-hook-form`: ^7.47.0
- `react-icons`: ^4.11.0
- `react-quill`: ^2.0.0
- `recharts`: ^2.8.0
- `stripe`: ^13.10.0
- `tailwind-merge`: ^1.14.0
- `tailwindcss`: ^3.3.3
- `tailwindcss-animate`: ^1.0.7
- `typescript`: ^5.2.2
- `uploadthing`: ^5.7.1
- `zod`: ^3.22.4
- `zustand`: ^4.4.3

## Como Executar o Projeto

1. Clone este repositório em sua máquina local.
2. Certifique-se de ter o Node.js e o npm (ou yarn) instalados.
3. Instale as dependências do projeto utilizando o seguinte comando:

```bash
npm install
# ou
yarn install
```

4. Crie um arquivo `.env` na raiz do projeto com as seguintes chaves e seus respectivos valores:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=seu_valor_aqui
CLERK_SECRET_KEY=seu_valor_aqui
NEXT_PUBLIC_CLERK_SIGN_IN_URL=seu_valor_aqui
NEXT_PUBLIC_CLERK_SIGN_UP_URL=seu_valor_aqui
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=seu_valor_aqui
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=seu_valor_aqui
DATABASE_URL=seu_valor_aqui
UPLOADTHING_SECRET=seu_valor_aqui
UPLOADTHING_APP_ID=seu_valor_aqui
MUX_TOKEN_ID=seu_valor_aqui
MUX_TOKEN_SECRET=seu_valor_aqui
STRIPE_API_KEY=seu_valor_aqui
NEXT_PUBLIC_APP_URL=seu_valor_aqui
STRIPE_WEBHOOK_SECRET=seu_valor_aqui
NEXT_PUBLIC_TEACHER_ID=seu_valor_aqui
```

Certifique-se de substituir `seu_valor_aqui` pelos valores corretos de cada chave.

5. Para iniciar o servidor de desenvolvimento, utilize o seguinte comando:

```bash
npm run dev
# ou
yarn dev
```

6. Acesse a plataforma em `http://localhost:3000` e comece a explorar e interagir com os cursos educacionais oferecidos.
