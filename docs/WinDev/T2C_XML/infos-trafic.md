# T2C XML - Infos-trafic.xml

::: danger Endpoint Obsolète:
Cette page parle d'un **endpoint obsolète**! Utilisez [l'API Yoozly](/Yoozly/API_Server/index.md).
:::

Les dernières informations du trafic T2C.

::: info
Les infos trafic sont le contenu affiché dans l'onglet "Infos-Trafic" de l'application T2C.
:::

## Obtenir les derniers incidents et autres informations

#### URL
```
  GET https://www.t2c.fr/infos-trafic.xml
```

## Exemple de réponse:

:::details Cliquez pour voir la Réponse.
<<< @/snippets/infos-trafic.xml{8-1044}
:::

### Attributs du XML d'info-trafic:

* Le formatage doit être un minimum correct, sinon le message ne s'affiche pas dans l'application T2C.
* Le message dans la balise `<description>` doit obligatoirement commencer par une balise `<p>` ou `<span>`, puis un saut de ligne et le message formaté.
* Le contenu de l'info est dans la balise `<item>`.

* La balise `<title>` est le titre affiché de l'info dans l'onglet Infos-Trafic.
* La balise `<link>` est un lien ramenant vers un article de la T2C, en cliquant sur "Lire la Suite" dans l'application.
* La balise `<lignesId>` est l'identifiant de la ligne concernée.
* La balise `<description>` est la partie principale, le contenu est formaté en "HTML échappé" (escaped HTML). Elle contient tout ce qui va être affiché dans l'application, par exemple: le texte; les couleurs; les images...
* La balise `<pubDate>` contient la date de publication de l'info.
* La balise `<guid>` est l'identifiant unique universel de l'info.
* La balise `<category>` est la ligne concernée affichée en tant que `m_sLigne_name`. (voir [Retourne_Donnees_Reseau_ligne](/WinDev/WD_Push/Retourne_Donnees_Reseau_ligne.md))
* La balise `<categoryLignesId>` est l'identifiant de la ligne concernée.

## Exemple de formatage

:::details Cliquez pour voir le formatage.
<<< @/snippets/infos-trafic-1.xml{7-60}
:::

<h3 align="center">
  <br>
  <img src="/infos-trafic_exemple1.png" width="250px" alt="Image de l'application T2C montrant le menu Infos-Trafic avec des infos custom."/>
  <br>
  <img src="/infos-trafic_exemple2.png" width="250px" alt="Image de l'application T2C montrant une info custom."/>
</h3>

Titres: `<title>ligne interrompue (pour la 10eme fois)</title>` et `<title>Lorem ipsum dolor sit amet</title>`

Liens: `<link>https://www.t2c.fr/actu-infos-trafic/</link>`

Lignes:
```xml
<lignesId>11821953316814895</lignesId>

<lignesId>11821953316814897</lignesId>
<lignesId>11821953316814915</lignesId>
<lignesId>11821953316814889</lignesId>
<lignesId>11821953316814893</lignesId>
<lignesId>11821953316814874</lignesId>
<lignesId>11821953316814876</lignesId>
<lignesId>11821953316814907</lignesId>
```

<details>
  <summary>Contenu de l'info: (cliquez)</summary>

::: info Contenu (formaté en "HTML Échappé"):
```xml
<description>
&lt;p&gt;ligne interrompue pour la 10eme fois&lt;/p&gt;
&lt;p&gt;le tram est interrompu pour une raison random encore&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;peut &amp;ecirc;tre &lt;strong&gt;malaise voyageur??&lt;/strong&gt;&lt;/li&gt;
&lt;li&gt;ou encore&lt;strong&gt;&amp;nbsp;travaux??&lt;/strong&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt;on sait jamais&amp;nbsp;&lt;/p&gt;
&lt;p&gt;&amp;nbsp;&lt;/p&gt;
&lt;p&gt;&lt;a title=&quot;ligne interrompue (pour la 10eme fois)&quot; href=&quot;https://www.t2c.fr/actu-infos-trafic/&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot;&gt;lire la suite&lt;/a&gt;&lt;/p&gt;
</description>
```
:::

:::info Contenu (formaté en HTML Classique):
```html
<description>
<p>ligne interrompue (pour la 10eme fois)</p>
<p>le tram est interrompu pour une raison random encore</p>
<ul>
<li>peut &ecirc;tre <strong>malaise voyageur??</strong></li>
<li>ou encore<strong>&nbsp;travaux??</strong></li>
</ul>
<p>on sait jamais&nbsp;</p>
<p>&nbsp;</p>
<p><a title="ligne interrompue (pour la 10eme fois)" href="https://www.t2c.fr/actu-infos-trafic/" target="_blank" rel="noopener">lire la suite</a></p>
</description>
```
:::

</details>

Dates de publication:

`<pubDate>Tue, 09 Sep 2025 00:00:00 +0000</pubDate>`

`<pubDate>Tue, 09 Sep 2025 00:00:00 +0000</pubDate>`

Identifiants:

`<guid isPermaLink="false">999999 at https://www.t2c.fr</guid>`

`<guid isPermaLink="false">999998 at https://www.t2c.fr</guid>`

Catégorie:
```xml
<category domain="https://www.t2c.fr/actualites-infos-trafic-par-ligne/ligne-tram">Ligne Tram A</category>

<category domain="https://www.t2c.fr/actualites-infos-trafic-par-ligne/ligne-b">Ligne B</category>
<category domain="https://www.t2c.fr/actualites-infos-trafic-par-ligne/ligne-c">Ligne C</category>
<category domain="https://www.t2c.fr/actualites-infos-trafic-par-ligne/ligne-5">Ligne 5</category>
<category domain="https://www.t2c.fr/actualites-infos-trafic-par-ligne/ligne-9">Ligne 9</category>
<category domain="https://www.t2c.fr/actualites-infos-trafic-par-ligne/ligne-10">Ligne 10</category>
<category domain="https://www.t2c.fr/actualites-infos-trafic-par-ligne/ligne-13">Ligne 13</category>
<category domain="https://www.t2c.fr/actualites-infos-trafic-par-ligne/navette-du-panoramique">Navette du Panoramique</category>
```

Catégorie Identifiant:
```xml
<categoryLignesId>11821953316814895</categoryLignesId>

<categoryLignesId>11821953316814897</categoryLignesId>
<categoryLignesId>11821953316814915</categoryLignesId>
<categoryLignesId>11821953316814889</categoryLignesId>
<categoryLignesId>11821953316814893</categoryLignesId>
<categoryLignesId>11821953316814874</categoryLignesId>
<categoryLignesId>11821953316814876</categoryLignesId>
<categoryLignesId>11821953316814907</categoryLignesId>
```