import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import ServerApp from './ServerApp';

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <ServerApp />
    </StaticRouter>
  );
}

