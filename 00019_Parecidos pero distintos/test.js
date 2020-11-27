const baseUrl = 'https://raw.githubusercontent.com/MumukiProject/mumuki-guia-gobstones-primeros-programas-kinder-2/master/assets/';
Muzzle.fitImagesVertically = true;
Muzzle.aspectRatio = 2
Muzzle.strokeWidth = 6; // compensate the thinner stroke
Muzzle.match([
  `${baseUrl}/match13_prog_si_1606504504585.png`
], [
  `${baseUrl}/match13_tab_b_1606504300391.png`,
], [
  `${baseUrl}/match13_prog_no_1606504538216.png`,
], [], 2); // double the right pieces' width