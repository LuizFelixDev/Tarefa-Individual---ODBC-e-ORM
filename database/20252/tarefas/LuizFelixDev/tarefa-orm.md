# Tarefa - ODBC e ORM

**Links Úteis:**
- [Scripts SQL (DDL/DML)](../scripts/atividades_bd.sql)
- [Programa Driver Nativo (pg)](./src/native-client.ts)
- [Programa ORM (Prisma)](./src/prisma-client.ts)

---

## Resumo sobre ODBC (em Node.js/TypeScript)
No ecossistema Node.js, embora o termo técnico "ODBC" seja mais comum em ambientes legados ou Windows, utilizamos **Drivers de Banco de Dados** (como o pacote `pg` para PostgreSQL) que cumprem o mesmo papel: fornecer uma interface de baixo nível para enviar comandos SQL puros ao SGBD. É uma abordagem "Raw SQL", onde o desenvolvedor tem controle total sobre a query, mas precisa lidar manualmente com a tipagem e o mapeamento dos resultados.

## Resumo sobre ORM (Prisma Framework)
O **ORM (Object-Relational Mapping)** permite manipular o banco de dados como se estivéssemos lidando com objetos da linguagem de programação. Utilizei o **Prisma**, que é um ORM moderno para TypeScript. Ele gera um cliente tipado automaticamente a partir de um schema, reduzindo erros de tempo de execução e eliminando a necessidade de escrever SQL manual para operações comuns, abstraindo a complexidade das relações.