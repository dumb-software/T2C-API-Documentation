<h3 align="center">
  <br>
  <img src="https://github.com/dumb-software/T2C-API-Documentation/blob/main/.github/assets/push.png?raw=true" width="550px" alt="WD Push Server Logo"/>
  <br>
  <h2 align="center">WD Push Server</h2>
  <br>
</h3>

#### Présentation :

**WinDev Push Server** est une backend principalement utilisée pour executer des actions, elle est utilisée pour recevoir certaines informations du réseau T2C. (comme les identifiants des lignes, arrêts, les images, tarifs...)

[Ce serveur](https://help.windev.com/fr-FR/?1000021015) est proposé par WinDev Mobile et utilise la même infrastructure que leur application mobile, ce qui facilite son intégration.

L'échange entre ce serveur se fait principalement avec le protocole [SOAP (Simple Object Access Protocol)](https://fr.wikipedia.org/wiki/SOAP).


#### SOAPActions :

| Action                                                                                                                                                      | Description                                     |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------- |
| __AjouteIdentifiant                                                                                                                                         |                                                 |
| __ListeIdentifiants                                                                                                                                         |                                                 |
| AjouteIdentifiantAndroid                                                                                                                                    |                                                 |
| AjouteIdentifiantIOS                                                                                                                                        |                                                 |
| Ajoute_Journal                                                                                                                                              |                                                 |
| [DonneVersionReseau](https://github.com/dumb-software/T2C-API-Documentation/blob/main/docs/WD_Push/DonneVersionReseau.md)                                   | Obtenir la dernière version du réseau.          |
| DroitPush                                                                                                                                                   |                                                 |
| ListeIdentifiantsAndroid                                                                                                                                    |                                                 |
| ListeIdentifiantsIOS                                                                                                                                        |                                                 |
| ListePushNotification                                                                                                                                       |                                                 |
| [PageWebAffiche](https://github.com/dumb-software/T2C-API-Documentation/blob/main/docs/WD_Push/PageWebAffiche.md)                                           | Obtenir une URL inutilisée.                     |
| [Retourne_Donnees_Reseau_arret](https://github.com/dumb-software/T2C-API-Documentation/blob/main/docs/WD_Push/Retourne_Donnees_Reseau_arret.md)             | Obtenir les informations de chaque Arrêt.       |
| [Retourne_Donnees_Reseau_dest](https://github.com/dumb-software/T2C-API-Documentation/blob/main/docs/WD_Push/Retourne_Donnees_Reseau_dest.md)               | Obtenir les informations de chaque Destination. |
| [Retourne_Donnees_Reseau_ligne](https://github.com/dumb-software/T2C-API-Documentation/blob/main/docs/WD_Push/Retourne_Donnees_Reseau_ligne.md)             | Obtenir les informations de chaque Ligne.       |
| [Retourne_Donnees_Reseau_ligne_image](https://github.com/dumb-software/T2C-API-Documentation/blob/main/docs/WD_Push/Retourne_Donnees_Reseau_ligne_image.md) | Obtenir les images de chaque Ligne.             |
| [Retourne_Donnees_Reseau_tarif](https://github.com/dumb-software/T2C-API-Documentation/blob/main/docs/WD_Push/Retourne_Donnees_Reseau_tarif.md)             | Obtenir les prix et infos de chaque Tarifs.     |

## Avertissement
>[!CAUTION]
> **Ceci est une documentation non-officielle de l'api utilisée dans l'appli T2C.**
> Nous ne sommes pas associés à "*[T2C](https://www.t2c.fr/)*", la "*Régie T2C*", à "*[C.Vélo](https://www.c-velo.fr/)*", au "*[SMTC-AC](https://www.smtc-clermont-agglo.fr/)*" ou à tout autre service lié au réseau de transport de Clermont.
> Les logos, marques et autres éléments associés à T2C sont la propriété de leurs détenteurs respectifs.
