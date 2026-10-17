import { DataTypes } from "sequelize";
import { database } from "../config/database.js";

export const atividadesModel = database.define(
    "atividades",
    {
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "O título não pode estar vazio."
                },
                len: {
                    args: [3, 200],
                    msg: "O título deve ter entre 3 e 200 caracteres.",
                }
            },
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "A descrição não pode estar vazia."
                },
                len: {
                    args: [3, 200],
                    msg: "A descrição deve ter entre 3 e 200 caracteres.",
                },
            },
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "O tipo não pode estar vazio."
                },
                isIn: {
                    args: [["projeto", "código", "foto", "video", "relatorio"]],
                    msg: "Tipo inválido. O tipo deve ser 'projeto', 'código', 'foto', 'video' ou 'relatorio'.",
                },
            }
        },
    },
    {
        timestamps: false,
    }
);