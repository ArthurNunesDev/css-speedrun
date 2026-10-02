# ⚡ CSS Speedrun

> Um jogo interativo para praticar CSS através de desafios progressivos, velocidade, precisão e competição ranqueada.

 [**CSS Speedrun**](https://inspiring-bombolone-599e54.netlify.app/) é um projeto que transforma o aprendizado de CSS em uma experiência próxima de um jogo de speedrun.

A proposta é simples:

1. Ler a estrutura HTML apresentada.
2. Entender exatamente o que o desafio pede.
3. Escrever o seletor CSS correto.
4. Validar a resposta.
5. Resolver o desafio no menor tempo possível.

O projeto começou como uma aplicação simples para testar conhecimento de seletores CSS e está sendo expandido para possuir **múltiplas dificuldades, sistema de tempo, modo ranqueado, ranking por dificuldade e persistência local dos resultados**.

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

| Dificuldade      | Descrição                                 |
| ---------------- | ----------------------------------------- |
| 🟢 **Easy**      | Fundamentos e seletores simples           |
| 🟡 **Medium**    | Combinações e estruturas intermediárias   |
| 🔴 **Hard**      | Seletores e relações mais complexas       |
| ☠️ **Nightmare** | Desafios avançados e combinações difíceis |
| ❓ **???**       | Desafios extremos e especiais             |

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

O **Modo Ranqueado** transforma a conclusão dos desafios em uma competição baseada no tempo total necessário para completar todos os níveis de uma dificuldade.

O fluxo planejado é:

1. O jogador escolhe uma dificuldade.
2. O jogador seleciona **Modo Ranqueado**.
3. Um modal solicita o nome do jogador.
4. O jogador completa todos os níveis da dificuldade.
5. Ao finalizar, o resultado é registrado automaticamente.
6. O sistema calcula a posição do jogador e exibe seu melhor tempo.
7. O resultado é armazenado localmente para permanecer disponível nas próximas sessões.

## 🎮 Funcionalidades do Modo Ranqueado

- 🏁 Botão **Modo Ranqueado** na seleção de dificuldade.
- 👤 Modal para informar o nome do jogador.
- 📝 Registro automático do resultado ao completar todos os níveis.
- 💾 Persistência com **localStorage**.
- 🏆 **Top 10** separado para cada dificuldade.
- 📊 Tela de ranking com abas para alternar entre as dificuldades.
- 📍 Exibição da posição alcançada no ranking.
- ⏱️ Exibição do melhor tempo na tela de conclusão.
- 📱 Interface responsiva para desktop e mobile.
- 🎨 Estilos integrados ao visual atual do CSS Speedrun.

## 📊 Estrutura do ranking

Cada dificuldade possuirá seu próprio ranking, limitado aos **10 melhores resultados**.

Exemplo:

```text
🏆 RANKING — HARD

#   Jogador          Tempo
────────────────────────────
1   Arthur           08.421s
2   PlayerX          09.105s
3   DevCSS           10.337s
...
10  PlayerY          21.441s
```

Os resultados serão organizados pelo menor tempo. Caso um novo resultado entre no Top 10, o ranking será atualizado automaticamente.

## 🏅 Tela de conclusão

Ao completar todos os níveis, a tela de conclusão deverá apresentar:

- tempo final da tentativa;
- melhor tempo do jogador;
- posição alcançada no ranking;
- indicação quando o jogador obtiver um novo recorde pessoal;
- acesso à tela de ranking.

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

A interface deve manter o visual atual do jogo e seguir uma identidade consistente entre as telas.

As novas funcionalidades de ranking devem utilizar os mesmos padrões visuais do CSS Speedrun, incluindo:

- cores;
- bordas;
- espaçamentos;
- tipografia;
- estados de hover;
- estados de seleção;
- feedback de sucesso;
- animações e transições já utilizadas.

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

A interface do CSS Speedrun deve funcionar de forma consistente em diferentes tamanhos de tela:

- Desktop;
- Notebook;
- Tablet;
- Smartphone.

A implementação do sistema ranqueado também deve manter a responsividade, incluindo:

- seleção de dificuldade;
- botão Modo Ranqueado;
- modal de nome;
- tela de conclusão;
- tela de ranking;
- abas de dificuldade;
- tabelas/listas do Top 10;
- controles adequados para telas pequenas.

O objetivo é evitar elementos sobrepostos, textos cortados ou controles difíceis de utilizar em dispositivos móveis.

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

- [x] Organizar os níveis por dificuldade.
- [x] Criar níveis para as dificuldades atuais.
- [x] Criar a dificuldade `???`.
- [ ] Revisar e balancear continuamente os desafios.

## Fase 2 — Gameplay

- [x] Sistema de seleção de dificuldade.
- [x] Cronômetro.
- [x] Registro de tempo por nível.
- [x] Feedback visual de acerto e erro.
- [x] Sistema de dicas.
- [ ] Melhorar continuamente as interações e feedbacks.

## Fase 3 — Sistema ranqueado

- [ ] **Botão "Modo Ranqueado"** na seleção de dificuldade.
- [ ] **Modal para informar o nome do jogador**.
- [ ] **Registro automático de resultados** ao completar todos os níveis.
- [ ] **Ranking persistente com localStorage**, mantendo o Top 10 por dificuldade.
- [ ] **Tela de ranking** com abas por dificuldade.
- [ ] **Exibição da posição** e do melhor tempo na tela de conclusão.
- [ ] **Responsividade completa** para desktop e mobile.
- [ ] **Estilos consistentes** com o visual do jogo.

## Fase 4 — Expansões futuras

- [ ] Estatísticas de desempenho.
- [ ] Histórico de tentativas.
- [ ] Recordes pessoais mais detalhados.
- [ ] Conquistas.
- [ ] Desafios diários.
- [ ] Desafio aleatório.
- [ ] Novas categorias de CSS.
- [ ] Avaliar futuramente um ranking online/global.

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
git clone https://nome-pasta/nome-pasta/css-speedrun.git
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
- dificuldade extrema `???`;
- modo ranqueado em desenvolvimento;
- ranking Top 10 por dificuldade;
- persistência local com `localStorage`;
- tela de conclusão com posição e melhor tempo;
- interface responsiva;
- futuras estatísticas e conquistas.

O próximo foco de desenvolvimento é concluir o sistema ranqueado e sua integração visual com o jogo.

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
