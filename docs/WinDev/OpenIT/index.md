<div align="center">
  <img src="/openit.png" width="550px" alt="OpenIT logo"/>
  <br>
  <h1>OpenIT</h1>
</div>

::: danger Endpoint Obsolète:
Cette page parle d'un **endpoint obsolète**! Utilisez [l'API Yoozly](/Yoozly/API_Server/index.md).
:::


## Présentation

**Movi OpenIT** est une compagnie spécialisée dans la digitalisation de la mobilité.

Dans le cas de la T2C, c'était **OpenIT** qui gérait le backend des horaires.

Le serveur d'horaires utilisé est le projet Open-Source [SYNTHESE](https://git.openit.ch/rcsmobility/synthese).

Leur serveur était disponible sur 2 instances connues avant la migration vers le nouveau réseau: `tr.t2c.openit.ch` et `qr.t2c.fr`.


::: warning IMPORTANT
Les instances suivantes sont *"obsolètes"* et ne devraient pas être utilisées.

* `http://www.t2c.fr/admin/synthese`

* `http://t2c-prod.rcsmobility.com/synthese`

* `http://t2c-prod.moviplus.ch/synthese`

* `http://qr.t2c.fr`

* `http://tr.t2c.openit.ch`
:::


## Endpoints

| Endpoint                                  | Description                                                  |
| :---------------------------------------- | :----------------------------------------------------------- |
| [timetables](/WinDev/OpenIT/timetables.md)       | Obtenir la table des horaires d'un arrêt.                    |
| [prochainsDeparts](/WinDev/OpenIT/prochainsDeparts.md) | Obtenir le temps restant d'attente d'un arrêt.               |
| [schedules](/WinDev/OpenIT/schedules.md)         | Calculer un itinéraire.                                      |

## Avertissement
<LegalWarning />
