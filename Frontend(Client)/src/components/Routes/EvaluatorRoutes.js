import Evaluatornav from "../Evaluator/Evaluatornav";
import EvaluatorDashboard from "../Evaluator/EvaluatorDashboard";

import { Route, Routes } from "react-router-dom";

import FolderEvaluation from "../Evaluator/FolderEvaluation";
import Sos from "../PdfTemplates/Sos";

function EvaluatorRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Evaluatornav />}>
        <Route path="/Dashboard" element={<FolderEvaluation />} />
        <Route path="/sos" element={<Sos />} />
      </Route>
    </Routes>
  );
}

export default EvaluatorRoutes;
