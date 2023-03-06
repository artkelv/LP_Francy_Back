import express from "express";
import { FormBuss } from "../business/formBuss";
import { FormCont } from "../controller/formCont";

export const LPformRouter = express.Router();

const LPformBuss = new FormBuss();

const LPformCont = new FormCont(LPformBuss);
LPformRouter.post("/message", (req, res) => {
    LPformCont.formLP(req, res)
})