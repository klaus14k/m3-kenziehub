## https://kenziehub-klaus14k.vercel.app/

# 1. Componentização
Comece criando os componentes novos, um componente TechList e um TechCard já serão suficientes para lista de tecnologias, será necessário a criação de dois componentes de modais, um modal de criação e um de edição.

Sugestões de nomenclatura: CreateTechModal e EditTechModal

Feito isso, estilize os detalhes dos componentes novos utilizando SASS e os conhecimentos de estilização apresentados em aulas anteriores.

# 2, 3 e 4. Crie um contexto de tecnologias
Crie o contexto de tecnologias e envolva o grupo de componentes que vai precisar do conjunto de funcionalidades. Uma boa sugestão de nomenclatura é TechContext.

# Leitura
É importante observar que não existe uma rota específica para a leitura de tecnologias na Kenzie Hub API; essas informações são fornecidas nas rotas de login e autologin.

Portanto, recomenda-se criar um estado dentro do contexto do usuário e alimentá-lo nas funções de autenticação, compartilhando-o também com o contexto de tecnologia.

Com essa funcionalidade devidamente desenvolvida, é possível compartilhar o estado das tecnologias com o componente de lista e realizar a renderização dinâmica correspondente.

Certifique-se de implementar essa solução de maneira eficaz para garantir o correto funcionamento da aplicação.

# Criação
Para criação, utilize a rota de POST /users/techs/, não se esqueça, além da requisição, será necessário atualizar o estado de tecnologias, para isso, as manipulações de front-end que você está acostumado são excelentes referentes.

Análise sempre a resposta que cada rota fornece, em algumas situações, ela pode ser útil para funcionalidade que estamos desenvolvendo.

Cria a função, trabalhe no modal com os conhecimentos já adquiridos nos projetos anteriores. Renderize um modal por meio de um estado e gerencie o mesmo utilizando seus conhecimentos de React Hook Form. O envio do formulário presente no modal deve executar a função de criação.

# Exclusão
Para exclusão, utilize a rota DELETE /users/techs/:techId, assim como a função de criação, será necessário também realizar de atualização do estado de tecnologias.

Como gatilho de disparo, aplique um evento de clique no botão com ícone de excluir na interface.

# Atualização
Para criar a funcionalidade de atualização, será necessário identificar qual tecnologia o usuário deseja editar, para isso, um estado poderá ser uma excelente solução.

Por isso, crie um estado para está finalidade e compartilhe com a aplicação. Sugestão de nomenclatura: editingTech. Esse estado pode servir condicional para exibir ou não o modal de edição.

Com o estado devidamente criado, utilize o mesmo para relacionar com os valores de cada campo no useForm (values).

Com este estado funcional, trabalhe na função de atualização dentro do contexto, ela vai utilizar a rota PUT /users/techs/:techId, não esqueça de atualizar o estado também.

Por fim, utilize o evento de submit do formulário de edição para disparar a função criada.

Os exemplos apresentados nas aulas podem ser um excelente referência na criação deste conjunto de funcionalidades.
