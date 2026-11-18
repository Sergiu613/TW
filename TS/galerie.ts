// Array cu imaginile din folderul ../MEDIA
const images: string[] = [
  "../MEDIA/login-bg.jpg",
  "../MEDIA/logo.png",
];

// Obtinem elementul principal din DOM
const mainImage = document.getElementById("carousel-image") as HTMLImageElement | null;

// Verificam daca elementul exista
if (!mainImage) throw new Error("Elementul #carousel-image nu a fost gasit in pagina.");

let currentIndex = 0;

function pulseImage(img: HTMLImageElement): void {
  img.style.transform = "scale(1.08)";
  setTimeout(() => {
    img.style.transform = "scale(1)";
  }, 500);
}

// Functie care schimba imaginea mare
function showNextImage(): void {
  if (images.length === 0 || !mainImage) return;
  currentIndex = (currentIndex + 1) % images.length;
  mainImage.src = images[currentIndex]!;
  pulseImage(mainImage);
}

if (images.length > 0) {
  mainImage.src = images[currentIndex]!;
  // Slider automat la 3 secunde
  setInterval(showNextImage, 3000);
} else {
  mainImage.alt = "Nu exista imagini in galerie";
}
