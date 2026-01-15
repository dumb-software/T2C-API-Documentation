# SIV - Points d'intérêt (POI)

::: warning PLACEHOLDER
**Cette page est un placeholder!**
:::

## Liste des POI

Récupère la liste des points d'intérêt (arrêts avec leur type).

## Requête

```http
GET https://api.t2c.fr/siv/poi
```

## Exemple de réponse

```json
{
  "data": [
    {
      "id": "JAUD",
      "latitude": 45.776939,
      "longitude": 3.081274,
      "name": "Clermont-Ferrand Jaude",
      "type": "bus"
    },
    {
      "id": "ARTI",
      "latitude": 45.753575,
      "longitude": 3.116951,
      "name": "Aubière Artière",
      "type": "bus"
    },
    {
      "id": "BATC",
      "latitude": 45.744678,
      "longitude": 3.110933,
      "name": "Aubière AUBIÈRE Le Prat - Bâtiment C",
      "type": "bus"
    }
  ]
}
```

## Champs

| Champ | Type | Description |
|-------|------|-------------|
| `id` | string | Identifiant unique du POI |
| `latitude` | number | Latitude |
| `longitude` | number | Longitude |
| `name` | string | Nom du point d'intérêt |
| `type` | string | Type de POI |

## Types de POI

| Valeur | Description |
|--------|-------------|
| `bus` | Arrêt de bus |
| `tram` | Arrêt de tramway |
| `mixte` | Arrêt mixte bus/tram |
