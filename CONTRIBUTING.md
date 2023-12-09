# Contribuindo para o Projeto Faísca

Agradecemos por considerar contribuir para o projeto Faísca. Sua colaboração é fundamental para o crescimento e sucesso deste projeto. Aqui estão algumas diretrizes para ajudá-lo a se envolver de forma eficaz.

## Identificando Commits e Tipos

Todos os commits tem um _prefixo_ que identifica o tipo de alteração realizada no projeto.  
Os prefixos servem como identificadores que ajudam a identificar as alterações realizadas no projeto e posteriormente saber o que foi feito logo de cara.

|    Prefixo | Significado                            | Exemplo de Mensagem no Commit           |
| ---------: | :------------------------------------- | :-------------------------------------- |
|  _recurso_ | Novos recursos                         | `'recurso: Adiciona novo recurso'`      |
|    _fix\*_ | Correção de erros                      | `'fix(#id): Arruma recurso'`            |
|     _typo_ | Correção na digitação                  | `'typo: Muda "exempol" para "exemplo"'` |
|     _docs_ | Documentação                           | `'docs: Adiciona README.md'`            |
|   _tarefa_ | Tarefas que não afetam o usuário final | `'tarefa: Atualiza o CI do Vercel'`     |
|   _estilo_ | Alterações no estilo do código         | `'estilo: Atualiza tabs para espaços'`  |
| _refatora_ | Mudanças no código otimização/leitura  | `'refatora: Atualiza função Update()'`  |

### Fix

Os commits de correção de erros são aqueles que corrigem erros. Todos os commits `fix` devem ter uma Issue associada.  
Exemplo:

```sh
fix(#0): Arruma recurso
```

Neste exemplo temos um prefixo de commit `fix(#0)`. O `#0` é uma referência para a Issue com id de 0.

## Como Contribuir

1. Comece por clonar este repositório:

```sh
git clone https://github.com/SegundoInformatica/faisca-ui.git
```

ou

```sh
git clone git@github.com:SegundoInformatica/faisca-ui.git
```

2. Crie uma branch para trabalhar nas suas alterações:

```sh
git checkout -b recurso/nome-recurso
```

3. Realize as alterações:

```sh
git add .
git commit -m "prefixo: Mensagem" -m "Por que fazer isso?"
```

4. Envie as alterações para o repositório:

```sh
git push -u origin recurso/nome-recurso
```

5. Crie um Pull Request.

## Diretrizes Gerais

- Utilize um _prefixo_ para identificar as alterações realizadas no projeto;
- Mantenha o código limpo e siga as convenções de estilo do projeto;
- (OPICIONAL) Crie uma Issue para cada alteração realizada;
- No Pull Request, adicione um título descritivo que seja conciso e detalhado;
- No Pull Request, adicione uma mensagem com as adições e modificações
- Seja respeitoso e colaborativo com outros contribuidores;

## Diretrizes de Estilo

Utilizamos a conveção de [ESLint](https://eslint.org/) para identificar e corrigir problemas no código JavaScript.
Juntamente, temos as configurações herdadas do [ESlint Config Next](https://github.com/vercel/next.js/tree/canary/packages/eslint-config-next).  
Um simples `Format` nos arquivos `*.{js,jsx,ts,tsx}` irá formatar automaticamente o código.

---

_Grupo Faísca &copy; 2023_
