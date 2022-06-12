import Evaluatornav from "../Evaluator/Evaluatornav";
import EvaluatorDashboard from "../Evaluator/EvaluatorDashboard";

import { Route, Routes } from "react-router-dom";
import FolderEvaluation from "../FolderEvaluation";
import Profile from "../UserProfile";

function EvaluatorRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Evaluatornav />}>
        <Route path="/Dashboard" element={<FolderEvaluation />} />
        <Route path="/FolderEvaluation" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default EvaluatorRoutes;
