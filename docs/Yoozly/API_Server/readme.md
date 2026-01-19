<div align="center">
  <img src="/placeholder.png" width="110px" alt="API_Server logo"/>
  <br>
  <h1>API Server</h1>
</div>

::: warning WORK IN PROGRESS
**Ce serveur est en cours de documentation!**
:::

## Présentation

**API Server** est une backend qui gère les horaires, les actions, les notifications et les dernières informations du réseau T2C.

Elle remplace les anciennes backends de l'API "WinDev" *([OpenIT](/WinDev/OpenIT/readme), [T2C XML](/WinDev/T2C_XML/readme), [WD Push Server](/WinDev/WD_Push/readme), [Pegase](/WinDev/pegase/readme))*, tout est centralisé sur une seule frontend.

L'API est accessible via plusieurs services :

| Service               | URL de Base                       | Description                                     |
|-----------------------|-----------------------------------|-------------------------------------------------|
| **SIV**               | `https://api.t2c.fr/siv`          | Données transport (arrêts, lignes, vélos, POI)  |
| **Editorial**         | `https://api.t2c.fr/editorial`    | Contenu éditorial (news, events, pages)         |
| **Notifications**     | `https://api.t2c.fr/notification` | Gestion des notifications push                  |
| **Status**            | `https://api.t2c.fr/status`       | État de l'application (maintenance, version)    |
| **Sites**             | `https://api.t2c.fr/sites`        | Pages statiques (Ressources, Images)            |

## Services

### SIV

Le SIV *(Système d'Information Voyageur)* est un service qui remplace essentiellement [OpenIT](/WinDev/OpenIT/readme) et [XML_T2C](/WinDev/T2C_XML/readme), il permet d'obtenir des informations sur des arrêts, itinéraires, points d'intérêts, C.Vélos, infos-traffic...

| Endpoint                                                   | Description                  |
|------------------------------------------------------------|------------------------------|
| /stops                                                     | Liste de tous les arrêts     |
| /stops/:id                                                 | Détails d'un arrêt           |
| /stops/search                                              | Recherche d'arrêts           |
| /stops/:id/departures                                      | Informations sur les départs (Infos arrêts, tracé carte, destinations, aperçus de départs) |
| /stops/:id/routes/:roadid/departures                       | Prochains départs            |
| /routes                                                    | Liste des lignes/itinéraires |
<!-- /routes/:id Aucune requête de l'appli -->
| /routes/:id                                                | Détails d'une ligne          |
<!-- /bike Aucune requête de l'appli -->
| /bike                                                      | Stations C.Vélo              |
| /poi                                                       | Points d'intérêt             |
| /itineraries                                               | Calcul d'itinéraires         |
| /alerts/banners                                            | Bannière d'alertes???        |
| /alerts/byline/:lineid                                     | Infos Traffic Ligne          |
| /trips/:tripid/stops                                       | Arrêts et départs d'un itinéraire |
| /trips/:tripid/shapes                                      | Tracé de la carte d'un itinéraire |

### Editorial

*WIP*

| Endpoint | Description |
|----------|-------------|
| /news | Actualités |
| /events | Événements |
<!-- /page/:slug Aucune requête de l'appli -->
| /page/:slug | Pages statiques |
| /lines/:lineid | Infos générales lignes? |
| /sales-points | Points de ventes |
| /park-and-ride | Parkings? |

### Notification

*WIP*

### Site

*WIP*

### Status

| Endpoint | Description |
|----------|-------------|
| / | État de l'application |


## Avertissement
::: danger Avertissement Légal
**Ceci est une documentation non-officielle de l'api utilisée dans l'appli T2C.**

Nous ne sommes pas associés à "*[T2C](https://www.t2c.fr/)*", la "*[Régie EPIC T2C](https://annuaire-entreprises.data.gouv.fr/entreprise/regie-des-transports-urbains-de-l-agglomeration-clermontoise-t2c-789515160)*", à "*[C.Vélo](https://www.c-velo.fr/)*", au "*[SMTC-AC](https://www.smtc-clermont-agglo.fr/)*" ou à tout autre service lié au réseau de transport de Clermont.

Les logos, marques et autres éléments associés à T2C sont la propriété de leurs détenteurs respectifs.
:::
