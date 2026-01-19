<div align="center">
  <img src="/openit.png" width="550px" alt="OpenIT logo"/>
  <br>
  <h1>OpenIT</h1>
</div>

::: warning Fonctions Manquantes
**Il reste des fonctions Synthèse non-découvertes, le CMS de T2C est privé, donc impossible de tous les obtenir.**

Si vous trouvez des fonctions Synthèse non-présentes ici, merci d'ouvrir une [Issue](https://github.com/dumb-software/T2C-API-Documentation/issues).
:::

## Présentation

**Movi OpenIT** est une compagnie spécialisée dans la digitalisation de la mobilité.

Dans le cas de la T2C, c'est **OpenIT** qui gère la backend des horaires.

Le serveur d'horaires utilisé est le projet Open-Source [SYNTHESE](https://git.openit.ch/rcsmobility/synthese).

Leur serveur est disponible sur 2 instances connues: `tr.t2c.openit.ch` et `qr.t2c.fr`.


::: warning IMPORTANT
Les instances suivantes sont *"obsolètes"* et ne devraient pas être utilisés.

* `http://www.t2c.fr/admin/synthese`

* `http://t2c-prod.rcsmobility.com/synthese`

* `http://t2c-prod.moviplus.ch/synthese`
:::


## Endpoints

| Endpoint                                  | Description                                                  |
| :---------------------------------------- | :----------------------------------------------------------- |
| [timetables](/WinDev/OpenIT/timetables.md)       | Obtenir la table des horaires d'un arrêt.                    |
| [prochainsDeparts](/WinDev/OpenIT/prochainsDeparts.md) | Obtenir le temps restant d'attente d'un arrêt.               |
| [schedules](/WinDev/OpenIT/schedules.md)         | Calculer un itinéraire.                                      |

## Avertissement
::: danger Avertissement Légal
**Ceci est une documentation non-officielle de l'api utilisée dans l'appli T2C.**

Nous ne sommes pas associés à "*[T2C](https://www.t2c.fr/)*", la "*[Régie EPIC T2C](https://annuaire-entreprises.data.gouv.fr/entreprise/regie-des-transports-urbains-de-l-agglomeration-clermontoise-t2c-789515160)*", à "*[C.Vélo](https://www.c-velo.fr/)*", au "*[SMTC-AC](https://www.smtc-clermont-agglo.fr/)*" ou à tout autre service lié au réseau de transport de Clermont.

Les logos, marques et autres éléments associés à T2C sont la propriété de leurs détenteurs respectifs.
:::
