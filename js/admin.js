// Chave para armazenar dados no Local Storage
const STORAGE_KEY = 'usuarios_conecta_comunidade';

// Elementos do DOM
const formCadastro = document.getElementById('formCadastro');
const nomeUsuario = document.getElementById('nomeUsuario');
const emailUsuario = document.getElementById('emailUsuario');
const btnLimpar = document.getElementById('btnLimpar');
const btnExcluirTodos = document.getElementById('btnExcluirTodos');
const listaUsuarios = document.getElementById('listaUsuarios');
const campoPesquisa = document.getElementById('campoPesquisa');

// Função para obter usuários do Local Storage
function obterUsuarios() {
    const dados = localStorage.getItem(STORAGE_KEY);
    return dados ? JSON.parse(dados) : [];
}

// Função para salvar usuários no Local Storage
function salvarUsuarios(usuarios) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(usuarios));
}

// Função para formatar data no padrão brasileiro
function formatarData(data) {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');
    return `${dia}/${mes}/${ano} às ${horas}:${minutos}`;
}

// Função para adicionar usuário
function adicionarUsuario(nome, email) {
    const usuarios = obterUsuarios();
    const novoUsuario = {
        id: Date.now(),
        nome: nome,
        email: email,
        data: new Date().toISOString()
    };
    usuarios.push(novoUsuario);
    salvarUsuarios(usuarios);
    renderizarLista();
}

// Função para excluir usuário específico
function excluirUsuario(id) {
    const usuarios = obterUsuarios();
    const usuariosFiltrados = usuarios.filter(usuario => usuario.id !== id);
    salvarUsuarios(usuariosFiltrados);
    renderizarLista();
}

// Função para excluir todos os usuários
function excluirTodosUsuarios() {
    if (confirm('Tem certeza que deseja excluir todos os usuários?')) {
        localStorage.removeItem(STORAGE_KEY);
        renderizarLista();
    }
}

// Função para limpar campos do formulário
function limparCampos() {
    nomeUsuario.value = '';
    emailUsuario.value = '';
    nomeUsuario.focus();
}

// Função para renderizar a lista de usuários
function renderizarLista(filtro = '') {
    const usuarios = obterUsuarios();
    listaUsuarios.innerHTML = '';

    // Filtrar usuários se houver termo de pesquisa
    const usuariosFiltrados = filtro
        ? usuarios.filter(usuario => 
            usuario.nome.toLowerCase().includes(filtro.toLowerCase()) ||
            usuario.email.toLowerCase().includes(filtro.toLowerCase())
          )
        : usuarios;

    if (usuariosFiltrados.length === 0) {
        listaUsuarios.innerHTML = '<li class="lista-vazia">Nenhum usuário cadastrado.</li>';
        return;
    }

    usuariosFiltrados.forEach(usuario => {
        const li = document.createElement('li');
        li.className = 'usuario-item';
        
        const dataFormatada = formatarData(new Date(usuario.data));
        
        li.innerHTML = `
            <div class="usuario-info">
                <strong>${usuario.nome}</strong>
                <span>${usuario.email}</span>
                <small>Cadastrado em: ${dataFormatada}</small>
            </div>
            <button class="btn-excluir" data-id="${usuario.id}">Excluir</button>
        `;
        
        listaUsuarios.appendChild(li);
    });

    // Adicionar eventos de exclusão aos botões
    const botoesExcluir = document.querySelectorAll('.btn-excluir');
    botoesExcluir.forEach(botao => {
        botao.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            excluirUsuario(id);
        });
    });
}

// Função para pesquisar usuários
function pesquisarUsuarios() {
    const termo = campoPesquisa.value;
    renderizarLista(termo);
}

// Event Listeners
formCadastro.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = nomeUsuario.value.trim();
    const email = emailUsuario.value.trim();
    
    if (nome && email) {
        adicionarUsuario(nome, email);
        limparCampos();
    }
});

btnLimpar.addEventListener('click', limparCampos);

btnExcluirTodos.addEventListener('click', excluirTodosUsuarios);

campoPesquisa.addEventListener('input', pesquisarUsuarios);

// Carregar lista ao iniciar a página
document.addEventListener('DOMContentLoaded', function() {
    renderizarLista();
});