

# Code mẫu react multiple layouts (bao gồm layout người dùng + admin) 


```bash
  yarn or npm install
```

In this demo we have two layouts:
  - Admin
  - Main

The routes
  - /
  - /about
  - /login
  - /admin
  - /admin/setting

### Example file router


```javascript

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Main from '../containers/layouts/Main'
import MainAdmin from '../containers/layouts/MainAdmin'

// views
import About from '../containers/views/Main/About'
import Home from '../containers/views/Main/Home'
import Login from '../containers/views/Main/Login'

// admin Views

import Dashboard from '../containers/views/Admin/Dashboard'
import Setting from '../containers/views/Admin/Setting'


export default () => {

  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />


        <Route path='/admin/:path?' exact>
          <MainAdmin>
            <Switch>
              <Route path='/admin' exact component={Dashboard} />
              <Route path='/admin/setting' component={Setting} />
            </Switch>
          </MainAdmin>
        </Route>
        
        <Route>
          <Main>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' component={About} />
            </Switch>
          </Main>
        </Route>


      </Switch>
    </Router>
  )

}
```

### structure folder routers

```bash

  └── src
      ├── components
      │   └── Common
      │       ├── Header
      │       └── Footer
      ├── containers
      │   ├── views
      │       ├── Main.jsx
      │       └── MainAdmin.jsx
      │   └── views
      │       └── Admin
      │           ├── Dashboard
      │           └── Setting
      │       └── Main
      │           ├── About
      │           ├── Home
      │           └── Login
      ├── routes
      │   └── index.js
```
