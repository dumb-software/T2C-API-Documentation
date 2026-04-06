# Analytics - Send

Envoyer des informations d'analyse et de suivi (événements, vues d'écran, etc.) au serveur d'analytique Umami.

:::info
L'application T2C utilise cet endpoint à chaque action majeure pour collecter des statistiques d'usage (langue de l'appareil, taille d'écran, navigation). L'instance Umami est auto-hébergée et disponible sur **https://analytics.t2c.fr/**.
:::

## Envoyer des données d'analyse

#### URL

```
  POST https://analytics.t2c.fr/api/send
```

## En-têtes

| Header         | Description                                                                 | Exemple                                       |
| :------------- | :-------------------------------------------------------------------------- | :-------------------------------------------- |
| `Content-Type` | **Recommandé.** Doit être défini à `application/json`.                          | `Content-Type: application/json`              |
| `User-Agent`   | **Recommandé.** Permet à Umami de détecter l'OS et le type de smartphone.   | `Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36` |
| `Referer`      | **Optionnel.** L'URL d'origine de la requête.                               | `https://www.t2c.fr/`                         |
| `DNT`          | **Optionnel.** Indique si le "Do Not Track" est activé. *(Note: Le serveur de la T2C n'est pas affecté par le DNT)* | `1` |

## Paramètres

Le corps de la requête contient le type d'événement et un objet `payload`.

| Paramètre         | Description                                                                 | Exemple                                       |
| :---------------- | :-------------------------------------------------------------------------- | :-------------------------------------------- |
| `type`            | **Requis.** Type d'événement. Généralement `"event"`.                       | `"event"`                                     |
| `payload.website` | **Requis.** L'ID du site/projet défini dans le dashboard Umami.             | `"d8583767-f4cd-40d2-934b-fe2f15ee6b95"`      |
| `payload.screen`  | **Recommandé.** Résolution de l'écran de l'utilisateur.                     | `"824x918"`                                   |
| `payload.language`| **Recommandé.** Langue de l'appareil de l'utilisateur.                     | `"fr-FR"`                                     |
| `payload.title`   | **Optionnel.** Titre de l'écran ou de la vue actuelle.                      | `"T2C \| Transport en commun de l'agglomération clermontoise"`              |
| `payload.hostname`| **Recommandé.** Nom de l'hôte.                                             | `"www.t2c.fr"`                                |
| `payload.url`     | **Optionnel.** Chemin ou nom de la vue actuelle.                            | `"https://www.t2c.fr/"`                       |
| `payload.referrer`| **Optionnel.** L'URL de provenance (referer).                               | `""`                                          |
| `payload.tag`     | **Optionnel.** Tag personnalisé (version, environnement, etc.).             | `"prod-1.1.0"`                                |
| `payload.name`    | **Optionnel.** Nom d'un événement personnalisé. Si omis = vue de page.      | `"clic_rechercher"`                           |
| `payload.data`    | **Optionnel.** Données dynamiques supplémentaires (objet clé/valeur).       | `{"destination": "Jaude"}`                    |

## Exemple d'envoi

```json
{
  "type": "event",
  "payload": {
    "website": "d8583767-f4cd-40d2-934b-fe2f15ee6b95",
    "screen": "824x918",
    "language": "fr-FR",
    "title": "T2C | Transport en commun de l'agglomération clermontoise",
    "hostname": "www.t2c.fr",
    "url": "https://www.t2c.fr/",
    "referrer": "",
    "tag": "prod-1.1.0"
  }
}
```

Ici, nous envoyons un événement d'ouverture du site web T2C (vue de page) avec la résolution d'écran **824x918** et la langue **fr-FR**.

## Exemple de réponse

:::details Cliquez pour voir la Réponse.
```json
{
    "cache": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3ZWJzaXRlSWQiOiJkODU4Mzc2Ny1mNGNkLTQwZDItOTM0Yi1mZTJmMTVlZTZiOTUiLCJzZXNzaW9uSWQiOiI0ZmU4YjRhMS03YzI5LTRkZWYtYjYwMS0yYTUxYzhkMzliNDUiLCJ2aXNpdElkIjoiYjIzNDk2ZTctZjkxMi00Mzk1LTg3N2EtZGUzYjA0MzVlNjU0IiwiaWF0IjoxODc1MzAxNzc5fQ.X6A-V3X8vX-xH_9f_P9y_QwEr7ez-cUUPUiEvt1WLw",
    "sessionId": "4fe8b4a1-7c29-4def-b601-2a51c8d39b45",
    "visitId": "b23496e7-f912-4395-877a-de3b0435e654"
}
```
:::

### Formatage:
La réponse (en code HTTP `200 OK`) est formatée comme ceci :

* `cache` correspond à un jeton de cache (souvent un JWT) utilisé par le SDK Umami pour optimiser les requêtes suivantes.
* `sessionId` correspond à l'identifiant unique de la session de l'utilisateur.
* `visitId` correspond à l'identifiant de la visite en cours.s.
