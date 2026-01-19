# T2C XML - Alerte.xml

::: danger Avertissement: Nouveau Réseau T2C
Cette page parle d'un **endpoint obsolète** lors de la migration vers l'API "Yoozly"
:::

Les Dernières Alertes du Réseau T2C.

::: info
Les alertes sont les messages qui apparaissent au premier-plan lors du lancement de l'application.
:::

## Obtenir les dernières alertes

#### URL
```
  GET https://www.t2c.fr/alerte.xml
```

## Exemple de réponse

:::details Cliquez pour voir la Réponse.
```xml{9-23}
<?xml version="1.0" encoding="utf-8"?>
<rss
	xmlns:dc="http://purl.org/dc/elements/1.1/" version="2.0" xml:base="https://www.t2c.fr/">
	<channel>
		<title/>
		<link>https://www.t2c.fr/</link>
		<description/>
		<language>fr</language>
		<item>
			<title>La gratuité ne s'applique pas les jours fériés</title>
			<link>https://www.t2c.fr/la-gratuite-ne-sapplique-pas-les-jours-feries</link>
			<description>
&lt;span&gt;La gratuité ne s'applique pas les jours fériés&lt;/span&gt;


&lt;p&gt;&lt;span style="color:#ffffff;"&gt;Attention, la gratuité s'applique uniquement les samedis et dimanches. Vous devez être muni d'un titre de transport valide les jours fériés.&lt;/span&gt;&lt;/p&gt;
  &lt;img loading="lazy" src="https://www.t2c.fr/sites/default/files/2025-04/PICTOS_BILLETSANSCONTACT_0.png" width="850" height="850" alt="La gratuité ne s'applique pas les jours fériés"&gt;

</description>
			<pubDate>Tue, 15 Apr 2025 13:47:59 +0000</pubDate>
			<dc:creator>m.bonhomme</dc:creator>
			<guid isPermaLink="false">267164 at https://www.t2c.fr</guid>
		</item>
	</channel>
</rss>
```
:::

### Attributs du XML d'alerte:

* Le formatage doit être un minimum correct, sinon le message ne s'affiche pas dans l'application T2C.
* Le contenu de l'alerte est dans la balise `<item>`.
* Les images doivent faire partie de `EnteteSiteT2c` (par défaut: `https://www.t2c.fr`), sinon les images ne vont pas se charger.

* La balise `<title>` est un titre interne, qui n'est pas affiché dans l'application T2C.
* La balise `<link>` est un lien ramenant vers un article de la T2C, qui n'est pas affiché dans l'application T2C.
* La balise `<description>` est la partie principale, le contenu est formaté en "HTML échappé" (escaped HTML). Elle contient tout ce qui va être affiché dans l'application, par exemple: le texte; les couleurs; les images...
* La balise `<pubDate>` contient la date de publication de l'alerte.
* La balise `<dc:creator>` est une optionnelle, montrant celui qui a écrit l'alerte, mais elle n'est pas affichée dans l'application T2C.
* La balise `<guid>` est l'identifiant unique universel de l'alerte.

## Exemple de formatage

:::details Cliquez pour voir le formatage.
```xml{10-25}
<?xml version="1.0" encoding="utf-8"?>
<rss xmlns:dc="http://purl.org/dc/elements/1.1/" version="2.0" xml:base="https://www.t2c.fr/">
  <channel>
    <title/>
    <link>
    https://www.t2c.fr/
    </link>
    <description/>
    <language>fr</language>
    <item>
      <title>Normal conversation between Osaka and Father</title>
      <link>
      https://www.t2c.com/
      </link>
      <description>
&lt;p&gt;&lt;span style=&quot;color: #f3c631;&quot;&gt;Father: &quot;Hello everynyan! How are you? Fine, thank you.&quot;&lt;/span&gt;&lt;/p&gt;
&lt;p&gt;&lt;span style=&quot;color: #ff9900;&quot;&gt;Osaka: &quot;Oh my gah!&quot;&lt;/span&gt;&lt;/p&gt;
&lt;p&gt;&lt;span style=&quot;color: #f3c631;&quot;&gt;Father: &quot;I wish I were a bird.&quot;&lt;/span&gt;&lt;/p&gt;
&lt;p&gt;&amp;nbsp;&lt;/p&gt;
&lt;img loading=&quot;lazy&quot; src=&quot;http://127.0.0.1/img/osaka.png&quot; width=&quot;182&quot; height=&quot;138&quot; alt=&quot;Osaka going Oh my gah!&quot;&gt;
      </description>
      <pubDate>Fri, 14 Mar 2025 00:00:00 +0000</pubDate>
      <dc:creator>LariVille</dc:creator>
      <guid isPermaLink="false">000000 at https://www.t2c.fr</guid>
    </item>
  </channel>
</rss>
```
:::

<h3 align="center">
  <br>
  <img src="/alerte_exemple.png" width="250px" alt="Image de l'application T2C montrant une alerte custom."/>
  <br>
</h3>

### Paramètres
Titre Interne: `<title>Normal conversation between Osaka and Father</title>`

<details>
  <summary>Contenu de l'Alerte: (cliquez)</summary>
  
::: info Contenu (formaté en "HTML Échappé"):
```xml
<description>
&lt;p&gt;&lt;span style=&quot;color: #f3c631;&quot;&gt;Father: &quot;Hello everynyan! How are you? Fine, thank you.&quot;&lt;/span&gt;&lt;/p&gt;
&lt;p&gt;&lt;span style=&quot;color: #ff9900;&quot;&gt;Osaka: &quot;Oh my gah!&quot;&lt;/span&gt;&lt;/p&gt;
&lt;p&gt;&lt;span style=&quot;color: #f3c631;&quot;&gt;Father: &quot;I wish I were a bird.&quot;&lt;/span&gt;&lt;/p&gt;
&lt;p&gt;&amp;nbsp;&lt;/p&gt;
&lt;img loading=&quot;lazy&quot; src=&quot;http://127.0.0.1/img/osaka.png&quot; width=&quot;182&quot; height=&quot;138&quot; alt=&quot;Osaka going Oh my gah!&quot;&gt;
</description>
```
:::

:::info Contenu (formaté en HTML Classique):
```html
<p><span style="color: #f3c631;">Father: "Hello everynyan! How are you? Fine, thank you."</span></p>
<p><span style="color: #ff9900;">Osaka: "Oh my gah!"</span></p>
<p><span style="color: #f3c631;">Father: "I wish I were a bird."</span></p>
<p>&nbsp;</p>
<img loading="lazy" src="https://127.0.0.1/img/osaka.png" width="582" height="338" alt="Osaka going Oh my gah!">
```
:::
</details>

Date de Publication: `<pubDate>Fri, 14 Mar 2025 00:00:00 +0000</pubDate>`

Créateur: `<dc:creator>LariVille</dc:creator>`

Identifiant: `<guid isPermaLink="false">000000 at https://www.t2c.fr</guid>`
