# Comentário Popular

## Como contribuir?

Contribuições são bem-vindas via PR. Para comentários bíblicos, edite os arquivos em `content/comments/` e envia um pull request para análise. Se tiver dúvidas sobre a estrutura, comece por um arquivo existente e siga o padrão.

Os arquivos estão organizados em pastas

```text
/comments
  |- /at - comentários do Antigo Testamento
    |- introducao.mdx - introdução do AT
    |- Gênesis - diretório do livro
      |- introducao.mdx - introdução do livro
      |- 1.mdx - capítulo
    |- ...
  |- /nt - comentários do Novo Testamento
    |- introducao.mdx - introdução do NT
    |- Mateus - diretório do livro
    |- ...
```

## Guia rápido de edição (MDX)

Os comentários são arquivos `.mdx` com frontmatter. Exemplo mínimo:

```mdx
---
title: Título do capítulo
description: '' // opcional, mas recomendado.
date: 2026-03-04 // data da edição
editors:
  - name: Seu Nome
    github: https://github.com/seu-usuario // seu perfil do Github
---

Texto do comentário...
```

Campos:

- `title`: título do documento.
- `description`: resumo curto (pode ficar vazio).
- `date`: data da última edição.
- `editors`: lista de editores com `name` e `github`.

## Componentes de conteúdo

O projeto Comentário Popular conta com dois componentes que enriquecem o conteúdo adicionando camadas adicionais de estudo. Estes componentes são o Dicionário e a Linha Cronológica.

### Cronologia

Use o componente `Chronology` com filhos `Event` para renderizar uma linha do tempo. Exeplo de uso:

```mdx
<Chronology>
  <Event
    title="Grande Incêndio de Roma"
    description="Resumo do evento."
    start="64dC"
    end="64dC"
    track="1"
    reference={['Tácito', { text: 'Enciclopédia', url: 'https://exemplo.com' }]}
  />
</Chronology>
```

Regras importantes:

- `title` e `description` são obrigatórios. No `title` deve ser informado o nome do evento e em `description`o texto informativo.
- `start` e `end` aceitam número ou texto. Exemplos: `64`, `64dC`, `30 aC`, `30 BC`.
- Se apenas `start` ou `end` for informado, o outro será considerado igual.
- `track` é opcional e define a faixa visual em que o intervalo de tempo será renderizado. A contagem é feita "de cima para baixo" (use `1`, `2`, `3`...). Se omitido, o layout tenta organizar automaticamente.
- `reference` é opcional. Pode ser uma lista de strings ou objetos `{ text, url }`. URLs viram links.

Você pode adicionar quantos eventos desejar dentro de um mesmo componente de cronologia.

### Dicionário

Para acrescentar mais informações ao comentário, utilize o `Dictionary` para definições inline:

```mdx
Vivamus turpis massa, pharetra et efficitur ut, accumsan a nisi. Ut sollicitudin arcu eu mauris feugiat laoreet. <Dictionary entry="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras lacinia tellus dolor, non ornare erat dapibus ac. Cras non odio nulla. Curabitur aliquet orci neque, quis mattis nisl aliquet lacinia.">Integer</Dictionary> mollis sapien quis rutrum finibus. Nam vel varius nibh, in cursus enim.
```

- `entry`: texto com a definição da palavra/verbete.
