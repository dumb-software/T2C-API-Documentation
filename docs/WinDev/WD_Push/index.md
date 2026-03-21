<div align="center">
  <img src="/push.png" width="550px" alt="WD Push Server Logo"/>
  <br>
  <h1>WD Push Server</h1>
</div>

::: danger Endpoint Obsolète:
Cette page parle d'un **endpoint obsolète**! Utilisez [l'API Yoozly](/Yoozly/API_Server/index.md).
:::

::: warning WORK IN PROGRESS
**Ce serveur est en cours de documentation!**
:::

## Présentation

**WinDev Push Server** était une backend principalement utilisée pour exécuter des actions, elle était utilisée pour recevoir certaines informations du réseau T2C. (comme les identifiants des lignes, arrêts, les images, tarifs...)

[Ce serveur](https://help.windev.com/fr-FR/?1000021015) est proposé par WinDev Mobile et utilise la même infrastructure que leur application mobile, ce qui facilite son intégration.

L'échange entre ce serveur se fait principalement avec le protocole [SOAP (Simple Object Access Protocol)](https://fr.wikipedia.org/wiki/SOAP).


## SOAPActions

| Action                                                                                                                                                      | Description                                     |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------- |
| __AjouteIdentifiant                                                                                                                                         |                                                 |
| __ListeIdentifiants                                                                                                                                         |                                                 |
| [AjouteIdentifiantAndroid](/WinDev/WD_Push/AjouteIdentifiantAndroid.md)                                                                                                                                    | Ajouter un Identifiant Android pour recevoir des push-notifications (GSM)  |
| AjouteIdentifiantIOS                                                                                                                                        |                                                 |
| [Ajoute_Journal](/WinDev/WD_Push/Ajoute_Journal.md)                                           | ❓ *Afficher un message dans les logs?*         |
| [DonneVersionReseau](/WinDev/WD_Push/DonneVersionReseau.md)                                   | Obtenir la dernière version du réseau.          |
| DroitPush                                                                                                                                                   |                                                 |
| ListeIdentifiantsAndroid                                                                                                                                    |                                                 |
| ListeIdentifiantsIOS                                                                                                                                        |                                                 |
| ListePushNotification                                                                                                                                       |                                                 |
| [PageWebAffiche](/WinDev/WD_Push/PageWebAffiche.md)                                           | Obtenir une URL inutilisée.                     |
| [Retourne_Donnees_Reseau_arret](/WinDev/WD_Push/Retourne_Donnees_Reseau_arret.md)             | Obtenir les informations de chaque Arrêt.       |
| [Retourne_Donnees_Reseau_dest](/WinDev/WD_Push/Retourne_Donnees_Reseau_dest.md)               | Obtenir les informations de chaque Destination. |
| [Retourne_Donnees_Reseau_ligne](/WinDev/WD_Push/Retourne_Donnees_Reseau_ligne.md)             | Obtenir les informations de chaque Ligne.       |
| [Retourne_Donnees_Reseau_ligne_image](/WinDev/WD_Push/Retourne_Donnees_Reseau_ligne_image.md) | Obtenir les images de chaque Ligne.             |
| [Retourne_Donnees_Reseau_tarif](/WinDev/WD_Push/Retourne_Donnees_Reseau_tarif.md)             | Obtenir les prix et infos de chaque Tarifs.     |

## Avertissement
<LegalWarning />
