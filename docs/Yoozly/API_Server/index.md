<div align="center">
  <img src="/apiserverlogo2.png" width="300px" alt="API_Server logo"/>
  <br>
  <h1>API Server</h1>
</div>

::: danger WORK IN PROGRESS
**Ce serveur est en cours de documentation!**

**Une réanalyse complète de le backend est en cours (désolé c'est la procrastination)**

**Vous souhaitez aider? Un sample des requêtes est disponible [ici](https://github.com/dumb-software/t2c-samples).**
:::

API Server est la toute nouvelle API de la T2C depuis la grande refonte de leur infrastructure du 20 Décembre 2025.

Ce backend est un remplacement total des autres backends de l'API WinDev.

Leur instance de production est disponible sur `api.t2c.fr` et leur instance de développement est sur `api-staging.t2c.fr`.

[Drupal](https://drupal.org/) est utilisé en tant que CMS.

## Status

| Endpoint                                | Description                                     |
| :-------------------------------------- | :---------------------------------------------- |
| `/status`                               | Status de maintenance et version à force-update |

## Editorial

| Endpoint                                | Description                                     |
| :-------------------------------------- | :---------------------------------------------- |
| `/editorial/news`                       | Actualités du réseau T2C et SMTC-AC             |
| `/editorial/lines`                      | Informations sur les Lignes (Identifiants, Directions, PDF des Plans...) |
| `/editorial/lines/{slug}`               | Informations sur une Ligne spécifiée (cassé dans l'appli) |
| `/editorial/events`                     | Événements de T2C                               |
| `/editorial/park-and-ride`              | Parkings et Stations C.vélo?                    |
| `/editorial/sales-points`               | Points de ventes proches d'un arrêt spécifié    |

## SIV (Système d'Informations Voyageur)

| Endpoint                                | Description                                     |
| :-------------------------------------- | :---------------------------------------------- |
| `/siv/alerts/banners`                   | Alerte à l'ouverture de l'appli???              |
| `/siv/routes`                           | Informations sur chaque Ligne et directions    |
| `/siv/alerts/{alertId}`                 | Voir les infos d'une alerte??? (cassé dans l'appli) |
| `/siv/alerts`                           | Toutes les alertes du réseau                    |
| `/siv/alerts/by-line/{lineId}`          | Toutes les alertes d'une ligne                  |
| `/siv/stops`                            | Informations sur chaque arrêt                   |
| `/siv/stops/search`                     | Rechercher un arrêt (avec les parkings et Stations C.vélo) |
| `/siv/stops/{stopId}`                   | Informations détaillées sur un arrêt spécifié    |
| `/siv/stops/{stopId}/departures`        | Voir les horaires d'un arrêt                    |
| `/siv/stops/{stopId}/routes/{routeId}/departures` | Voir les horaires d'un arrêt avec une direction spécifiée |
| `/siv/poi`                              | Positions des éléments (Arrêts; Parkings; C.vélo; Points de Vente) sur la carte |
| `/siv/trips/{tripId}/stops`             | Aperçu des arrêts sur la carte de Ligne???      |
| `/siv/trips/{tripId}/shapes`            | Forme des aperçus sur la carte de Ligne         |
| `/siv/stops/{stopId}/routes`            | Lignes desservies d'un arrêt spécifié           |
| `/siv/itineraries`                      | Itinéraires                                     |

À vérifier:
| Endpoint                                | Description                                     |
| :-------------------------------------- | :---------------------------------------------- |
| `/siv/bike`                             | Informations stations C.vélo                    |
| `/siv/routes/{lineId}`                  | Informations d'une ligne définie???             |

## Favorites

| Endpoint                                | Description                                     |
| :-------------------------------------- | :---------------------------------------------- |
| `/favorite/favorites/me`                | Obtenir les favoris d'un utilisateur            |
| `/favorite/favorites`                   | Ajouter un arrêt à un favori                    |

## Notifications

| Endpoint                                       | Description                                     |
| :--------------------------------------------- | :---------------------------------------------- |
| `/notification/notifications/me/unread-count`  | Obtenir le nombre de notifications non-lues     |
| `/notification/notifications/me/`              | Obtenir les Notifications des lignes abonnées   |
| `/notification/notifications/me/topics`        | Obtenir les lignes abonnées d'un utilisateur    |
| `/notification/notifications/associate-topics` | S'abonner à une ligne                           |
| `/notification/notifications/mark-all-as-read` | Marquer toutes les notifications comme lues     |


## Avertissement
<LegalWarning />
