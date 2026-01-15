# Editorial - Actualités (News)

::: warning PLACEHOLDER
**Cette page est un placeholder!**
:::

## Liste des actualités

Récupère les dernières actualités T2C.

## Requête

```http
GET https://api.t2c.fr/editorial/news
```

## Paramètres

| Paramètre | Type | Description |
|-----------|------|-------------|
| `limit` | number | Nombre maximum d'actualités à retourner |

## Exemple

```http
GET https://api.t2c.fr/editorial/news?limit=5
```

## Exemple de réponse

```json
{
  "success": true,
  "data": [
    {
      "id": 391,
      "title": "C.Vélo",
      "shortTitle": "C.Vélo",
      "slug": "c-velo",
      "summary": "C.Vélo : le service de location de vélos en libre-service...",
      "created": "2025-12-18T18:38:29+00:00",
      "thumbnail": {
        "defaultSrc": "https://api.t2c.fr/sites/default/files/styles/mobile/public/2025-12/images.png?v=1766136181",
        "alt": "C. vélo",
        "srcset": "https://api.t2c.fr/sites/default/files/styles/mobile/public/2025-12/images.png?v=1766136181 800w, ...",
        "sizes": "(max-width: 767px) 100vw, (min-width: 768px) and (max-width: 1023px) 50vw, 100vw",
        "width": 225,
        "height": 225,
        "aspectRatio": 1
      }
    }
  ]
}
```

## Champs

| Champ | Type | Description |
|-------|------|-------------|
| `success` | boolean | Succès de la requête |
| `data` | array | Liste des actualités |
| `data[].id` | number | Identifiant unique |
| `data[].title` | string | Titre complet |
| `data[].shortTitle` | string | Titre court |
| `data[].slug` | string | Slug URL |
| `data[].summary` | string | Résumé |
| `data[].created` | string | Date de création (ISO 8601) |
| `data[].thumbnail` | object | Image miniature |

## Objet Thumbnail

| Champ | Type | Description |
|-------|------|-------------|
| `defaultSrc` | string | URL de l'image par défaut |
| `alt` | string | Texte alternatif |
| `srcset` | string | Sources responsives |
| `sizes` | string | Tailles CSS |
| `width` | number | Largeur |
| `height` | number | Hauteur |
| `aspectRatio` | number | Ratio d'aspect |
