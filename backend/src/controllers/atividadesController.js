import { atividadesModel } from "../models/atividadesModel.js";

export const createAtividade = async (req, res) => {
    try{
        const { titulo, descricao, tipo } = req.body;

        const atividade = await atividadesModel.create({
            titulo,
            descricao,
            tipo
        });
        res.status(201).json(atividade);
    } catch (error) {
        console.log(error.message);
        res.status(400).json({msg: "Erro ao criar atividade"});
    }
}