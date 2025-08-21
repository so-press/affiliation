
let affiliateConfigs = {};

fetch('https://raw.githubusercontent.com/so-press/affiliation/refs/heads/main/affiliate-configs.json')
  .then(response => response.json())
  .then(data => {
    affiliateConfigs = data;
    const select = document.getElementById('affiliateProgram');
    Object.keys(affiliateConfigs).forEach(key => {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = key.charAt(0).toUpperCase() + key.slice(1);
      select.appendChild(option);
    });
    if (document.querySelector('#urlInput').value) {
      console.log('ko')
      setTimeout(() => {
        document.getElementById('generateBtn').click();
      }, 1000)
    }
  })
  .catch(error => console.error('Erreur de chargement des configurations :', error));

document.getElementById('generateBtn').addEventListener('click', () => {
  const url = document.getElementById('urlInput').value.trim();
  const program = document.getElementById('affiliateProgram').value;
  const config = affiliateConfigs[program];

  if (!url || !config) return;

  const encodedUrl = encodeURIComponent(url);
  const finalUrl = `https://www.awin1.com/cread.php?awinmid=${config.awinmid}&awinaffid=${config.awinaffid}&ued=${encodedUrl}`;

  document.getElementById('output').value = finalUrl;
});

document.getElementById('copyBtn').addEventListener('click', () => {
  const output = document.getElementById('output');
  output.select();
  document.execCommand('copy');
});
