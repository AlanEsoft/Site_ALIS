const imagens = ['imagens/data_analytics.png', 'imagens/computer_class.png', 'imagens/courses.png', 'imagens/computer_mainetence.png',
                     'imagens/computer_network.png'];
    const titulos = ['ANÁLISE DE DADOS E ENGENHARIA DE SOLUÇÕES', 'TREINAMENTO EM INFORMÁTICA', 'CURSOS E TREINAMENTOS EM GERAL', 
                    'MANUTENÇÃO DE COMPUTADORES', 'INSTALAÇÃO E MANUTENÇÃO DE REDES DE COMPUTADORES'];
    const descricoes = ['Análise dos processos e edição de documentos, cadastros, banco de dados, planilhas, softwares entre outras '+
                       ' ferramentas para aumentar lucros e reduzir custos.', 'Instrução nas principais ferramentas para que seus '+
                       'colaboradores desempenham suas funções com eficiência.', 'Ministração de aulas em diversas áreas do conhecimento'+
                       ' visando capacitá-lo para qualquer desafio. Desde reforço escolar a Business Inteligence.', 'Reparo e manutenção'+
                    ' de computadores e periféricos com possibilidade de disponibilidade 24/7.', 'Instalação e manutenção de redes de '+
                    'computadores e IoT (Dispositos em geral)'];
    const imagensServicos = document.querySelectorAll('.imgServices');
    const botoes = document.querySelectorAll('.btn');
    const titulo = document.querySelector('.titulo');
    const descricao = document.querySelector('.descricao');
    
    let indice = 0;
    let timer;
    
    function trocarImagem() {
        imagensServicos.forEach(imagem => {
            imagem.src = imagens[indice];
        });
        titulo.textContent = titulos[indice];
        descricao.textContent = descricoes[indice];
        indice = (indice + 1) % imagens.length;
    }
    
    function pausar() {
        clearInterval(timer);
    }
    
    function iniciar() {
        timer = setInterval(trocarImagem, 5000);
    }
    
    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
        indice = parseInt(botao.dataset.index);
        trocarImagem();
        pausar();
        setTimeout(iniciar, 30000);
         });
    });
    
    iniciar();
    