## Testando a API pela documentação Swagger

Com o servidor rodando (`npm run dev`), acesse `http://localhost:3333/api-docs` 
e siga o roteiro abaixo — dá pra testar a API inteira sem terminal:

1. `POST /api/cliente` → **Try it out** → cria um cliente novo.
2. `POST /api/auth/login` → copie o `token` da resposta → clique em **Authorize**, 
   cole o token e confirme.
3. `GET /api/exemplar` → escolha um `exemplarId` com `statusDisponibilidade: "Disponivel"`.
4. `POST /api/emprestimo` com esse `exemplarId` → deve retornar `201`, 
   e o exemplar passa a `Emprestado`.
5. `POST /api/emprestimo` de novo, mesmo `exemplarId` → `400`, com a mensagem 
   de indisponibilidade (RN01) exatamente como documentada.
6. `PATCH /api/emprestimo/{id}/devolver` (use o `emprestimoId` retornado no passo 4) 
   → `200`, exemplar volta a `Disponivel`.

## Exportando a coleção para Insomnia/Postman

O endpoint `GET /api-docs.json` expõe o documento OpenAPI completo.

- **Insomnia:** Create → Import → URL → `http://localhost:3333/api-docs.json`
- **Postman:** Import → Link → mesma URL

Isso gera uma coleção pronta com todas as rotas documentadas.

## Documentação em produção

O `apis` em `src/config/swagger.ts` varre tanto `src/routes/*.ts` (dev) quanto 
`dist/routes/*.js` (produção) — o `tsc` preserva os comentários `@openapi` no 
JavaScript compilado, então `npm start` (após `npm run build`) serve a mesma 
documentação normalmente.