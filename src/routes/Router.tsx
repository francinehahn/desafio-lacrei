import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage/HomePage"
import { ProfessionalPage } from "../pages/ProfessionalPage/ProfessionalPage"
import { UserPage } from "../pages/UserPage/UserPage"

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="/pessoa-usuaria" element={<UserPage/>}/>
                <Route path="/profissional" element={<ProfessionalPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}