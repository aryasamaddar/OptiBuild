import { BudgetManagement } from "@/pages/BudgetManagement";
import { Dashboard } from "./pages/Dashboard";
import { MaterialsManagement } from "@/pages/MaterialsManagement";
import { WorkforceManagement } from "@/pages/WorkforceManagement";
import  Orders  from "@/pages/Order";
import SiteConditions from "./pages/Site-condition";
import { Layout } from "./pages/Layout";
import  TimelinePage  from "./pages/timeline";
import { ProjectContextProvider } from "./Context/projectContext";
import { Routes , Route, BrowserRouter } from "react-router-dom";
import { NewProject } from "./pages/CreateProject";
export default function App ()  {
    return(
        <ProjectContextProvider>
            <BrowserRouter>
            <Routes>
                <Route path='/create' element={ <NewProject />} />
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path='/site-conditions' element={<SiteConditions/>}/>
                    <Route path='/orders' element={<Orders/>}/> 
                    <Route path='/workforce' element={<WorkforceManagement/>}/>
                    <Route path='/materials' element={<MaterialsManagement/>}/> 
                    <Route path='/budget' element={<BudgetManagement/>}/>
                    <Route path='/timeline' element={<TimelinePage/>}/>
                </Route>
            </Routes>
            </BrowserRouter>
        </ProjectContextProvider>
    );
}