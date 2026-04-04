# OpenIT - Timetables

::: danger Endpoint Obsolète:
Cette page parle d'un **endpoint obsolète**! Utilisez [l'API Yoozly](/Yoozly/API_Server/index.md).
:::

Obtenir la table des horaires d'un arrêt.

Cela comprend toutes les lignes associées à l'arrêt.

## Obtenir la Table des horaires

#### URL
```
  GET https://tr.t2c.openit.ch/timetables?roid=&day=
```
ou
```
  GET https://qr.t2c.fr/timetables?roid=&day=
```


## Paramètres
| Paramètres   | Description                                 | Exemple                    |
| :----------- | :------------------------------------------ | :------------------------- |
| `roid=`      | **Requis.** Identifiant de l'arrêt.         | `roid=3377704015496218`    |
| `day=`       | **Requis.** Date des horaires               | `day=2025-08-25`           |

::: info
Le `%2d` dans les paramètres de la date correspond à un **TIRET**.
:::

## Exemple d'envoi

```
  GET https://tr.t2c.openit.ch/timetables?roid=3377704015496218&day=2025%2d08%2d25
```

Ici, nous avons fait la demande de la table d'horaire de l'arrêt **Sully** pour la date du 25/08/2025.

## Exemple de réponse

:::details Cliquez pour voir la Réponse.
<<< @/snippets/timetables.xml{17}
:::
La réponse est simple à comprendre, voici un exemple d'un horaire:
```
7;35;11821953316814893;1970329131942174
```

Elle est formatée comme ceci :
`HEURE ; MINUTE ; IDENTIFIANT LIGNE ; IDENTIFIANT DESTINATION`

Donc, le véhicule de la **Ligne 9** (`11821953316814893`), **destination Brézet** (`1970329131942174`) arrive à **l'arrêt Sully** (`3377704015496218`) à **7h35** (`7;35`).
