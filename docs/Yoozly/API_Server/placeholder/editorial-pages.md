# Editorial - Pages statiques

::: warning PLACEHOLDER
**Cette page est un placeholder!**
:::

## Récupérer une page

Récupère le contenu d'une page statique.

## Requête

```http
GET https://api.t2c.fr/editorial/page/:slug
```

## Paramètres

| Paramètre | Type | Description |
|-----------|------|-------------|
| `slug` | string | Identifiant de la page |

## Pages connues

| Slug | Description |
|------|-------------|
| `mentions-legales` | Mentions légales |

## Exemple

```http
GET https://api.t2c.fr/editorial/page/mentions-legales
```

## Exemple de réponse

```json
{
  "success": true,
  "data": {
    "id": 52,
    "title": "Mentions légales",
    "type": "page",
    "slug": "mentions-legales",
    "body": "<h2>Informations éditeur et hébergeur</h2><p><strong>Editeur </strong>:</p><p>T2C<br>Régie des transports urbains de l'agglomération clermontoise<br>EPIC dont le siège social est sis<br>Centre T2C Ginette Magnier<br>90 bd Danielle Mitterrand<br>63800 COURNON D'AUVERGNE</p>..."
  }
}
```

## Champs

| Champ | Type | Description |
|-------|------|-------------|
| `success` | boolean | Succès de la requête |
| `data` | object | Données de la page |
| `data.id` | number | Identifiant unique |
| `data.title` | string | Titre de la page |
| `data.type` | string | Type de contenu (`page`) |
| `data.slug` | string | Slug URL |
| `data.body` | string | Contenu HTML de la page |
