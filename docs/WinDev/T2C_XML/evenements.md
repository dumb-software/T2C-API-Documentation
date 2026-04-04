# T2C XML - Evenements.xml

::: danger Endpoint Obsolète:
Cette page parle d'un **endpoint obsolète**! Utilisez [l'API Yoozly](/Yoozly/API_Server/index.md).
:::

Dernières "Actualités" de l'application T2C.

::: info
Les Actualités sont le contenu affiché dans l'onglet "Actualités" de l'application T2C.

Elles apparaissent aussi dans un diaporama dans l'accueil.
:::

## Obtenir les dernières actus de la T2C

#### URL
```
  GET https://www.t2c.fr/evenements.xml
```

## Exemple de réponse

:::details Cliquez pour voir la Réponse.
<<< @/snippets/evenements.xml
:::

### Attributs du XML Événements:

* Le formatage doit être un minimum correct, sinon le message ne s'affiche pas dans l'application T2C.
* Le message dans la balise `<description>` doit obligatoirement commencer par une balise `<span>`, puis le message formaté.
* Le contenu de l'Actu est dans la balise `<item>`.
* Les images doivent faire partie de `EnteteSiteT2c` (par défaut: `https://www.t2c.fr`), sinon les images ne vont pas se charger.

* La balise `<title>` est le titre affiché de l'événement.
* La balise `<link>` est un lien ramenant vers un article de la T2C lorsque l'on clique sur l'événement.
* La balise `<description>` est la partie principale, le contenu est formaté en "HTML échappé" (escaped HTML). Elle doit contenir une balise `<span>` puis une image.
* La balise `<pubDate>` contient la date de publication de l'évènement.
* La balise `<guid>` est l'identifiant unique universel de l'évènement.

## Exemple de formatage
:::details Cliquez pour voir le formatage.

<<< @/snippets/evenements-1.xml{10-35}
:::

<h3 align="center">
  <br>
  <img src="/evenement_exemple1.png" width="250px" alt="Image de l'application T2C montrant l'accueil, avec le diaporama montrant des évènements custom."/>
  <br>
  <img src="/evenement_exemple2.png" width="250px" alt="Image de l'application T2C montrant le menu Actualités montrant des évènements custom."/>
</h3>

Titres: `<title>Squeezie</title>` et `<title>Cyprien</title>`

Liens: `<link>https://youtube.com/@Squeezie</link>` et `<link>https://youtube.com/@cyprien</link>`

<details>
  <summary>Contenu de l'évènement: (cliquez)</summary>

::: info Contenu (formaté en "HTML Échappé"):
```xml
<description>
&lt;span&gt;Squeezie&lt;/span&gt;

&lt;p&gt;&lt;img src=&quot;http://127.0.0.1/img/squeezie.jpg&quot;&gt;&lt;/p&gt;
</description>
```
:::

:::info Contenu (formaté en HTML Classique):
```html
<description>
<span>Squeezie</span>

<p><img src="http://127.0.0.1/img/squeezie.png"></p>
</description>
```
:::

</details>

Dates de publication: `<pubDate>Thu, 23 Nov 2025 16:10:02 +0000</pubDate>`

Identifiants:

`<guid isPermaLink="false">333333 at https://www.t2c.fr</guid>`

`<guid isPermaLink="false">333334 at https://www.t2c.fr</guid>`
