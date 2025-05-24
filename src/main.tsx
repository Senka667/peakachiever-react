import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import Blog from './pages/Blog.tsx'
import BlogPost from './pages/BlogPost.tsx'
import Products from './pages/Products.tsx'
import ProductDetail from './pages/ProductDetail.tsx'
import About from './pages/About.tsx'
import Subscribe from './pages/Subscribe.tsx'
import GetStarted from './pages/GetStarted.tsx'
import NotFound from './pages/NotFound.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:slug" element={<ProductDetail />} />
          <Route path="about" element={<About />} />
          <Route path="subscribe" element={<Subscribe />} />
          <Route path="get-started" element={<GetStarted />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
