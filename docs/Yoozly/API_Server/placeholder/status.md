# Status - État de l'application

::: warning PLACEHOLDER
**Cette page est un placeholder!**
:::

## Vérifier le statut

Récupère l'état actuel de l'application (maintenance, mise à jour requise).

## Requête

```http
GET https://api.t2c.fr/status
```

## Exemple de réponse

```json
{
  "maintenance": false,
  "forceupdate": 4110
}
```

## Champs

| Champ | Type | Description |
|-------|------|-------------|
| `maintenance` | boolean | Mode maintenance activé |
| `forceupdate` | number | Version minimum requise (versionCode) |

## Utilisation

L'application vérifie ce endpoint au démarrage pour :

1. **Mode maintenance** : Si `maintenance` est `true`, l'application affiche une page de maintenance
2. **Mise à jour forcée** : Si le `versionCode` de l'app est inférieur à `forceupdate`, l'utilisateur est redirigé vers le store

## Valeurs connues

| versionCode | versionName | Notes |
|-------------|-------------|-------|
| 4128 | 3.1.0 | Version actuelle (Déc 2025) |
| 4110 | - | Version minimum requise |
