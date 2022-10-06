import { loadManifest } from '@angular-architects/module-federation';

loadManifest("http://localhost:3120/manifest")
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
