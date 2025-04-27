document.addEventListener("DOMContentLoaded", function () {
    // Array de receitas com informações de detalhes
    const receitas = [
        {
            id: 'f1',
            nome: 'Rocambole de doce de leite',
            imagem: 'Roco.jpg',
            descricao: 'Delicioso rocambole macio recheado com doce de leite, um lanche da tarde ou uma sobremesa mineira clássica! você irá se apaixonar!',
            ingredientes: ['4 ovos', '2 xícaras (chá) de açúcar', '1 colher (sobremesa) de fermento em pó', '8 colheres (sopa) de água','2 xícaras (chá de farinha de trigo','1 lata de doce de leite', 'Coco ralado para polvilhar'],
            modoPreparo: '1. Bata as gemas com a água, junte o açúcar e continue batendo. Coloque a farinha de trigo, o fermento em pó e por último, as claras em neve. Leve para assar em uma assadeira retangular, rasa e comprida, untada com margarina e polvilhada com farinha de trigo. Depois de assada, vire ainda quente num pano de prato úmido. Espalhe o doce de leite sobre esta massa e, com ajuda do pano de prato, enrole o rocambole. Depois de enrolado, a borda deve ficar para baixo. Cubra com doce de leite e polvilhe coco ralado. OBS: Tempo de 1 hora.'
        },
        {
            id: 'f2',
            nome: 'Tutu de feijão',
            imagem: 'Tutu-de-Feijao-a-Moda-Mineira.webp',
            descricao: 'Tradicional prato mineiro, um estilo diferente e igualmente gostoso de comer feijão.',
            ingredientes: ['2 xícaras de feijão cozido','Arroz', 'Feijao', '100 g de bacon picado em cubinhos', '1 xícara de cheiro verde picado (opcional salsão)', 'Farinha de mandioca crua','Óleo de milho ou soja','1 cebola pequena picada em cubinhos','3 dentes de alho picadinhos','1 gomo de linguiça calabreza cortada em rodelas','Orégano, sal e pimenta do reino a gosto'],
            modoPreparo: '1. Fritar a cebola, o alho, o bacon e a lingüiça em uma frigideira grande. 2. Junte o feijão, os temperos e o cheiro verde e por fim a farinha até dar o ponto desejado, mais cremoso ou mais sequinho. 3. Sirva quente com arroz branco e bisteca de porco.'
        },
        {
            id: 'f3',
            nome: 'Pão de queijo (Mineiro)',
            imagem: 'pq.webp',
            descricao: 'Pão de queijo quentinho e saboroso, típico de Minas Gerais.',
            ingredientes: ['4 copos (americanos) de polvilho doce (500 g)', '2 copos (americano) de leite (300 ml)', '2 ovos grandes', 'óleo para untar','1 colher (sopa) de sal a gosto','1 copo (americano) de óleo (150 ml)', '4 copos (americano) de queijo meia cura ralado'],
            modoPreparo: '1. Coloque o polvilho em uma tigela grande. 2. À parte, aqueça o sal, o leite e o óleo. 3. Quando ferver, escalde o polvilho com essa mistura, mexa muito bem para desfazer pelotinhas. 4. Deixe esfriar. 5. Acrescente os ovos, um a um, alternando com o queijo e sovando bem após cada adição. 6. Unte as mãos com óleo, se necessário. 7. Enrole bolinhos de 2 cm de diâmetro e coloque-os em uma assadeira untada. 8. Leve ao forno médio (180º C), preaquecido. 9. Asse até ficarem douradinhos.'
        },
        {
            id: 'f4',
            nome: 'Bolo de fubá',
            imagem: 'fuba.webp',
            descricao: 'Bolo de fubá simples e saboroso, perfeito para o lanche.',
            ingredientes: ['4 ovos', '3 xícaras de açúcar', '1 e 1/2 xícara de fubá', '100 g de queijo ralado', '4 xícaras de leite', '2 colheres de farinha de trigo', '2 colheres de margarina', '1 colher de fermento em pó'],
            modoPreparo: '1. Em um liquidificador, misture todos os ingredientes até obter uma consistência cremosa. 2. Despeje a massa em uma forma untada e polvilhada com farinha de trigo. 3. Asse em forno médio (180° C), preaquecido, por 40 minutos. 4. Sirva frio.'
        },
        {
            id: 'f5',
            nome: 'Feijoada tradicional',
            imagem: 'Feijoada.webp',
            descricao: 'Feijoada completa com carnes e feijão preto, servida com arroz.',
            ingredientes: ['1 kg de feijão preto', '3 gomos de paio', '1 kg de lombo salgado', '500 g de costelinha salgada', '3 cebolas picadas', 'Óleo para frituras', '50 g de salsinha desidratada', '500 g de couve manteiga', '3 gomos de linguiça defumada de calabresa', '500 g de Jerked Beef', '200 g de bacon', 'Laranjas', '1 cabeça de alho picados', '3 folhas de louro', '10 litros de água fervente (3 chaleiras)'],
            modoPreparo: 'Na véspera, lave as carnes salgadas e deixe de molho com água corrente. Deixe o feijão de molho também. Pela manhã, troque a água das carnes, retire a gordura e corte-as. Cozinhe as carnes na pressão por 40 minutos e o feijão por 30 minutos. Retire a pele da linguiça e do paio, corte-os e reserve. Refogue o bacon, alho e cebola, adicione ao feijão com louro e as carnes. Cozinhe tudo junto, ajustando o sal e deixando ferver por 10 minutos. Sirva com arroz, couve refogada e laranja. Para a couve, refogue a cebola, alho e bacon, depois adicione a couve e cozinhe por 2 minutos.'
        },
        {
            id: 'f6',
            nome: 'Doce de leite caseiro',
            imagem: 'doce-de-leite-blog-6-1024x528.jpg',
            descricao: 'Doce de leite cremoso e delicioso, perfeito para sobremesas.',
            ingredientes: ['2 litros de leite', '4 xícaras de açúcar'],
            modoPreparo: '1. Coloque o leite e o açúcar em uma panela grande de fundo largo. 2. Leve ao fogo médio, mexendo sempre com uma colher de pau, até obter fervura (cerca de 15 minutos). 3. Diminua o fogo e continue mexendo até obter um doce marrom claro de consistência cremosa (cerca de 45 minutos). 4. Passe o doce para um refratário, deixe esfriar bem e sirva colheradas em pratos de sobremesa com fatias de queijo branco.'
        }
    ];

    // Se estivermos na página inicial (index.html), configurar os links de receita
    if (document.body.contains(document.querySelector('.f1'))) {
        const receitasLinks = document.querySelectorAll('.f1, .f2, .f3, .f4, .f5, .f6');

        receitasLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const receitaId = link.className; // Ex: f1, f2, etc.
                const receita = receitas.find(r => r.id === receitaId);

                // Armazenando os detalhes da receita no sessionStorage
                sessionStorage.setItem('receita', JSON.stringify(receita));

                // Redireciona para a página de detalhes
                window.location.href = 'detalhes.html?id=' + receitaId;
            });
        });
    }

    // Se estivermos na página de detalhes (detalhes.html), exibir os detalhes da receita
    if (document.body.contains(document.querySelector('.detalhes-receita'))) {
        // Recuperando o ID da receita da URL
        const urlParams = new URLSearchParams(window.location.search);
        const receitaId = urlParams.get('id');  // Ex: f1, f2, etc.

        // Encontrando a receita correspondente
        const receita = receitas.find(r => r.id === receitaId);

        if (receita) {
            // Preenchendo os campos com os dados da receita
            document.getElementById('nome-receita').textContent = receita.nome;
            document.getElementById('imagem-receita').src = receita.imagem;
            document.getElementById('imagem-receita').alt = receita.nome;
            document.getElementById('descricao-receita').textContent = receita.descricao;

            // Listando os ingredientes
            const ingredientesList = document.getElementById('ingredientes');
            receita.ingredientes.forEach(ingrediente => {
                const li = document.createElement('li');
                li.textContent = ingrediente;
                ingredientesList.appendChild(li);
            });

            // Exibindo o modo de preparo
            document.getElementById('modo-preparo').textContent = receita.modoPreparo;
        } else {
            // Se não houver dados de receita no sessionStorage ou id inválido, redireciona para a página inicial
            window.location.href = 'index.html';
        }
    }
});

