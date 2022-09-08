import Evaluatornav from "../Evaluator/Evaluatornav";
import EvaluatorDashboard from "../Evaluator/EvaluatorDashboard";

import { Route, Routes } from "react-router-dom";

import FolderEvaluation from "../Evaluator/FolderEvaluation";
import Sos from "../PdfTemplates/Sos";
import FolderTemplete from "../Evaluator/FolderTemplete";

function EvaluatorRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Evaluatornav />}>
        <Route path="/Dashboard" element={<FolderEvaluation />} />
        <Route path="/FolderTemplete/:id" element={<FolderTemplete />} />
        <Route path="/sos" element={<Sos />} />
      </Route>
    </Routes>
  );
}

export default EvaluatorRoutes;
