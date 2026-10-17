import app from "./app.js";
import { database } from "./config/database.js";

const PORT = 3333;

const serveron = async () => {
    try {
        await database.sync();
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error("Erro ao iniciar o servidor:", error);
    }
}

await serveron();