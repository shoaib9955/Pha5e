import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from 'react-router-dom';

import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';

import Conent from '../components/content/Conent';
import Video from "../components/vid/Video";

import Content2 from '../components/content/Content2';
import Content3 from '../components/content/content3';
import Content4 from '../components/content/Content4';

import Ourteam from '../components/navlist/Ourteam';
import Ourvision from '../components/navlist/Ourvision';
import Contact from '../components/navlist/Contact';
import Language from '../components/navlist/Language';


const Layout = () => (
  <>
  
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={
        <>
          <Conent />
          <Video />
          <Content2 />
          <Content3 />
          <Content4 />
        </>
      } />
      <Route path="/our-vision" element={<Ourvision />} />
      <Route path="/our-team" element={<Ourteam />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/language" element={<Language />} />
    </Route>
  )
);

export default function Router() {
  return <RouterProvider router={router} />;
}
