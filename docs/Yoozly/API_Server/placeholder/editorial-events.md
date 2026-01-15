# Editorial - Événements (Events)

::: warning PLACEHOLDER
**Cette page est un placeholder!**
:::

## Liste des événements

Récupère les événements T2C.

## Requête

```http
GET https://api.t2c.fr/editorial/events
```

## Paramètres

| Paramètre | Type | Description |
|-----------|------|-------------|
| `featured` | boolean | Événements mis en avant uniquement |
| `filterByDate` | boolean | Filtrer par date |

## Exemple

```http
GET https://api.t2c.fr/editorial/events?featured=true&filterByDate=true
```

## Exemple de réponse

```json
{
  "success": true,
  "data": [
    {
      "id": 68,
      "title": "Le nouveau réseau de bus T2C est là !",
      "shortTitle": "Le nouveau réseau de bus T2C est là !",
      "slug": "le-nouveau-reseau-de-bus-t2c-est-la",
      "description": "<p><strong>Respirez, il est là !</strong></p>",
      "thumbnail": {
        "defaultSrc": "https://api.t2c.fr/sites/default/files/styles/mobile/public/2025-12/Campagne_respirez_T2C_1.jpg?v=1766150492",
        "alt": "nouveau-reseau-T2C",
        "srcset": "...",
        "sizes": "(max-width: 767px) 100vw, ..."
      }
    }
  ]
}
```

## Champs

| Champ | Type | Description |
|-------|------|-------------|
| `success` | boolean | Succès de la requête |
| `data` | array | Liste des événements |
| `data[].id` | number | Identifiant unique |
| `data[].title` | string | Titre complet |
| `data[].shortTitle` | string | Titre court |
| `data[].slug` | string | Slug URL |
| `data[].description` | string | Description HTML |
| `data[].thumbnail` | object | Image miniature |
