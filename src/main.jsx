import ReactDOM from 'react-dom/client';
// import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks';
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-layout/Layout';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
import './index.css';
import CallbackHook from './06-memos/CallbackHook';

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<CallbackHook />
	//</React.StrictMode>
);
