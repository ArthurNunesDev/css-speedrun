# ⚡ CSS Speedrun

> Um jogo interativo para praticar CSS através de desafios progressivos, velocidade, precisão e competição ranqueada.

**CSS Speedrun** é um projeto que transforma o aprendizado de CSS em uma experiência próxima de um jogo de speedrun.

A proposta é simples:

1. Ler a estrutura HTML apresentada.
2. Entender exatamente o que o desafio pede.
3. Escrever o seletor CSS correto.
4. Validar a resposta.
5. Resolver o desafio no menor tempo possível.

O projeto começou como uma aplicação simples para testar conhecimento de seletores CSS e está sendo expandido para possuir **múltiplas dificuldades, sistema de tempo, progresso, ranking competitivo e persistência de resultados**.

---

# 🎮 Sobre o projeto

Em cada desafio, o jogador recebe uma estrutura HTML e precisa escrever um seletor CSS capaz de selecionar exatamente os elementos determinados pelo desafio.

O objetivo não é apenas decorar seletores.

O jogador precisa desenvolver a capacidade de:

- interpretar estruturas HTML;
- identificar relações entre elementos;
- utilizar seletores CSS;
- combinar seletores e combinadores;
- analisar estruturas cada vez mais complexas;
- resolver problemas sob pressão de tempo;
- melhorar velocidade e precisão;
- aprender através da tentativa e erro.

A ideia é que o jogador consiga perceber sua evolução conforme passa por dificuldades maiores.

---

# 🧩 Sistema de dificuldades

Os desafios serão separados por níveis de dificuldade.

| Dificuldade | Descrição |
|---|---|
| 🟢 **Easy** | Fundamentos e seletores simples |
| 🟡 **Medium** | Combinações e estruturas intermediárias |
| 🔴 **Hard** | Seletores e relações mais complexas |
| ☠️ **Nightmare** | Desafios avançados e combinações difíceis |
| ❓ **???** | Desafios extremos e especiais |

## ❓ Dificuldade ???

A dificuldade `???` será uma categoria especial.

A intenção é que seus desafios sejam **aproximadamente 10x mais difíceis que Nightmare**, utilizando combinações e estruturas que exijam muito mais raciocínio.

Não será apenas uma dificuldade com mais elementos na tela.

A complexidade poderá envolver:

- estruturas HTML profundas;
- vários níveis de combinadores;
- múltiplos elementos semelhantes;
- pseudo-classes avançadas;
- `:has()`;
- `:is()`;
- `:where()`;
- `:not()`;
- seletores de atributos;
- combinações de vários conceitos;
- estruturas criadas para dificultar a identificação visual do alvo;
- desafios especiais com soluções extremamente específicas.

---

# 🏁 Sistema Speedrun

O tempo é uma das principais mecânicas do projeto.

Cada desafio poderá registrar informações como:

- ⏱️ tempo para concluir;
- 🔁 quantidade de tentativas;
- ❌ quantidade de erros;
- 💡 utilização de dicas;
- 🏆 melhor tempo;
- 📊 desempenho geral.

A proposta é permitir que o jogador não apenas consiga resolver o desafio, mas tente resolvê-lo cada vez mais rápido.

### Exemplo

```text
Desafio concluído!

Tempo:       12.483s
Tentativas:  2
Erros:       1

Novo recorde pessoal! 🏆
```

---

# 🏆 Modo Ranqueado

Uma das principais expansões planejadas é o **modo competitivo ranqueado**.

Nesse modo, o jogador poderá informar seu nome antes de começar:

```text
╔══════════════════════════════╗
║        CSS SPEEDRUN          ║
║                              ║
║  Digite seu nome:            ║
║  [ Arthur_______________ ]   ║
║                              ║
║       [ JOGAR RANQUEADO ]    ║
╚══════════════════════════════╝
```

Depois disso, seus resultados serão registrados durante os desafios.

## 📊 Ranking

O ranking terá como objetivo registrar os tempos obtidos pelos jogadores.

A ideia é permitir uma competição baseada em:

- nome do jogador;
- dificuldade;
- desafio;
- tempo obtido;
- melhor tempo;
- posição no ranking.

Exemplo conceitual:

```text
🏆 RANKING — HARD

#   Jogador          Tempo
────────────────────────────
1   Arthur           08.421s
2   PlayerX          09.105s
3   DevCSS           10.337s
4   CSSMaster        11.892s
5   PlayerY          13.441s
```

O ranking deverá ser separado por dificuldade e/ou desafio conforme a implementação final.

---

# 💾 Persistência do ranking

Para que os resultados não desapareçam quando a aplicação for fechada, o projeto precisará de uma camada de persistência.

