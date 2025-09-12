import '../app/globals.css';
import { StreakProvider } from '../contexts/StreakContext';

const MindMateApp = ({ Component, pageProps }) => {
  return (
    <StreakProvider>
      <Component {...pageProps} />
    </StreakProvider>
  )
}

export default MindMateApp;