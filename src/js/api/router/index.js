export default async function router(pathname = window.location.pathname) {
  console.log('Routing to', pathname);

  switch (pathname) {
    case '/':
    case '/index.html': {
      const { default: renderHome } = await import('./views/home.js');
      renderHome();
      break;
    }

    case '/auth/register':
    case '/auth/register.html': {
      await import('./views/register.js');
      break;
    }

    case '/auth/login':
    case '/auth/login.html': {
      await import('./views/login.js');
      break;
    }

    case '/game/':
    case '/game/index.html': {
      await import('./views/game.js');
      break;
    }

    case '/genre/':
    case '/genre/index.html': {
      await import('./views/genre.js');
      break;
    }

    case '/profile/':
    case '/profile/index.html': {
      await import('./views/profile.js');
      break;
    }

    case '/NotFound/':
    case '/NotFound/index.html': {
      await import('./views/NotFound.js');
      break;
    }

    default: {
      window.location.href = '/NotFound/index.html';
      break;
    }
  }
}
