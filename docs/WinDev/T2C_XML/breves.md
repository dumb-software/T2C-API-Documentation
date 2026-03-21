# T2C XML - Breves.xml

::: danger Endpoint Obsolète:
Cette page parle d'un **endpoint obsolète**! Utilisez [l'API Yoozly](/Yoozly/API_Server/index.md).
:::

Dernières Brèves du Réseau T2C.

::: info
Les Brèves sont le contenu affiché dans l'onglet "Brèves" de l'application T2C.

Les titres des Brèves apparaissent aussi dans le bandeau déroulant de l'accueil.
:::

## Obtenir les dernières brèves de la T2C

#### URL
```
  GET https://www.t2c.fr/breves.xml
```

## Exemple de réponse

:::details Cliquez pour voir la Réponse.
<<< @/snippets/breves.xml{9-365}
:::

### Attributs du XML Brève:

* Le formatage doit être un minimum correct, sinon le message ne s'affiche pas dans l'application T2C.
* Le message dans la balise `<description>` doit obligatoirement commencer par une balise `<span>`, puis un saut de ligne et le message formaté.
* Le contenu de la brève est dans la balise `<item>`.

* La balise `<title>` est le titre affiché dans le bandeau du menu principal, mais aussi en tant que titre dans l'onglet Brèves.
* La balise `<link>` est un lien ramenant vers un article de la T2C, en cliquant sur "Lire la Suite" dans l'application.
* La balise `<description>` est la partie principale, le contenu est formaté en "HTML échappé" (escaped HTML). Elle contient tout ce qui va être affiché dans l'application, par exemple: le texte; les couleurs; les images...
* La balise `<pubDate>` contient la date de publication de la brève.
* La balise `<guid>` est l'identifiant unique universel de la brève.

## Exemple de formatage

:::details Cliquez pour voir le formatage.
<<< @/snippets/breves-1.xml{10-41}
:::

<h3 align="center">
  <br>
  <img src="/breve_exemple1.png" width="250px" alt="Image de l'application T2C montrant l'accueil, avec le bandeau montrant des titres des brèves."/>
  <br>
  <img src="/breve_exemple2.png" width="250px" alt="Image de l'application T2C montrant le menu brèves."/>
  <br>
  <img src="/breve_exemple3.png" width="250px" alt="Image de l'application T2C montrant une brève custom."/>
</h3>

Titres: `<title>Titre 1</title>` et `<title>Titre 2</title>`

Liens: `<link>https://www.t2c.fr/</link>`

<details>
  <summary>Contenu de la Brève: (cliquez)</summary>

::: info Contenu (formaté en "HTML Échappé"):
```xml
<description>
&lt;span&gt;Lorem ipsum dolor sit amet&lt;/span&gt;
&lt;p&gt;&amp;nbsp;&lt;/p&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, &lt;strong&gt;consectetur adipiscing elit&lt;/strong&gt;, &lt;em&gt;sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&lt;/em&gt; &lt;span style=&quot;text-decoration: underline;&quot;&gt;Ut enim ad minim veniam,&lt;/span&gt; &lt;strong&gt;&lt;span style=&quot;color: #ff0000;&quot;&gt;quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&lt;/span&gt;&lt;/strong&gt; &lt;a href=&quot;https://example.com/&quot;&gt;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.&lt;/a&gt;&lt;/p&gt;
</description>
```
:::

:::info Contenu (formaté en HTML Classique):
```html
<description>
<span>Lorem ipsum dolor sit amet</span>
<p>&nbsp;</p>
<p>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>, <em>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</em> <span style="text-decoration: underline;">Ut enim ad minim veniam,</span> <strong><span style="color: #ff0000;">quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></strong> <a href="https://example.com/">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</a></p>
</description>
```
:::

</details>

Dates de publication:

`<pubDate>Wed, 14 May 2025 00:00:00 +0000</pubDate>`

`<pubDate>Fri, 16 May 2025 00:00:00 +0000</pubDate>`

Identifiants:

`<guid isPermaLink="false">111111 at https://www.t2c.fr</guid>`

`<guid isPermaLink="false">111112 at https://www.t2c.fr</guid>`
