
import { createRoot } from 'react-dom/client'
import './index.css'

import { StyledEngineProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import { AuthContextProvider } from './context/AuthContext.tsx';
import { RouterProvider } from 'react-router-dom';
import {router} from "../src/router.tsx"
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';

const client=new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StyledEngineProvider enableCssLayer>
<GlobalStyles styles="@layer theme, base, mui, components, utilities;"/>
<QueryClientProvider client={client}>

<AuthContextProvider>
  <RouterProvider router={router}></RouterProvider>

    
</AuthContextProvider>
</QueryClientProvider>

  </StyledEngineProvider>
  
)
