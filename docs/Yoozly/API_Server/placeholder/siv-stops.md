# SIV - Arrêts (Stops)

::: warning PLACEHOLDER
**Cette page est un placeholder!**
:::

## Liste des arrêts

Récupère la liste de tous les arrêts du réseau T2C.

## Requête

```http
GET https://api.t2c.fr/siv/stops
```

## Exemple de réponse

```json
[
  {
    "stop_id": "JAUD",
    "stop_name": "Clermont-Ferrand Jaude",
    "stop_lat": "45.776939",
    "stop_lon": "3.081274",
    "stop_wheelchair_boarding": 1
  },
  {
    "stop_id": "ARTI",
    "stop_name": "Aubière Artière",
    "stop_lat": "45.753575",
    "stop_lon": "3.116951",
    "stop_wheelchair_boarding": 1
  }
]
```

## Champs

| Champ | Type | Description |
|-------|------|-------------|
| `stop_id` | string | Identifiant unique de l'arrêt |
| `stop_name` | string | Nom complet de l'arrêt (Commune + Nom) |
| `stop_lat` | string | Latitude |
| `stop_lon` | string | Longitude |
| `stop_wheelchair_boarding` | number | Accessibilité PMR (1 = accessible) |

---

## Détails d'un arrêt

Récupère les informations détaillées d'un arrêt spécifique.

## Requête

```http
GET https://api.t2c.fr/siv/stops/:id
```

## Paramètres

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | string | Identifiant de l'arrêt (ex: `JAUD`) |

## Exemple

```http
GET https://api.t2c.fr/siv/stops/JAUD
```

## Exemple de réponse

```json
[
  {
    "stop_id": "JAUD",
    "stop_code": "",
    "stop_name": "Clermont-Ferrand Jaude",
    "stop_lat": "45.776939",
    "stop_lon": "3.081274",
    "location_type": 1,
    "wheelchair_boarding": 1,
    "parent_station": null,
    "parent_stop_id": null,
    "parent_stop_code": null,
    "parent_stop_name": null,
    "parent_stop_lat": null,
    "parent_stop_lon": null,
    "parent_location_type": null,
    "parent_wheelchair_boarding": null,
    "parent_parent_station": null
  }
]
```

---

## Recherche d'arrêts

Recherche des arrêts par nom.

## Requête

```http
GET https://api.t2c.fr/siv/stops/search?search=:query
```

## Paramètres

| Paramètre | Type | Description |
|-----------|------|-------------|
| `search` | string | Terme de recherche |

## Exemple

```http
GET https://api.t2c.fr/siv/stops/search?search=jaude
```

## Exemple de réponse

```json
[
  {
    "stop_id": "JAUD",
    "stop_name": "Clermont-Ferrand Jaude",
    "stop_lat": "45.776939",
    "stop_lon": "3.081274",
    "stop_wheelchair_boarding": 1,
    "score": 1,
    "type": "bus"
  },
  {
    "stop_id": "JEJA",
    "stop_name": "Clermont-Ferrand Jean Jaurès",
    "stop_lat": "45.767656",
    "stop_lon": "3.082428",
    "stop_wheelchair_boarding": 1,
    "score": 0.21428572,
    "type": "bus"
  }
]
```

## Champs supplémentaires

| Champ | Type | Description |
|-------|------|-------------|
| `score` | number | Score de pertinence (0-1) |
| `type` | string | Type d'arrêt (`bus`, `tram`, etc.) |