Uma das opções consideradas é utilizar **XML** para armazenar os dados do ranking.

Exemplo conceitual:

```xml
<ranking>
    <player>
        <name>Arthur</name>
        <difficulty>hard</difficulty>
        <level>12</level>
        <time>8.421</time>
    </player>

    <player>
        <name>PlayerX</name>
        <difficulty>hard</difficulty>
        <level>12</level>
        <time>9.105</time>
    </player>
</ranking>
```

### ⚠️ Arquitetura

Como o projeto possui uma interface web, a persistência compartilhada do ranking não deve depender somente do navegador do usuário.

Para um ranking realmente competitivo entre diferentes jogadores, será necessário definir uma solução de armazenamento no lado do servidor.

O XML é uma possibilidade de armazenamento a ser avaliada durante essa etapa.

A arquitetura final poderá evoluir para:

```text
Frontend
   │
   ▼
Sistema de desafios
   │
   ▼
API / Backend
   │
   ▼
Persistência
   │
   ├── XML
   └── ou outra solução definida posteriormente
```

---

# 🧠 Conteúdo de CSS

Os desafios podem abordar diferentes níveis de conhecimento.

## Fundamentos

- elementos;
- classes;
- IDs;
- seletores descendentes;
- seletores filhos;
- seletores de irmãos;
- agrupamento de seletores.

## Seletores intermediários

- `:first-child`;
- `:last-child`;
- `:nth-child()`;
- `:nth-of-type()`;
- seletores de atributos;
- `:not()`;
- combinadores.

## Seletores avançados

- `:is()`;
- `:where()`;
- `:has()`;
- combinações de atributos;
- múltiplos combinadores;
- estruturas HTML profundas;
- seletores compostos.

## Conteúdo futuro

O projeto também poderá evoluir para outros conceitos de CSS:

- especificidade;
- cascata;
- pseudo-elementos;
- estados interativos;
- formulários;
- Flexbox;
- Grid;
- posicionamento;
- responsividade;
- animações;
- transições;
- CSS moderno.

---

# 🧩 Organização dos desafios

Os desafios estão sendo organizados por dificuldade para evitar que toda a lógica fique concentrada em um único arquivo.

Estrutura planejada:

```text
src/
└── js/
    └── puzzle/
        ├── index.js
        │
        ├── easy/
        │   ├── level0.js
        │   ├── level1.js
        │   └── ...
        │
        ├── medium/
        │   ├── level0.js
        │   ├── level1.js
        │   └── ...
        │
        ├── hard/
        │   ├── level0.js
        │   ├── level1.js
        │   └── ...
        │
        ├── nightmare/
        │   ├── level0.js
        │   ├── level1.js
        │   └── ...
        │
        └── unknown/
            ├── level0.js
            ├── level1.js
            └── ...
```

Essa separação facilita:

- manutenção;
- criação de novos desafios;
- revisão de soluções;
- organização;
- testes;
- balanceamento de dificuldade;
- futuras expansões.

---

# 🧪 Validação dos desafios

A validação deve verificar se o seletor informado pelo jogador seleciona exatamente os elementos esperados.

O sistema deverá lidar com:

- seletores válidos;
- seletores inválidos;
- CSS malformado;
- soluções parciais;
- elementos selecionados a mais;
- elementos que deveriam ter sido selecionados;
- soluções equivalentes quando aplicável.

Exemplo:

```text
✓ CORRETO!

Você selecionou todos os elementos necessários.
Tempo: 7.842s
```

Ou:

```text
✕ AINDA NÃO

Você selecionou 2 elementos,
mas o desafio exige 3.
```

---

# 💡 Sistema de dicas

As dicas devem ajudar o jogador sem entregar imediatamente a resposta.

### Dica 1

Uma pista conceitual:

> Observe a relação entre os elementos.

### Dica 2

Uma pista mais específica:

> O elemento desejado é filho direto de `.container`.

### Solução

A resposta pode ser revelada somente quando o jogador decidir utilizá-la.

```css
.container > .target
```

A intenção é incentivar o raciocínio antes da revelação.

---

# 📈 Sistema de progresso

O jogador deverá conseguir acompanhar sua evolução.

Possíveis dados:

- níveis concluídos;
- progresso por dificuldade;
- melhor resultado por desafio;
- melhor tempo;
- quantidade de tentativas;
- quantidade de erros;
- estatísticas gerais;
- recordes;
- conquistas.

Exemplo:

```text
CSS SPEEDRUN

Easy
████████████████████ 100%

Medium
████████████░░░░░░░░ 60%

Hard
██████░░░░░░░░░░░░░░ 30%

Nightmare
██░░░░░░░░░░░░░░░░░░ 10%

???
🔒
```

---

