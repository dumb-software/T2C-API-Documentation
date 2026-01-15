# SIV - Itinéraires

::: warning PLACEHOLDER
**Cette page est un placeholder!**
:::

## Calcul d'itinéraire

Calcule un itinéraire entre deux points.

::: warning Paramètres requis
Cet endpoint nécessite plusieurs paramètres obligatoires. Une requête sans paramètres retournera une erreur 400.
:::

## Requête

```http
GET https://api.t2c.fr/siv/itineraries
```

## Paramètres

| Paramètre | Type | Description |
|-----------|------|-------------|
| `date` | string | Date du voyage |
| `max_matches` | string | Nombre maximum de résultats |
| `period` | number | Période (0-4) |
| `departure_class_filter` | string | Station de départ |
| `dpt` | string | Inconnu, stop par defaut |
| `arrival_class_filter` | string | Station d'arrivée |
| `apt` | string | Inconnu, stop par defaut |

## Exemple de réponse

::: warning
La réponse est trop longue, elle a été coupée.
:::

::: details Cliquez pour voir la Réponse.
```json
[
  {
    "id": "1",
    "duration": "00:10:00",
    "walk_distance_m": 0,
    "walk_time_s": 0,
    "departure_place_name": "Les Vergnes",
    "arrival_place_name": "Les Vignes",
    "departure_time": "00:02",
    "arrival_time": "00:12",
    "departure_xy": {
      "lat": 45.813016,
      "lon": 3.12839
    },
    "arrival_xy": {
      "lat": 45.802658,
      "lon": 3.106617
    },
    "steps": [
      {
        "type": "station_info",
        "departure_stop_name": "Les Vergnes",
        "walk_distance_m": 0,
        "walk_time_s": 0,
        "station_coordinates": {
          "lat": 45.812787,
          "lon": 3.127602
        }
      },
      {
        "type": "transport",
        "departure_time": "00:02",
        "arrival_time": "00:12",
        "line_name": "A",
        "line_direction": "La Pardieu Gare",
        "line_short_name": "A",
        "line_color": "168,24,21",
        "coordinates": [
          {
            "lat": 45.81274600158694,
            "lon": 3.1262860307866513
          },
          {
            "lat": 45.81300615653233,
            "lon": 3.1251881223711373
          },
          {
            "lat": 45.81302409152862,
            "lon": 3.125063311916787
          },
          {
            "lat": 45.813105000598036,
            "lon": 3.1210720797145814
          },
          {
            "lat": 45.813085593558576,
            "lon": 3.1204280288612236
          },
          {
            "lat": 45.81306829851511,
            "lon": 3.1203046919828847
          },
          {
            "lat": 45.81245420059597,
            "lon": 3.1187286976767696
          },
          {
            "lat": 45.81203178441395,
            "lon": 3.116756324194302
          },
          {
            "lat": 45.81179660734259,
            "lon": 3.1153785793692848
          },
          {
            "lat": 45.811781090797254,
            "lon": 3.113830685366909
          },
          {
            "lat": 45.811876428979375,
            "lon": 3.113469131057984
          },
          {
            "lat": 45.81192357699073,
            "lon": 3.113376730149738
          },
          {
            "lat": 45.81228385419929,
            "lon": 3.1133499663681015
          },
          {
            "lat": 45.81463033500685,
            "lon": 3.1134002955388773
          },
          {
            "lat": 45.81471347768712,
            "lon": 3.1133660526450595
          },
          {
            "lat": 45.81478965118959,
            "lon": 3.1132968040246585
          },
          {
            "lat": 45.81484240478252,
            "lon": 3.113207406881064
          },
          {
            "lat": 45.814892002234075,
            "lon": 3.1123066245865663
          },
          {
            "lat": 45.81489985151587,
            "lon": 3.1072648658960933
          },
          {
            "lat": 45.814887033318925,
            "lon": 3.1071416421206814
          },
          {
            "lat": 45.81478038923248,
            "lon": 3.1069328599673556
          },
          {
            "lat": 45.81470587416584,
            "lon": 3.1068808067899227
          },
          {
            "lat": 45.81434646377426,
            "lon": 3.1068241037475883
          },
          {
            "lat": 45.81215506492689,
            "lon": 3.1070712904986375
          },
          {
            "lat": 45.81032322960936,
            "lon": 3.1070920282474237
          },
          {
            "lat": 45.80959614832424,
            "lon": 3.1069977363281813
          },
          {
            "lat": 45.808334005724554,
            "lon": 3.1067165127160687
          },
          {
            "lat": 45.804443362881294,
            "lon": 3.106642791258407
          },
          {
            "lat": 45.80327224432629,
            "lon": 3.1067340040613356
          },
          {
            "lat": 45.80264241164696,
            "lon": 3.106663077003286
          }
        ],
        "walk_distance_m": 0,
        "walk_time_s": 0,
        "station_coordinates": {
          "lat": null,
          "lon": null
        },
        "route_type": 3
      },
      {
        "type": "station_info",
        "arrival_stop_name": "Les Vignes",
        "walk_distance_m": 0,
        "walk_time_s": 0,
        "station_coordinates": {
          "lat": 45.802642,
          "lon": 3.106663
        }
      }
    ]
  },
  {
    "id": "2",
    "duration": "00:10:00",
    "walk_distance_m": 0,
    "walk_time_s": 0,
    "departure_place_name": "Les Vergnes",
    "arrival_place_name": "Les Vignes",
    "departure_time": "00:29",
    "arrival_time": "00:39",
    "departure_xy": {
      "lat": 45.813016,
      "lon": 3.12839
    },
    "arrival_xy": {
      "lat": 45.802658,
      "lon": 3.106617
    },
    "steps": [
      {
        "type": "station_info",
        "departure_stop_name": "Les Vergnes",
        "walk_distance_m": 0,
        "walk_time_s": 0,
        "station_coordinates": {
          "lat": 45.812787,
          "lon": 3.127602
        }
      },
      {
        "type": "transport",
        "departure_time": "00:29",
        "arrival_time": "00:39",
        "line_name": "A",
        "line_direction": "La Pardieu Gare",
        "line_short_name": "A",
        "line_color": "168,24,21",
        "coordinates": [
          {
            "lat": 45.81274600158694,
            "lon": 3.1262860307866513
          },
          {
            "lat": 45.81300615653233,
            "lon": 3.1251881223711373
          },
          {
            "lat": 45.81302409152862,
            "lon": 3.125063311916787
          },
          {
            "lat": 45.813105000598036,
            "lon": 3.1210720797145814
          },
          {
            "lat": 45.813085593558576,
            "lon": 3.1204280288612236
          },
          {
            "lat": 45.81306829851511,
            "lon": 3.1203046919828847
          },
          {
            "lat": 45.81245420059597,
            "lon": 3.1187286976767696
          },
          {
            "lat": 45.81203178441395,
            "lon": 3.116756324194302
          },
          {
            "lat": 45.81179660734259,
            "lon": 3.1153785793692848
          },
          {
            "lat": 45.811781090797254,
            "lon": 3.113830685366909
          },
          {
            "lat": 45.811876428979375,
            "lon": 3.113469131057984
          },
          {
            "lat": 45.81192357699073,
            "lon": 3.113376730149738
          },
          {
            "lat": 45.81228385419929,
            "lon": 3.1133499663681015
          },
          {
            "lat": 45.81463033500685,
            "lon": 3.1134002955388773
          },
          {
            "lat": 45.81471347768712,
            "lon": 3.1133660526450595
          },
          {
            "lat": 45.81478965118959,
            "lon": 3.1132968040246585
          },
          {
            "lat": 45.81484240478252,
            "lon": 3.113207406881064
          },
          {
            "lat": 45.814892002234075,
            "lon": 3.1123066245865663
          },
          {
            "lat": 45.81489985151587,
            "lon": 3.1072648658960933
          },
          {
            "lat": 45.814887033318925,
            "lon": 3.1071416421206814
          },
          {
            "lat": 45.81478038923248,
            "lon": 3.1069328599673556
          },
          {
            "lat": 45.81470587416584,
            "lon": 3.1068808067899227
          },
          {
            "lat": 45.81434646377426,
            "lon": 3.1068241037475883
          },
          {
            "lat": 45.81215506492689,
            "lon": 3.1070712904986375
          },
          {
            "lat": 45.81032322960936,
            "lon": 3.1070920282474237
          },
          {
            "lat": 45.80959614832424,
            "lon": 3.1069977363281813
          },
          {
            "lat": 45.808334005724554,
            "lon": 3.1067165127160687
          },
          {
            "lat": 45.804443362881294,
            "lon": 3.106642791258407
          },
          {
            "lat": 45.80327224432629,
            "lon": 3.1067340040613356
          },
          {
            "lat": 45.80264241164696,
            "lon": 3.106663077003286
          }
        ],
        "walk_distance_m": 0,
        "walk_time_s": 0,
        "station_coordinates": {
          "lat": null,
          "lon": null
        },
        "route_type": 3
      },
      {
        "type": "station_info",
        "arrival_stop_name": "Les Vignes",
        "walk_distance_m": 0,
        "walk_time_s": 0,
        "station_coordinates": {
          "lat": 45.802642,
          "lon": 3.106663
        }
      }
    ]
  },
  {
    "id": "3",
    "duration": "00:11:00",
    "walk_distance_m": 0,
    "walk_time_s": 0,
    "departure_place_name": "Les Vergnes",
    "arrival_place_name": "Les Vignes",
    "departure_time": "05:37",
    "arrival_time": "05:48",
    "departure_xy": {
      "lat": 45.813016,
      "lon": 3.12839
    },
    "arrival_xy": {
      "lat": 45.802658,
      "lon": 3.106617
    },
    "steps": [
      {
        "type": "station_info",
        "departure_stop_name": "Les Vergnes",
        "walk_distance_m": 0,
        "walk_time_s": 0,
        "station_coordinates": {
          "lat": 45.812787,
          "lon": 3.127602
        }
      },
      {
        "type": "transport",
        "departure_time": "05:37",
        "arrival_time": "05:48",
        "line_name": "A",
        "line_direction": "La Pardieu Gare",
        "line_short_name": "A",
        "line_color": "168,24,21",
        "coordinates": [
          {
            "lat": 45.81274600158694,
            "lon": 3.1262860307866513
          },
          {
            "lat": 45.81300615653233,
            "lon": 3.1251881223711373
          },
          {
            "lat": 45.81302409152862,
            "lon": 3.125063311916787
          },
          {
            "lat": 45.813105000598036,
            "lon": 3.1210720797145814
          },
          {
            "lat": 45.813085593558576,
            "lon": 3.1204280288612236
          },
          {
            "lat": 45.81306829851511,
            "lon": 3.1203046919828847
          },
          {
            "lat": 45.81245420059597,
            "lon": 3.1187286976767696
          },
          {
            "lat": 45.81203178441395,
            "lon": 3.116756324194302
          },
          {
            "lat": 45.81179660734259,
            "lon": 3.1153785793692848
          },
          {
            "lat": 45.811781090797254,
            "lon": 3.113830685366909
          },
          {
            "lat": 45.811876428979375,
            "lon": 3.113469131057984
          },
          {
            "lat": 45.81192357699073,
            "lon": 3.113376730149738
          },
          {
            "lat": 45.81228385419929,
            "lon": 3.1133499663681015
          },
          {
            "lat": 45.81463033500685,
            "lon": 3.1134002955388773
          },
          {
            "lat": 45.81471347768712,
            "lon": 3.1133660526450595
          },
          {
            "lat": 45.81478965118959,
            "lon": 3.1132968040246585
          },
          {
            "lat": 45.81484240478252,
            "lon": 3.113207406881064
          },
          {
            "lat": 45.814892002234075,
            "lon": 3.1123066245865663
          },
          {
            "lat": 45.81489985151587,
            "lon": 3.1072648658960933
          },
          {
            "lat": 45.814887033318925,
            "lon": 3.1071416421206814
          },
          {
            "lat": 45.81478038923248,
            "lon": 3.1069328599673556
          },
          {
            "lat": 45.81470587416584,
            "lon": 3.1068808067899227
          },
          {
            "lat": 45.81434646377426,
            "lon": 3.1068241037475883
          },
          {
            "lat": 45.81215506492689,
            "lon": 3.1070712904986375
          },
          {
            "lat": 45.81032322960936,
            "lon": 3.1070920282474237
          },
          {
            "lat": 45.80959614832424,
            "lon": 3.1069977363281813
          },
          {
            "lat": 45.808334005724554,
            "lon": 3.1067165127160687
          },
          {
            "lat": 45.804443362881294,
            "lon": 3.106642791258407
          },
          {
            "lat": 45.80327224432629,
            "lon": 3.1067340040613356
          },
          {
            "lat": 45.80264241164696,
            "lon": 3.106663077003286
          }
        ],
        "walk_distance_m": 0,
        "walk_time_s": 0,
        "station_coordinates": {
          "lat": null,
          "lon": null
        },
        "route_type": 3
      },
      {
        "type": "station_info",
        "arrival_stop_name": "Les Vignes",
        "walk_distance_m": 0,
        "walk_time_s": 0,
        "station_coordinates": {
          "lat": 45.802642,
          "lon": 3.106663
        }
      }
    ]
  },
  {
    "id": "4",
    "duration": "00:10:00",
    "walk_distance_m": 0,
    "walk_time_s": 0,
    "departure_place_name": "Les Vergnes",
    "arrival_place_name": "Les Vignes",
    "departure_time": "05:59",
    "arrival_time": "06:09",
    "departure_xy": {
      "lat": 45.813016,
      "lon": 3.12839
    },
    "arrival_xy": {
      "lat": 45.802658,
      "lon": 3.106617
    },
    "steps": [
      {
        "type": "station_info",
        "departure_stop_name": "Les Vergnes",
        "walk_distance_m": 0,
        "walk_time_s": 0,
        "station_coordinates": {
          "lat": 45.812787,
          "lon": 3.127602
        }
      },
      {
        "type": "transport",
        "departure_time": "05:59",
        "arrival_time": "06:09",
        "line_name": "A",
        "line_direction": "La Pardieu Gare",
        "line_short_name": "A",
        "line_color": "168,24,21",
        "coordinates": [
          {
            "lat": 45.81274600158694,
            "lon": 3.1262860307866513
          },
          {
            "lat": 45.81300615653233,
            "lon": 3.1251881223711373
          },
          {
            "lat": 45.81302409152862,
            "lon": 3.125063311916787
          },
          {
            "lat": 45.813105000598036,
            "lon": 3.1210720797145814
          },
          {
            "lat": 45.813085593558576,
            "lon": 3.1204280288612236
          },
          {
            "lat": 45.81306829851511,
            "lon": 3.1203046919828847
          },
          {
            "lat": 45.81245420059597,
            "lon": 3.1187286976767696
          },
          {
            "lat": 45.81203178441395,
            "lon": 3.116756324194302
          },
          {
            "lat": 45.81179660734259,
            "lon": 3.1153785793692848
          },
          {
            "lat": 45.811781090797254,
            "lon": 3.113830685366909
          },
          {
            "lat": 45.811876428979375,
            "lon": 3.113469131057984
          },
          {
            "lat": 45.81192357699073,
            "lon": 3.113376730149738
          },
          {
            "lat": 45.81228385419929,
            "lon": 3.1133499663681015
          },
          {
            "lat": 45.81463033500685,
            "lon": 3.1134002955388773
          },
          {
            "lat": 45.81471347768712,
            "lon": 3.1133660526450595
          },
          {
            "lat": 45.81478965118959,
            "lon": 3.1132968040246585
          },
          {
            "lat": 45.81484240478252,
            "lon": 3.113207406881064
          },
          {
            "lat": 45.814892002234075,
            "lon": 3.1123066245865663
          },
          {
            "lat": 45.81489985151587,
            "lon": 3.1072648658960933
          },
          {
            "lat": 45.814887033318925,
            "lon": 3.1071416421206814
          },
          {
            "lat": 45.81478038923248,
            "lon": 3.1069328599673556
          },
          {
            "lat": 45.81470587416584,
            "lon": 3.1068808067899227
          },
          {
            "lat": 45.81434646377426,
            "lon": 3.1068241037475883
          },
          {
            "lat": 45.81215506492689,
            "lon": 3.1070712904986375
          },
          {
            "lat": 45.81032322960936,
            "lon": 3.1070920282474237
          },
          {
            "lat": 45.80959614832424,
            "lon": 3.1069977363281813
          },
          {
            "lat": 45.808334005724554,
            "lon": 3.1067165127160687
          },
          {
            "lat": 45.804443362881294,
            "lon": 3.106642791258407
          },
          {
            "lat": 45.80327224432629,
            "lon": 3.1067340040613356
          },
          {
            "lat": 45.80264241164696,
            "lon": 3.106663077003286
          }
        ],
        "walk_distance_m": 0,
        "walk_time_s": 0,
        "station_coordinates": {
          "lat": null,
          "lon": null
        },
        "route_type": 3
      },
      {
        "type": "station_info",
        "arrival_stop_name": "Les Vignes",
        "walk_distance_m": 0,
        "walk_time_s": 0,
        "station_coordinates": {
          "lat": 45.802642,
          "lon": 3.106663
        }
      }
    ]
  },
  {
    "id": "5",
    "duration": "00:10:00",
    "walk_distance_m": 0,
    "walk_time_s": 0,
    "departure_place_name": "Les Vergnes",
    "arrival_place_name": "Les Vignes",
    "departure_time": "06:14",
    "arrival_time": "06:24",
    "departure_xy": {
      "lat": 45.813016,
      "lon": 3.12839
    },
    "arrival_xy": {
      "lat": 45.802658,
      "lon": 3.106617
    },
    "steps": [
      {
        "type": "station_info",
        "departure_stop_name": "Les Vergnes",
        "walk_distance_m": 0,
        "walk_time_s": 0,
        "station_coordinates": {
          "lat": 45.812787,
          "lon": 3.127602
        }
      },
      {
        "type": "transport",
        "departure_time": "06:14",
        "arrival_time": "06:24",
        "line_name": "A",
        "line_direction": "La Pardieu Gare",
        "line_short_name": "A",
        "line_color": "168,24,21",
        "coordinates": [
          {
            "lat": 45.81274600158694,
            "lon": 3.1262860307866513
          },
          {
            "lat": 45.81300615653233,
            "lon": 3.1251881223711373
          },
          {
            "lat": 45.81302409152862,
            "lon": 3.125063311916787
          },
          {
            "lat": 45.813105000598036,
            "lon": 3.1210720797145814
          },
          {
            "lat": 45.813085593558576,
            "lon": 3.1204280288612236
          },
          {
            "lat": 45.81306829851511,
            "lon": 3.1203046919828847
          },
          {
            "lat": 45.81245420059597,
            "lon": 3.1187286976767696
          },
          {
            "lat": 45.81203178441395,
            "lon": 3.116756324194302
          },
          {
            "lat": 45.81179660734259,
            "lon": 3.1153785793692848
          },
          {
            "lat": 45.811781090797254,
            "lon": 3.113830685366909
          },
          {
            "lat": 45.811876428979375,
            "lon": 3.113469131057984
          },
          {
            "lat": 45.81192357699073,
            "lon": 3.113376730149738
          },
          {
            "lat": 45.81228385419929,
            "lon": 3.1133499663681015
          },
          {
            "lat": 45.81463033500685,
            "lon": 3.1134002955388773
          },
          {
            "lat": 45.81471347768712,
            "lon": 3.1133660526450595
          },
          {
            "lat": 45.81478965118959,
            "lon": 3.1132968040246585
          },
          {
            "lat": 45.81484240478252,
            "lon": 3.113207406881064
          },
          {
            "lat": 45.814892002234075,
            "lon": 3.1123066245865663
          },
          {
            "lat": 45.81489985151587,
            "lon": 3.1072648658960933
          },
          {
            "lat": 45.814887033318925,
            "lon": 3.1071416421206814
          },
          {
            "lat": 45.81478038923248,
            "lon": 3.1069328599673556
          },
          {
            "lat": 45.81470587416584,
            "lon": 3.1068808067899227
          },
          {
            "lat": 45.81434646377426,
            "lon": 3.1068241037475883
          },
          {
            "lat": 45.81215506492689,
            "lon": 3.1070712904986375
          },
          {
            "lat": 45.81032322960936,
            "lon": 3.1070920282474237
          },
          {
            "lat": 45.80959614832424,
            "lon": 3.1069977363281813
          },
          {
            "lat": 45.808334005724554,
            "lon": 3.1067165127160687
          },
          {
            "lat": 45.804443362881294,
            "lon": 3.106642791258407
          },
          {
            "lat": 45.80327224432629,
            "lon": 3.1067340040613356
          },
          {
            "lat": 45.80264241164696,
            "lon": 3.106663077003286
          }
        ],
        "walk_distance_m": 0,
        "walk_time_s": 0,
        "station_coordinates": {
          "lat": null,
          "lon": null
        },
        "route_type": 3
      },
      {
        "type": "station_info",
        "arrival_stop_name": "Les Vignes",
        "walk_distance_m": 0,
        "walk_time_s": 0,
        "station_coordinates": {
          "lat": 45.802642,
          "lon": 3.106663
        }
      }
    ]
  },
```
:::

## Erreurs

Si les paramètres requis sont manquants :

```json
{
  "message": [
    "date must be a string",
    "date should not be empty",
    "max_matches must be a string",
    "max_matches should not be empty",
    "La valeur de la période doit être comprise entre 0 et 4.",
    "Le moment de la semaine doit être une string.",
    "Le moment de la semaine est obligatoire."
  ],
  "error": "Bad Request",
  "statusCode": 400
}
```

::: tip Note
La documentation complète des paramètres est en cours d'analyse. Les paramètres exacts utilisés par l'application sont encore à déterminer.
:::
