# Projeto 5:  EUA Afora

## Visão geral

**Descrição**
**Tecnologias e Técnicas**
**Página no GitHub**

### Descrição

O projeto EUA Afora visa mostrar o mundo existente além das fronteiras do local onde se vive, apresentando diversos lugares em países diferentes com suas paisagens distintas e peculiares. A página exibe um perfil de um explorador que mostra os lugares dos quais ele já visitou. Cada lugar apresentado é postado na forma de um cartão que mostra a imagem do local, e logo abaixo uma descrição informando o nome do mesmo e ao lado um botão de reação. Entretanto, pensando em tornar a página de perfil mais interativa, foi-se aderido no projeto a possibilidade do usuário editar o perfil - adicionando seu nome e o que ele exerce por profissão ou hobbie - em um formulário pop-up que é aberto ao clique no botão de edição; a possibilidade de criar, remover e curtir um cartão; e abrir a imagem do cartão em seu tamanho real ao ser clicada. O principal desafio deste projeto foi a implementação de uma terceira linguagem de programação: JavaScript, que será responsável por trazer maior ineratividade na página web, como já descrito anteriormente.

### Tecnologias e Técnicas

#### Figma

Assim como no projeto anterior, o Figma mais uma vez se torna o "roteiro" para nós artistas da programação, apresentando uma amostra do resultado final do website em ambas resoluções exigidas pelo projeto, juntamente com a aparência dos elementos quando em estado flutuante. Dessa vez, apresentou também o pop-up para adicionar um cartão e um que mostra a imagem do cartão. Como as imagens dos cartões são inseridas pelo seu link, não houve a necessidade de usar um otimizador de imagens.

#### Unidades de Medidas Relativas e Consultas de Mídia

Usado novamente para trazer o conceito responsivo ao projeto, foram usadas as unidades de medidas relativas - como "%", valores decimais para a altura de linha, além das propriedades "max-width" e "max-height" - em conjunto com consultas de mídia e seus pontos de interrupção estabelecidos de acordo com as resoluções apresentadas no Figma (resolução mínima: 320px e resolução máxima: 1280px).

#### Grid Layout e Flexbox

Neste projeto, o layout de grade ganha mais uma vez espaço, juntamente com o Flexbox, para o aninhamento de blocos e elementos.
O Grid Layout se responsabilizou pelo o alinhamento dos cartões, que ocupam grande parte do conteúdo principal, enquanto o Flex se responsabilizou pelo aninhamento de blocos secundários no projeto.

#### Fontes Externas

Conforme exigido pelo projeto, neste projeto foi usado a fonte 'Inter', que foi exportada através de @font-face.

#### Metodologia BEM

Mais uma vez, foi utilizado a estrutura de arquivos da metodologia BEM: a separação do código em diferentes arquivos .css, armazenados em diferentes diretórios: blocks (contém toda a estilização dos blocos separados em vários arquivos .css correspondentes a cada um deles.), imagens (contém todas as imagens do projeto), páginas (contém index.css que conecta todos os blocos.css), vendor (contém materiais externos para o projeto, como fontes e normalize.css), e desta vez, script, que contém toda a parte de programação lógica do projeto.

#### JavaScript e Formulário

Sendo a novidade carro-chefe deste projeto, a linguagem JavaScript entra em cena dando vida ao formulário de edição de perfil. Ao clicar no botão de edição, o formulario deve abrir se sobrepondo à pagina, e já tendo preenchido em seus campos o conteúdo de texto que aparece no perfil por padrão no perfil (nome e função). O formulário deve conter acima um botão close que ao ser clicado deve fechá-lo. Para a edição, temos os campos que serão depois de preenchidos com a nova informação, e logo abaixo um botão "Salvar", que após clicado, deve atualizar a página com os novos valores. Para realizar isso, foram usados: a seleção de elementos DOM: querySelector(); o método "classList" dentro das funções do manipulador, a inserção de novos valores pelo textContent, e por fim, eventos com o addEventListener(). No pop-up com o formulário de adição de cartão não é ocorre muito diferente, o que mudou é que todos os cartões devem ser adicionados em uma função JS, sendo os iniciais obtidos de um vetor, e vir com um ícone de uma lixeira, que possibilita excluir os mesmos cartões. O método closest() em junção com o remove(), se encarregaram disso. Para o botão de curtida, foi-se usado o evt.target para realizar o disparo.

#### JavaScript e Validação de Formulário

Como aprimoramento ao projeto, foi inserido também a validação do formulário. Portanto, se alguns dos campos estiverem vazios, ou inválidos por não atenderem aos requisitos para validação, os botões de envio permanecem inativos.

#### Manipulação de Eventos de Teclado e Mouse

Como uma segunda novidade, os pop-ups poderão ser fechados clicando na sobreposição (overlay) do formulário, ou clicando na tecla "Esc". Isso graças ao "keyup" para o evento de teclado, e "click" para o evento com o mouse.

### Páginas do GitHub

Acredito que depois de ter um breve resumo do que se trata o projeto, e das técnicas/tecnologias usadas para a sua construção, nada será mais esclarecedor que ver com os próprios olhos o resultado final do website. Você poderá conferir através do link:
https://elionayhaddad.github.io/web_project_4_ptbr/
