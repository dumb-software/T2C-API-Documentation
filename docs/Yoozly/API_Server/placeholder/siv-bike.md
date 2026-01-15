# SIV - Stations C.Vélo (Bike)

::: warning PLACEHOLDER
**Cette page est un placeholder!**
:::

## Liste des stations

Récupère la liste de toutes les stations C.Vélo.

## Requête

```http
GET https://api.t2c.fr/siv/bike
```

## Exemple de réponse

```json
{
  "stations": [
    {
      "station_id": "2",
      "name": "02 - Parvis de la gare",
      "physical_configuration": "REGULAR",
      "lat": 45.77922,
      "lon": 3.100944,
      "altitude": 0,
      "address": "46 Avenue de l'Union Soviétique",
      "post_code": "63000",
      "capacity": 32,
      "is_charging_station": false,
      "rental_methods": ["key", "transitcard", "creditcard", "phone"],
      "groups": [],
      "obcn": "02",
      "short_name": "02",
      "nearby_distance": 500,
      "_ride_code_support": true,
      "rental_uris": {}
    },
    {
      "station_id": "3",
      "name": "03 UCA - Campus Centre",
      "physical_configuration": "REGULAR",
      "lat": 45.7716221,
      "lon": 3.0901719,
      "altitude": 0,
      "address": "1 Cours Raymond Poincaré",
      "post_code": "63000",
      "capacity": 31,
      "is_charging_station": false,
      "rental_methods": ["key", "transitcard", "creditcard", "phone"],
      "groups": [],
      "obcn": "03",
      "short_name": "03",
      "nearby_distance": 500,
      "_ride_code_support": true,
      "rental_uris": {}
    }
  ]
}
```

## Champs

| Champ | Type | Description |
|-------|------|-------------|
| `station_id` | string | Identifiant unique de la station |
| `name` | string | Nom complet de la station |
| `physical_configuration` | string | Type de configuration (`REGULAR`) |
| `lat` | number | Latitude |
| `lon` | number | Longitude |
| `altitude` | number | Altitude |
| `address` | string | Adresse postale |
| `post_code` | string | Code postal |
| `capacity` | number | Nombre de places total |
| `is_charging_station` | boolean | Station de recharge VAE |
| `rental_methods` | array | Méthodes de location disponibles |
| `obcn` | string | Code court |
| `short_name` | string | Nom court |
| `nearby_distance` | number | Distance de proximité (m) |
| `_ride_code_support` | boolean | Support du code de location |

## Méthodes de location

| Valeur | Description |
|--------|-------------|
| `key` | Clé physique |
| `transitcard` | Carte de transport (Oùra) |
| `creditcard` | Carte bancaire |
| `phone` | Application mobile |
