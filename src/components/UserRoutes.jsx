import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HeroPage = lazy(() => import("../pages/HeroPage/HeroPage"));
const HeroesPage = lazy(() => import("../pages/HeroesPage/HeroesPage"));
const HeroEditPage = lazy(() => import("../pages/HeroEditPage/HeroEditPage"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/" element={<HeroesPage />} />
        <Route path="/hero" element={<HeroPage />} />
        <Route path="/hero/edit/:heroid" element={<HeroEditPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
