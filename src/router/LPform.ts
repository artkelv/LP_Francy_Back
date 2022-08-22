import express from "express";
import { FormBuss } from "../business/formBuss";
import { FormCont } from "../controller/formCont";
import { FormData } from "../data/formData";

export const LPformRouter = express.Router();

const LPformData = new FormData();
const LPformBuss = new FormBuss(
    LPformData
);

const LPformCont = new FormCont(LPformBuss);
LPformRouter.post("/message", (req, res) => {
    LPformCont.formLP(req, res)
})