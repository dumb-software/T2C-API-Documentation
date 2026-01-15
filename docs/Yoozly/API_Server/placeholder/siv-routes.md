# SIV - Lignes (Routes)

::: warning PLACEHOLDER
**Cette page est un placeholder!**
:::

## Liste des lignes

Récupère la liste de toutes les lignes du réseau T2C.

## Requête

```http
GET https://api.t2c.fr/siv/routes
```

## Exemple de réponse

```json
[
  {
    "route_id": "A",
    "agency_id": "6192453782601729",
    "route_short_name": "A",
    "route_long_name": "A",
    "route_desc": "Ligne A",
    "route_type": 3,
    "route_url": "",
    "route_color": "a81815",
    "route_text_color": "ffffff",
    "route_sort_order": 1,
    "first_stop_name": "La Pardieu Gare",
    "last_stop_name": "Les Vergnes",
    "sort_group": 0,
    "sort_value": "A"
  },
  {
    "route_id": "B",
    "agency_id": "6192453782601729",
    "route_short_name": "B",
    "route_long_name": "B",
    "route_desc": "Ligne B",
    "route_type": 3,
    "route_url": "",
    "route_color": "0069b4",
    "route_text_color": "ffffff",
    "route_sort_order": 2,
    "first_stop_name": "AULNAT St Exupéry",
    "last_stop_name": "ROYAT Pl. Allard",
    "sort_group": 0,
    "sort_value": "B"
  }
]
```

## Champs

| Champ | Type | Description |
|-------|------|-------------|
| `route_id` | string | Identifiant unique de la ligne |
| `agency_id` | string | Identifiant de l'opérateur |
| `route_short_name` | string | Nom court (A, B, C, 3, 4...) |
| `route_long_name` | string | Nom long |
| `route_desc` | string | Description |
| `route_type` | number | Type GTFS (3 = bus) |
| `route_color` | string | Couleur hex (sans #) |
| `route_text_color` | string | Couleur du texte hex |
| `route_sort_order` | number | Ordre d'affichage |
| `first_stop_name` | string | Premier arrêt |
| `last_stop_name` | string | Dernier arrêt |
| `sort_group` | number | Groupe de tri |
| `sort_value` | string | Valeur de tri |

---

## Détails d'une ligne

Récupère les informations détaillées d'une ligne.

## Requête

```http
GET https://api.t2c.fr/siv/routes/:id
```

## Paramètres

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | string | Identifiant de la ligne (ex: `A`, `B`, `3`) |

## Exemple

```http
GET https://api.t2c.fr/siv/routes/A
```

## Exemple de réponse

```json
{
  "route_id": "A",
  "agency_id": "6192453782601729",
  "route_short_name": "A",
  "route_long_name": "A",
  "route_desc": "Ligne A",
  "route_type": 3,
  "route_url": "",
  "route_color": "a81815",
  "route_text_color": "ffffff",
  "route_sort_order": 1,
  "directions": [
    {
      "direction_id": 0,
      "station_depart": "Champratel",
      "station_arrivee": "La Pardieu Gare"
    },
    {
      "direction_id": 1,
      "station_depart": "La Pardieu Gare",
      "station_arrivee": "Les Vergnes"
    }
  ]
}
```

## Champs supplémentaires

| Champ | Type | Description |
|-------|------|-------------|
| `directions` | array | Directions de la ligne |
| `directions[].direction_id` | number | ID de direction (0 ou 1) |
| `directions[].station_depart` | string | Arrêt de départ |
| `directions[].station_arrivee` | string | Arrêt d'arrivée |
