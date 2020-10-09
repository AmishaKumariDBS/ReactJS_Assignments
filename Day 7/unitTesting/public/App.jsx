


import React, { Component } from 'react'
import htmlContent from './file.html';
const App = () => (
    <div dangerouslySetInnerHTML={ {__html: htmlContent} } />
    )

    export default App;
  