# 🎯 Objetivo do gameplay

A experiência deve combinar três fatores principais:

```text
CONHECIMENTO
     +
PRECISÃO
     +
VELOCIDADE
     =
CSS SPEEDRUN
```

O jogador não precisa apenas saber CSS.

Ele precisa entender a estrutura, encontrar a solução correta e executá-la rapidamente.

---

# 🎨 Interface e experiência

A interface poderá evoluir para deixar o projeto cada vez mais parecido com um jogo.

Melhorias planejadas:

- identidade visual própria;
- seleção de dificuldade;
- cards de desafios;
- editor de código;
- feedback visual de acerto;
- feedback visual de erro;
- animações de conclusão;
- transições entre níveis;
- tela inicial;
- tela de ranking;
- tela de resultados;
- indicadores de tempo;
- destaque dos elementos selecionados.

---

# 🕹️ Interações planejadas

Para aumentar a sensação de gameplay:

- [ ] feedback instantâneo ao testar uma solução;
- [ ] animação quando um elemento é selecionado corretamente;
- [ ] destaque dos elementos selecionados;
- [ ] animação para respostas incorretas;
- [ ] efeito de conclusão do nível;
- [ ] transição para o próximo desafio;
- [ ] atalhos de teclado;
- [ ] tecla para testar;
- [ ] tecla para avançar;
- [ ] tecla para resetar;
- [ ] sistema de foco no editor;
- [ ] feedback para erros de sintaxe.

---

# 📱 Responsividade

O projeto deverá funcionar em diferentes tamanhos de tela:

- Desktop;
- Notebook;
- Tablet;
- Smartphone.

Também estão previstos:

- editor responsivo;
- layout adaptável;
- controles adequados para telas pequenas;
- ranking adaptado para dispositivos móveis.

---

# ♿ Acessibilidade

A evolução do projeto também considera acessibilidade.

Objetivos:

- [ ] navegação completa por teclado;
- [ ] estados de foco visíveis;
- [ ] contraste adequado;
- [ ] feedback que não dependa somente de cor;
- [ ] suporte a `prefers-reduced-motion`;
- [ ] estrutura semântica adequada.

---

# 📚 Expansão do conteúdo

O CSS Speedrun pode evoluir de um jogo focado em seletores para uma plataforma maior de prática de CSS.

Possível organização futura:

```text
Selectors
├── Básicos
├── Combinadores
├── Pseudo-classes
└── Atributos

Layout
├── Flexbox
├── Grid
└── Position

Responsive
├── Media Queries
├── Container Queries
└── Fluid Layout

Visual
├── Colors
├── Typography
├── Shadows
└── Gradients

Animation
├── Transitions
├── Keyframes
└── Motion

Advanced
├── :has()
├── :is()
├── :where()
└── Cascade Layers
```

---

# 🏆 Futuras mecânicas competitivas

Além do ranking básico, algumas possibilidades poderão ser adicionadas posteriormente:

- ranking por dificuldade;
- ranking por desafio;
- recorde pessoal;
- histórico de tentativas;
- melhores tempos;
- estatísticas de desempenho;
- desafios diários;
- desafio aleatório;
- modo contra o tempo;
- combo por respostas consecutivas;
- Boss Levels;
- modo Hardcore;
- desafios secretos;
- conquistas;
- ranking global;
- multiplayer;
- desafio do dia.

Essas mecânicas dependem da evolução da arquitetura de dados e do sistema de persistência.

---

# 🗺️ Roadmap

## Fase 1 — Estrutura dos desafios

- [ ] Organizar todos os níveis.
- [ ] Criar níveis para cada dificuldade.
- [ ] Revisar soluções.
- [ ] Balancear as dificuldades.
- [ ] Remover desafios repetitivos.
- [ ] Criar desafios especiais.
- [ ] Criar a dificuldade `???`.

## Fase 2 — Gameplay

- [ ] Melhorar validação.
- [ ] Melhorar feedback.
- [ ] Adicionar animações.
- [ ] Melhorar interação com o editor.
- [ ] Cronômetro por nível.
- [ ] Registro de tentativas.
- [ ] Sistema de pontuação.

## Fase 3 — Progressão

- [ ] Sistema de progresso.
- [ ] Recordes pessoais.
- [ ] Estatísticas.
- [ ] Conquistas.
- [ ] Desbloqueio de dificuldades.

## Fase 4 — Ranking

- [ ] Criar modo ranqueado.
- [ ] Tela para informar o nome.
- [ ] Registrar resultados.
- [ ] Ranking por dificuldade.
- [ ] Ranking por desafio.
- [ ] Histórico de tempos.
- [ ] Melhor tempo pessoal.
- [ ] Definir regras de classificação.

