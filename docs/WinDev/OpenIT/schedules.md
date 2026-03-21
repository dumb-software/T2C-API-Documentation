# OpenIT - Schedules

::: danger Endpoint Obsolète:
Cette page parle d'un **endpoint obsolète**! Utilisez [l'API Yoozly](/Yoozly/API_Server/index.md).
:::

Calculer un itinéraire, pour aller d'un arrêt à un autre.

## Calculer un Itinéraire avec des noms d'arrêts

#### URL

```
  GET https://tr.t2c.openit.ch/schedules?dy=&md=&pi=&ac=&departure_class_filter=&dpt=&apt=&arrival_class_filter=
```
ou
```
  GET https://qr.t2c.fr/schedules?dy=&md=&pi=&ac=&departure_class_filter=&dpt=&apt=&arrival_class_filter=
```

## Calculer un Itinéraire avec des coordonnées GPS

#### URL

```
  GET https://tr.t2c.openit.ch/schedules?dy=&md=&pi=&ac=&departure_place_XY=&arrival_place_XY=
```
ou
```
  GET https://qr.t2c.fr/schedules?dy=&md=&pi=&ac=&departure_place_XY=&arrival_place_XY=
```

## Paramètres
| Paramètres                | Description                                                                                               | Exemple                        |
| :------------------------ | :-------------------------------------------------------------------------------------------------------- | :----------------------------- |
| `dy=`                     | **Recommandé.** Date de départ.                                                                           | `dy=2025-08-24`                |
| `md=`                     | **Optionnel.** Coche "Sans Correspondance" `(0 = On; 3 = Off)`                                            | `md=3`                         |
| `pi=`                     | **Optionnel.** Filtre du temps de la journée. `(0 = Journée; 1 = Matin; 2 = Midi; 3= Après-Midi; 4=Soir)` | `pi=0`                         |
| `ac=`                     | **Optionnel.** Option "Personnes à Mobilité Réduite"                                                        | `ac=on`                        |
| `departure_class_filter=` | **Recommandé.** Type de départ (arrêt, adresse, points d'intérêt...)                                      | `departure_class_filter=stop`  |
| `dpt=`                    | **Recommandé.** Nom du départ                                                                             | `dpt=Sully%20Clermont-Ferrand` |
| `apt=`                    | **Recommandé.** Nom de l'arrivée                                                                          | `apt=Jaude%20Clermont-Ferrand` |
| `arrival_class_filter=`   | **Recommandé.** Type d'arrivée (arrêt, adresse, points d'intérêt...)                                      | `arrival_class_filter=stop`    |
| `departure_place_XY=`     | **Recommandé.** Coordonnées GPS de l'utilisateur en tant que départ.              | `departure_place_XY=3.08521321498191,45.7878962543636` |
| `arrival_place_XY=`       | **Recommandé.** Coordonnées GPS d'une arrivée (ex: route)                         | `arrival_place_XY=3.08521321498191,45.7878962543636`   |


::: info
Le `%20` dans les paramètres de la date correspond à un **ESPACE**.

Les Coordonnées GPS sont en Longitude Latitude, pas en Latitude Longitude.
:::

## Exemple d'envoi

```
  GET https://tr.t2c.openit.ch/schedules?dy=2025-09-27&md=3&pi=0&dpt=Sully%20Clermont-Ferrand&apt=Jaude%20Clermont-Ferrand&arrival_class_filter=stop
```

Ici, nous avons fait la demande des itinéraires pour aller de l'arrêt **Sully** à **Jaude** pour la date du 27/09/2025.

## Exemple de réponse

:::details Cliquez pour voir la Réponse.
<<< @/snippets/schedules.xml

:::

La réponse renvoie plusieurs itinéraires séparés chacunes par les balises `<board>`

### Formatage:
Nous allons prendre l'exemple d'un itinéraires, la réponse est formatée comme ci:

<<< @/snippets/schedules-1.xml
<h3 align="center">
  <br>
  <img src="/itineraire_exemple1.png" width="250px" alt="Image de l'application T2C montrant un itinéraire."/>
  <br>
  <img src="/itineraire_exemple2.png" width="250px" alt="Image de l'application T2C montrant la carte de l'itinéraire."/>
  <br>
</h3>

**La balise `<board>`:**
* `r=` correspond au numéro du trajet, plus le numéro est grand, plus trajet va être tard.
* `d=` correspond à la durée estimée du trajet.
* `dpn=` correspond au nom de l'arrêt de départ.
* `apn=` correspond au nom de l'arrêt d'arrivée.
* `dt=` correspond à l'heure de départ du trajet.
* `at=` correspond à l'heure d'arrivée du trajet.
* `dlo=` correspond aux coordonnés GPS de la longitude de l'arrêt de départ.
* `dla=` correspond aux coordonnés GPS de la latitude de l'arrêt de départ.
* `alo=` correspond aux coordonnés GPS de la longitude de l'arrêt d'arrivée.
* `ala=` correspond aux coordonnés GPS de la latitude de l'arrêt d'arrivée.
* `pertdep=` indique si il y'a des perturbations à l'arrêt de départ.
* `pertarr=` indique si il y'a des perturbations à l'arrêt d'arrivée.

**La balise `<leg>`:**
* `ill=` indique le leg final (va afficher "vous arrivez à votre destination...")
* `fdt=` heure de départ d'un véhicule d'une Ligne.
* `fat=` heure théorique d'arrivée du véhicule de la Ligne.
* `dsn=` nom de l'arrêt où l'utilisateur doit attendre le véhicule.
* `asn=` nom de l'arrêt où l'utilisateur doit descendre du véhicule.
* `dlo=` correspond aux coordonnés GPS de la longitude de l'arrêt de départ.
* `dla=` correspond aux coordonnés GPS de la latitude de l'arrêt de départ.
* `ia=` indique si un débarquement est requis. ("descendez à l'arrêt...")
* `alo=` correspond aux coordonnés GPS de la longitude de l'arrêt d'arrivée.
* `ala=` correspond aux coordonnés GPS de la latitude de l'arrêt d'arrivée.
* `it=` ???
* `si=` indique l'identifiant de la zone.
* `lsn=` correspond au nom court de la Ligne.
* `li=` indique l'identifiant de la Ligne.
* `n=` correspond au nom complet de la Ligne.
* `i=` correspond à l'image affichée dans l'application T2C pour représenter la Ligne. (voir [Retourne_Donnees_Reseau_ligne](/WinDev/WD_Push/Retourne_Donnees_Reseau_ligne.md))
* `lc=` correspond à la couleur associé à la Ligne. (formaté en RGB)
* `w=` représente le tracé du parcours d'une Ligne sur la Carte de l'itinéraire. (Longitude, Latitude)
* `dn=` indique le nom de la destination de la Ligne.
* `rn=` indique le nom d'une rue à suivre.
* `l=` indique sur combien de mètres il faut suivre cette rue.
* `pertdep=` indique si il y'a des perturbations à l'arrêt de départ.
* `pertarr=` indique si il y'a des perturbations à l'arrêt d'arrivée.

::: info
Le calcul de `"Temps d'attente: X min"` dans l'application T2C se calcule avec `fdt` du prochain leg, moins `fat` du leg précédent.
:::