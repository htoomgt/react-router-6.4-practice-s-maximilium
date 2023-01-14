import React from 'react'
import { BrowserRouter, Route,  Routes} from 'react-router-dom';

import RootLayout from './components/RootLayout';
import WelcomePage from './pages/WelcomePage'
import BlogLayout from './pages/BlogLayout';
import BlogPostsPage from './pages/BlogPostsPage';
import PostDetailPage from './pages/PostDetailPage';
import NewPostPage from './pages/NewPostPage';  


const App = () => {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/blog" element={<BlogLayout />} >
            <Route index element={<BlogPostsPage />} />
            <Route path=":id" element={<PostDetailPage />} />            
          </Route>
          <Route path="/blog/new" element={<NewPostPage />} />

        </Routes>
      </RootLayout>
    </BrowserRouter>
    
  )
} 

export default App