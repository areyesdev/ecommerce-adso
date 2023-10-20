// creamos una interfaz llamada SeedProduct 
interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
  gender: 'mouse' | 'streaming' | 'keyboard' | 'kits' | 'accessories';
}

type ValidTypes =
  | 'wireless'
  | 'wired'
  | 'beginners'
  | 'intermediate'
  | 'advanced';

// esta interfaz es creada para cuando queramos crear usuarios anticipados
interface SeedData {
  products: SeedProduct[];
}

export const initialData: SeedData = {
  products: [
    {
      description:
        'Audífono inalámbrico multiplataforma con conexión 2.4 GHz y TRRS 3.5 mm, Desplázate por el universo como un planeta interestelar. La calidad de audio y el tiempo de respuesta mínimo se verán reflejados eternamente, desde el PC gaming hasta la portabilidad multiplataforma.',
      images: ['Gravity-01.png', 'Gravity-02.png', 'Gravity-03.png'],
      inStock: 7,
      price: 393000,
      slug: 'streaming_gravity',
      type: 'wireless',
      tags: ['gamming'],
      title: 'Gravity',
      gender: 'streaming',
    },
    {
      description:
        'Teclado mecánico de tamaño completo con interruptores Kailh. La luminosidad del sistema estelar de Orión se refleja en la estrella más grande de esta constelación. Siente el estado de pureza máximo en Alnilam White Edition. El equilibrio del universo se complementa con la imponencia de Alnilam Black Edition. Desde su interior emergen todos los colores de la nebulosa de Orión.',
      images: ['Alnilam-01.png', 'Alnilam-02.png', 'Alnilam-03.png'],
      inStock: 5,
      price: 200000,
      slug: 'keyboard_Alnila',
      type: 'wired',
      tags: ['keyboard'],
      title: 'keyboard Alnilam',
      gender: 'keyboard',
    },

    {
      description:
        'Teclado mecánico de tamaño TKL con interruptores Kailh azul, rojo o marrón. En el universo donde el gaming reina, el asterismo de Orión junta la energía y pureza de todas sus estrellas para encapsularla en el aura de Alnitak White Edition. La inmensidad del espacio exterior es infinitamente oscura, pero su verdadera energía emerge del sistema estelar, explayándose en el espectro de Alnitak Black Edition.',
      images: ['Alnitak-01.png', 'Alnitak-02.png', 'Alnitak-03.png'],
      inStock: 15,
      price: 200000,
      slug: 'keyboard_Alnitak',
      type: 'wired',
      tags: ['keyboard'],
      title: 'keyboard Alnitak',
      gender: 'keyboard',
    },

    {
      description:
        'Teclado mecánico de tamaño 60% con interruptores Kailh, azul, rojo o marrón. El astro más pequeño pero más brillante del cinturón de Orión. Todo lo que tenías en nuestra estrella Mintaka ahora en presentación de máxima pureza y elegancia.La inmensidad del espacio exterior es infinitamente oscura, pero su verdadera energía emerge del sistema estelar, concentrándose en el espectro de Mintaka Black Edition.',
      images: ['Mintaka-01.png', 'Mintaka-02.png', 'Mintaka-03.png'],
      inStock: 4,
      price: 200000,
      slug: 'keyboard_Mintaka',
      type: 'wireless',
      tags: ['keyboard'],
      title: 'keyboard Mintaka',
      gender: 'keyboard',
    },
    {
      description:
        'Micrófono unidireccional por conexión USB tipo-C, trípode, potenciómetro.Omkara se enfoca con precisión en tu voz, sonido o mensaje. Estos llegarán directamente al micrófono, por lo que el ruido ambiente se aislará de su enfoque. Tendrás el control absoluto de cada palabra, nota o respiración.A la hora de mutear, la acción será completamente silenciosa. Está equipado con un botón de mute completamente silencioso y táctil. Tu última expresión será el punto y final, ese cierre magistral que dejará a tu mensaje brillar con éxito.',
      images: ['Omkara-1.png', 'Omkara-2.png', 'Omkara-3.png'],
      inStock: 10,
      price: 200000,
      slug: 'microphone_Omkara',
      type: 'wired',
      tags: ['microphone'],
      title: 'microphone Omkara',
      gender: 'streaming',
    },
  ],
};
