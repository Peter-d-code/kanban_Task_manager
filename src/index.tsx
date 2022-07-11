import * as React from 'react';
import { createRoot } from 'react-dom/client';
import "./globalstyles.css"
import {Main} from './components/main'

const element  = document.getElementById("root")
const root = createRoot(element!);
root.render(<Main />)