# 🌐 ConectaComunidade

O **ConectaComunidade** é uma aplicação web que tem como objetivo **fortalecer a comunidade local**, conectando pequenos comerciantes e produtores da região a consumidores interessados em apoiar negócios locais. A plataforma funciona como uma **vitrine digital**, oferecendo visibilidade para empreendedores que muitas vezes não possuem recursos para construir uma presença online robusta.

Este projeto foi desenvolvido como parte da disciplina **Programação Web Front-End** na **UTFPR (2024/02)**.

---

## 🎯 Objetivo

- Apoiar pequenos negócios e produtores locais.
- Incentivar o consumo consciente dentro da comunidade.
- Contribuir para o **ODS 8 – Trabalho Decente e Crescimento Econômico**.

---

## 👥 Público-alvo

- **Pequenos comerciantes e produtores locais** que desejam maior visibilidade.
- **Moradores da comunidade** interessados em descobrir e apoiar negócios locais.

---

## 🛠️ Tecnologias Utilizadas

- ⚡ **HTML5** - Estrutura das páginas
- 🎨 **CSS3** - Estilização e layout responsivo
- 🔧 **JavaScript** - Funcionalidades dinâmicas e interatividade
- 💾 **Local Storage** - Armazenamento local de dados
- 🌐 **DOM API** - Manipulação dinâmica do conteúdo
- ❌ Sem frameworks externos (projeto 100% em código puro)
- ✅ Validação do código com:
  - [W3C Validator](https://validator.w3.org/)
  - [Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/)

---

## 📂 Estrutura do Projeto

```text
PROJETO/
├── css/
│   └── style.css           # Estilos globais do projeto
├── img/
│   ├── hortajpg            # Imagem da Horta da Maria
│   ├── mercearia.jpg       # Imagem da Mercearia do Bairro
│   └── Padaria.jpg         # Imagem da Padaria do Zé
├── js/
│   └── admin.js            # Lógica JavaScript do painel admin
├── admin.html              # Página de administração (Projeto 2)
├── cadastro.html           # Página de cadastro de comércios
├── index.html              # Página principal
└── README.md               # Documentação do projeto
```

---

## 📑 Páginas Implementadas  

### 🏠 Página Principal (`index.html`) - Projeto 1
- Apresenta a proposta da solução e destaca comerciantes locais.  
- Estrutura com **cabeçalho e rodapé fixos**.  
- Menu de navegação com link para Admin.
- Ícones representando categorias de comércio.  
- Caixas com imagens e descrições dos negócios.  
- Rodapé com links para currículos dos integrantes da equipe.  

### 📝 Página de Cadastro (`cadastro.html`) - Projeto 1
- Formulário com os seguintes campos:  
  - Nome do Comércio  
  - Responsável  
  - E-mail  
  - Telefone  
  - Senha  
  - Confirmação de Senha  
- Botão de envio que redireciona para futura página de login.  
- Estrutura semântica em HTML.  

### 👨‍💼 Página Admin (`admin.html`) - Projeto 2
- Painel de administração de usuários
- Segue o mesmo padrão visual do Projeto 1
- Formulário de cadastro com:
  - Nome do Usuário
  - E-mail
- Lista dinâmica de usuários cadastrados
- Funcionalidades completas de gerenciamento

---

## ⚙️ Funcionalidades JavaScript (Projeto 2)

### 📋 Cadastro de Usuários
- ✅ Formulário com validação de campos
- ✅ Captura de nome, e-mail e data de cadastro
- ✅ Armazenamento no **Local Storage** em formato JSON
- ✅ Todos os dados salvos em uma única chave

### 📊 Listagem de Usuários
- ✅ Exibição em lista não ordenada (`<ul>`)
- ✅ Mostra: nome, e-mail e data/hora do cadastro
- ✅ Atualização dinâmica da lista via DOM
- ✅ Formato de data brasileiro (dd/mm/aaaa às hh:mm)

### 🗑️ Exclusão de Usuários
- ✅ **Excluir usuário individual**: remove da lista e do Local Storage
- ✅ **Excluir todos**: limpa toda a lista com confirmação
- ✅ Sincronização entre interface e armazenamento

### 🔍 Pesquisa
- ✅ Campo de busca em tempo real
- ✅ Filtra por nome ou e-mail
- ✅ Atualização dinâmica dos resultados

### 🧹 Outras Funcionalidades
- ✅ Botão para limpar campos do formulário
- ✅ Mensagens visuais quando não há usuários
- ✅ Interface responsiva e intuitiva

---

## 🎯 Critérios de Avaliação Atendidos

| Critério | Pontos | Status |
|----------|--------|--------|
| Função para incluir dados no Local Storage (JSON) | 2,0 | ✅ |
| Função para excluir item específico | 2,0 | ✅ |
| Função para excluir todos os itens | 1,0 | ✅ |
| Função para pesquisar campos do formulário | 2,0 | ✅ |
| Função para limpar campos | 0,5 | ✅ |
| Publicação no GitHub Pages | 0,5 | ✅ |
| Vídeo de apresentação | 2,0 | 🎬 |
| **TOTAL** | **10,0** | |

---

## 💻 Como Executar o Projeto

### Online (GitHub Pages)
Acesse: [Link do GitHub Pages aqui]

### Local
1. Clone o repositório:
```bash
git clone [URL-DO-SEU-REPOSITORIO]
```

2. Navegue até a pasta do projeto:
```bash
cd seu-projeto
```

3. Abra o arquivo `index.html` no navegador ou use um servidor local:
```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server
```

4. Acesse no navegador:
```
http://localhost:8000
```

---

## 🧪 Como Testar as Funcionalidades

### Teste do Cadastro
1. Acesse a página Admin pelo menu
2. Preencha nome e e-mail
3. Clique em "Cadastrar"
4. Verifique se o usuário aparece na lista abaixo

### Teste da Pesquisa
1. Cadastre vários usuários
2. Digite no campo de pesquisa
3. Observe a filtragem em tempo real

### Teste de Exclusão
1. Clique em "Excluir" em um usuário específico
2. Verifique se foi removido
3. Clique em "Excluir Todos"
4. Confirme a ação

### Teste do Local Storage
1. Cadastre usuários
2. Feche e abra o navegador novamente
3. Acesse a página Admin
4. Verifique se os dados persistem

---

## 🚀 Futuras Melhorias  

- 🔐 Implementar sistema de login e autenticação
- 🗄️ Integrar com banco de dados para persistência das informações
- 🛠️ Expandir painel administrativo com mais funcionalidades
- 📱 Melhorar adaptação para dispositivos móveis
- 📊 Adicionar gráficos e estatísticas
- 🔔 Sistema de notificações
- 🌙 Modo escuro (dark mode)

---

## 📚 Conhecimentos Aplicados

### Projeto 1 (HTML/CSS)
- Estruturação semântica com HTML5
- Estilização avançada com CSS3
- Layout responsivo
- Fontes personalizadas (Google Fonts)
- Organização de arquivos e pastas

### Projeto 2 (JavaScript)
- Manipulação do DOM
- Event Listeners
- Local Storage API
- JSON (parse e stringify)
- Funções e métodos JavaScript
- Array methods (filter, forEach, map)
- Template literals
- Datas e formatação
- Validação de formulários

---

## 📖 Documentação Técnica

### Estrutura do Local Storage
```javascript
// Chave: 'usuarios_conecta_comunidade'
// Valor: Array de objetos JSON
[
  {
    "id": 1709123456789,
    "nome": "João Silva",
    "email": "joao@email.com",
    "data": "2025-02-07T14:30:00.000Z"
  },
  ...
]
```

### Principais Funções JavaScript

- `obterUsuarios()` - Recupera usuários do Local Storage
- `salvarUsuarios()` - Salva array de usuários no Local Storage
- `adicionarUsuario()` - Adiciona novo usuário
- `excluirUsuario(id)` - Remove usuário específico
- `excluirTodosUsuarios()` - Limpa todos os dados
- `renderizarLista()` - Atualiza a interface
- `pesquisarUsuarios()` - Filtra usuários na busca

---

## 👨‍💻 Autor  

**Kalebe Silva do Nascimento**  
- Disciplina: *Programação Web Front-End (UTFPR – 2024/02)*  
- Professora: *Rosangela de Fátima Pereira Marquesone*  
- 📧 Email: [kalebesilvanascimento@alunos.utfpr.edu.br]
- 💼 LinkedIn: [https://www.linkedin.com/in/kalebe-exe/]
- 📄 Currículo: [Ver Currículo](https://kalebenascimento.github.io/cv-web/)

---

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais como parte da disciplina de Programação Web Front-End da UTFPR.

---

## 🙏 Agradecimentos

- Professora Rosangela de Fátima Pereira Marquesone
- UTFPR - Universidade Tecnológica Federal do Paraná
- Colegas de turma pelo suporte

---

**⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!**

---