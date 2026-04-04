# API Server - Status

::: danger WORK IN PROGRESS
**Cet endpoint est en cours de documentation!**
:::

Obtenir le status de l'instance, dont l'état de maintenance et la version minimale nécessaire pour l'app T2C.

:::info
L'application T2C consulte régulièrement cet endpoint pour afficher un écran de maintenance ou un écran pour forcer l'utilisateur à mettre à jour sa version.
:::

## Obtenir le status de maintenance

#### URL

```
  GET https://api.t2c.fr/status
```

## En-têtes

| Header            | Description                                                   | Exemple               |
| :---------------- | :------------------------------------------------------------ | :-------------------- |
| `user-agent`      | **Recommandé.** User-Agent de l'application ou du navigateur. | `Dart/3.10 (dart:io)` |
| `accept-encoding` | **Recommandé.** Codage du contenu du client.                  | `gzip`                |