import express from "express";
import cors from "cors";
import atividadesRouter from "./routes/atividadesRouter.js";

const app = express();

app.use(cors({
    origin: "http://localhost:3333",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
}));
app.use(express.json());

app.use("/api/atividades", atividadesRouter);

app.use((req, res) => {
    res.status(404).json({ msg: "Rota não encontrada" });
});

export default app;