## Fase 5 — Persistência

- [ ] Definir arquitetura de armazenamento.
- [ ] Avaliar persistência em XML.
- [ ] Criar camada de leitura dos resultados.
- [ ] Criar camada de gravação dos resultados.
- [ ] Integrar o ranking com a persistência.
- [ ] Garantir que resultados não sejam perdidos.
- [ ] Definir solução para ranking compartilhado entre jogadores.

## Fase 6 — Conteúdo avançado

- [ ] Flexbox.
- [ ] Grid.
- [ ] Responsividade.
- [ ] Animações.
- [ ] CSS moderno.
- [ ] Novas categorias de desafios.

---

# 🧱 Estrutura do projeto

A aplicação utiliza uma organização baseada em arquivos separados para HTML, JavaScript, estilos, assets e desafios.

Estrutura geral:

```text
css-speedrun/
│
├── src/
│   ├── assets/
│   ├── js/
│   │   └── puzzles/
│   ├── scss/
│   └── views/
│
├── package.json
├── package-lock.json
├── webpack.config.js
├── LICENSE
└── README.md
```

A estrutura de desafios está sendo reorganizada para separar os níveis por dificuldade.

---

# 🛠️ Tecnologias

O projeto utiliza principalmente:

- **HTML**
- **CSS / SCSS**
- **JavaScript**
- **Webpack**
- **Sass**
- **PostCSS**
- **Autoprefixer**
- **BrowserSync**
- **Prism.js**
- **EasyTimer.js**
- **JS Confetti**
- **Git**
- **GitHub**

---

# 💻 Executando localmente

Clone o repositório:

```bash
git clone https://github.com/ArthurNunesDev/css-speedrun.git
```

Entre na pasta:

```bash
cd css-speedrun
```

Instale as dependências:

```bash
npm i
```

Para gerar a versão de produção:

```bash
npm run build
```

Para executar o ambiente de desenvolvimento:

```bash
npm run start
```

Também é possível utilizar:

```bash
npm run watch
```

O projeto utiliza scripts de build para JavaScript, CSS e HTML.

---

# 🧩 Criando novos desafios

Os desafios ficam dentro da estrutura de puzzles.

Cada desafio deve possuir:

- estrutura HTML;
- elementos-alvo;
- solução esperada;
- possibilidade de dica;
- dificuldade correspondente.

Ao criar um novo desafio, é importante verificar:

1. se a solução seleciona exatamente os elementos esperados;
2. se não existem elementos extras sendo selecionados;
3. se o desafio realmente corresponde à dificuldade;
4. se a solução é consistente;
5. se o desafio possui uma descrição clara.

---

# 📊 Filosofia de dificuldade

A dificuldade não deve ser determinada somente pela quantidade de elementos na tela.

Um desafio pode ser difícil porque exige:

```text
observação
    +
raciocínio
    +
conhecimento de CSS
    +
precisão
```

Isso é especialmente importante para `Nightmare` e `???`.

A categoria `???` deverá representar desafios que exigem uma compreensão muito mais profunda das relações entre os elementos e dos recursos disponíveis no CSS.

---

# 🚧 Status

**Em desenvolvimento 🚧**

O projeto está passando por uma fase de expansão.

A aplicação originalmente tinha uma quantidade pequena de puzzles e uma proposta simples de testar conhecimento de seletores. A nova direção transforma o projeto em uma experiência mais completa, com:

- múltiplas dificuldades;
- desafios progressivos;
- sistema de tempo;
- progresso;
- recordes;
- modo ranqueado;
- ranking;
- persistência de resultados;
- desafios extremos;
- futuras estatísticas e conquistas.

Algumas dessas funcionalidades ainda estão em planejamento e serão implementadas gradualmente.

---

# 🤝 Contribuição

Ideias, correções e melhorias são bem-vindas.

Possíveis formas de contribuição:

- Issues;
- Pull Requests;
- sugestões de novos desafios;
- correções de níveis;
- melhorias de interface;
- novas mecânicas;
- melhorias de acessibilidade;
- sugestões para o sistema de ranking.

---

# 👨‍💻 Autor

Desenvolvido por **Arthur Nunes**.

GitHub:

https://github.com/ArthurNunesDev

Projeto:

https://github.com/ArthurNunesDev/css-speedrun

---

# 📜 Licença

Este projeto utiliza a **MIT License**.

Consulte o arquivo `LICENSE` para os termos completos.

---

# ⚡ CSS Speedrun

**Aprenda CSS. Resolva desafios. Seja mais rápido.**

> O objetivo não é apenas escrever CSS.
>
> É entender o que você está escrevendo.
>
> E conseguir fazer isso cada vez mais rápido.
