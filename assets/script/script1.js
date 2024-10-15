// Adicionar um novo lembrete ao localStorage e à tela
document.getElementById('addBtn')?.addEventListener('click', function() {
    const lembreInput = document.getElementById('lembreInput')
    const horaInput = document.getElementById('horaInput')
    
    const lembreText = lembreInput.value.trim()
    const horaText = horaInput.value

    if (lembreText && horaText) {
        let lembretes = JSON.parse(localStorage.getItem('lembretes')) || []
        lembretes.push({ text: lembreText, hora: horaText })
        localStorage.setItem('lembretes', JSON.stringify(lembretes))
        lembreInput.value = ''
        horaInput.value = ''   
        alert('Lembrete adicionado!')
        renderLembrete(lembreText, horaText, lembretes.length - 1)
    } else {
        alert("Por favor, preencha todos os campos!")
    }
})

// Função para remover o lembrete
function removeLembrete(index) {
    if (confirm('Você tem certeza que deseja remover este lembrete?')) {
        let lembretes = JSON.parse(localStorage.getItem('lembretes')) || []
        lembretes.splice(index, 1)
        localStorage.setItem('lembretes', JSON.stringify(lembretes))

        // Remove o lembrete do DOM sem recarregar a página
        const lembreteElement = document.querySelector(`.lembrete-${index}`)
        if (lembreteElement) {
            lembreteElement.remove()
        }
    }
}

// Função para carregar e renderizar os lembretes salvos
function loadLembretes() {
    const lembretesContainer = document.getElementById('lembretesContainer')
    const lembretes = JSON.parse(localStorage.getItem('lembretes')) || []

    lembretes.forEach((lembrete, index) => {
        renderLembrete(lembrete.text, lembrete.hora, index)
    })
}

// Função para renderizar um lembrete na tela
function renderLembrete(text, hora, index) {
    const lembretesContainer = document.getElementById('lembretesContainer')

    const bloco = document.createElement('div')
    bloco.classList.add('bloco', `lembrete-${index}`)// Adiciona uma classe específica para o lembrete
    bloco.innerHTML = ` <h3>${text}</h3> <h6>${hora}</h6><button class="botao-remover" onclick="removeLembrete(${index})">Remover</button>`

    lembretesContainer.appendChild(bloco)
}

// Carrega os lembretes ao abrir a página
if (document.getElementById('lembretesContainer')) {
    loadLembretes()
}
