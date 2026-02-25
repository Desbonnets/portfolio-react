# Portfolio – Gilles DESBONNETS

Portfolio personnel développé avec React 19 et TypeScript, présentant mon parcours, mes compétences et mes projets.

## Stack technique

- **React 19** + **TypeScript**
- **Vite 7** (bundler + dev server)
- **ESLint** (typescript-eslint, react-hooks, react-refresh)
- **Docker** (dev & prod)

## Sections

- Profil & présentation
- À propos
- Compétences
- Projets
- Expériences
- Formation
- Contact

## Démarrage

### Sans Docker

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # build de production
npm run preview   # prévisualisation du build
```

### Avec Docker

**Développement** (hot reload activé) :

```bash
docker compose -f docker-compose.dev.yml up
# http://localhost:5173
```

**Production** (Nginx) :

```bash
docker compose -f docker-compose.prod.yml up
# http://localhost:80
```

## Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Compile TypeScript et génère le build |
| `npm run lint` | Analyse statique du code |
| `npm run preview` | Prévisualise le build de production |

## Liens

- GitHub : [github.com/Desbonnets](https://github.com/Desbonnets)
- LinkedIn : [linkedin.com/in/gilles-desbonnets](https://www.linkedin.com/in/gilles-desbonnets)
