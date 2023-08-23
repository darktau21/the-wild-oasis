import { AppRouterProvider } from '@app/providers';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
);
root.render(<AppRouterProvider />);
