import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HeroPage = lazy(() => import("../pages/HeroPage/HeroPage"));
const HeroesPage = lazy(() => import("../pages/HeroesPage/HeroesPage"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/" element={<HeroesPage />} />
        <Route path="/hero" element={<HeroPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
