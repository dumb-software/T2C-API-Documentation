<h3 align="center">
  <br>
  <img src="https://github.com/dumb-software/T2C-API-Documentation/blob/main/.github/assets/push.png?raw=true" width="550px" alt="WD Push Server Logo"/>
  <br>
  <h2 align="center">WD Push Server</h2>
  <br>
</h3>

#### Présentation :

**WD Push Server** est une backend principalement utilisé pour les Push Notifications et les dernières données du réseau dans l'appli T2C.

L'échange entre ce serveur se fait principalement avec le protocole [SOAP (Simple Object Access Protocol)](https://fr.wikipedia.org/wiki/SOAP).


#### SOAPActions :

| Action                              | Description                                     |
| :---------------------------------- | :---------------------------------------------- |
| __AjouteIdentifiant                 ||
| __ListeIdentifiants                 ||
| AjouteIdentifiantAndroid            ||
| AjouteIdentifiantIOS                ||
| Ajoute_Journal                      ||
| [DonneVersionReseau](https://github.com/dumb-software/T2C-API-Documentation/blob/main/docs/WD_Push/DonneVersionReseau.md)                  | Obtenir la dernière version du réseau. |
| DroitPush                           ||
| ListeIdentifiantsAndroid            ||
| ListeIdentifiantsIOS                ||
| ListePushNotification               ||
| PageWebAffiche                      ||
| Retourne_Donnees_Reseau_arret       ||
| Retourne_Donnees_Reseau_dest        ||
| Retourne_Donnees_Reseau_ligne       ||
| Retourne_Donnees_Reseau_ligne_image ||
| Retourne_Donnees_Reseau_tarif       ||

## Avertissement
>[!CAUTION]
> **Ceci est une documentation non-officielle de l'api utilisée dans l'appli T2C.**
> Nous ne sommes pas associés à "*[T2C](https://www.t2c.fr/)*", la "*Régie T2C*", à "*[C.Vélo](https://www.c-velo.fr/)*", au "*[SMTC-AC](https://www.smtc-clermont-agglo.fr/)*" ou à tout autre service lié au réseau de transport de Clermont.
> Les logos, marques et autres éléments associés à T2C sont la propriété de leurs détenteurs respectifs.
