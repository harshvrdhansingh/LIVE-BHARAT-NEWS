import React from 'react'
import Navbar from './Component/Navbar'
import News from './Component/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 

const App = () => {
  const pageSize = 9;

  return (
    <div>
      <Router>
        <Navbar />
        {/* in app.js navbar is mentn here to visible on each page.... */}

        <Routes>

          {/*  with the help of routing method i have specify the cateogry in the navbar  */}
          <Route exact path="/" element={<News  key="general" pageSize={pageSize} country="in" category="general" />} />

          <Route exact path="/business" element={<News   key="business" pageSize={pageSize} country="in" category="business" />} />

          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />

          <Route exact path="/general" element={<News key="general" pageSize={pageSize} country="in" category="general" />} />

          <Route exact path="/health" element={<News  key="health" pageSize={pageSize} country="in" category="health" />} />

          <Route exact path="/science" element={<News   key="science" pageSize={pageSize} country="in" category="science" />} />

          <Route exact path="/sports" element={<News   key="sports" pageSize={pageSize} country="in" category="sports" />} />

          <Route exact path="/technology" element={<News  key="technology" pageSize={pageSize} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
  )

}

export default App;