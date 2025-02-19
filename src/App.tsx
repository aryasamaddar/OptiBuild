
import { BudgetManagement } from "@/pages/BudgetManagement";
import { Dashboard } from "./pages/Dashboard";
import { MaterialsManagement } from "@/pages/MaterialsManagement";
import { WorkforceManagement } from "@/pages/WorkforceManagement";
import { Layout } from "./pages/Layout";
import { ProjectContextProvider } from "./Context/projectContext";
import { Routes , Route, BrowserRouter } from "react-router-dom";
export default function App ()  {
    return(
        <ProjectContextProvider>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path='/workforce' element={<WorkforceManagement/>}/>
                    <Route path='/materials' element={<MaterialsManagement/>}/> 
                    <Route path='/budget' element={<BudgetManagement/>}/>
                </Route>
            </Routes>
            </BrowserRouter>
        </ProjectContextProvider>
    );
}