import { Client } from 'pg';

const client = new Client({
    connectionString: "postgresql://luiz_admin:password123@localhost:5432/AtividadesBD"
});

async function execute() {
    await client.connect();

    await client.query(
        "INSERT INTO atividade (descricao, projeto_id) VALUES ($1, $2)",
        ['Finalizar documentação técnica', 1]
    );

    await client.query(
        "UPDATE projeto SET lider_id = $1 WHERE id = $2",
        [2, 1]
    );

    const result = await client.query(`
        SELECT p.nome AS projeto, a.descricao AS atividade 
        FROM projeto p 
        LEFT JOIN atividade a ON a.projeto_id = p.id
    `);

    console.table(result.rows);
    await client.end();
}

execute();