const baseUrl = 'https://raw.githubusercontent.com/MumukiProject/mumuki-guia-gobstones-primeros-programas-kinder-2/master/assets/';
Muzzle.fitImagesVertically = true;
Muzzle.aspectRatio = 2
Muzzle.strokeWidth = 6; // compensate the thinner stroke
Muzzle.match([
  `${baseUrl}/match12_prog_si_1606331704226.svg`
], [
  `${baseUrl}/match12_tab_1606331726883.svg`,
], [
  `${baseUrl}/match12_prog_no_1606331627470.svg`,
], [], 2); // double the right pieces' width