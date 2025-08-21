<?php
$url = $_GET['url'] ?? false;
?>
<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <title>Générateur de lien d'affiliation pour Degaine.SO</title>
  <link rel="stylesheet" href="style.css?<?=time();?>">
</head>

<body>
  <h2>Générateur de lien d'affiliation pour <br>Degaine.SO</h2>
  <input type="text" id="urlInput" placeholder="Entrez l'URL cible" value="<?= $url; ?>" />
  <select id="affiliateProgram"></select>
  <button id="generateBtn">Transformer</button>
  <textarea id="output" rows="4" readonly></textarea>
  <button id="copyBtn">Copier le lien</button>
  <script src="popup.js?<?=time();?>"></script>
</body>
</html>
