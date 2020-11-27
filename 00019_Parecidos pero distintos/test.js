const baseUrl = 'https://raw.githubusercontent.com/MumukiProject/mumuki-guia-gobstones-primeros-programas-kinder-2/master/assets/';
Muzzle.fitImagesVertically = true;
Muzzle.aspectRatio = 2
Muzzle.strokeWidth = 6; // compensate the thinner stroke
Muzzle.match([
  `${baseUrl}/match12_prog_si_1606503813212.svg`
], [
  `${baseUrl}/match12_prog_no_1606503827805.svg`,
], [
  `${baseUrl}/match12_tab_b_1606503852741.svg`,
], [], 2); // double the right pieces' width