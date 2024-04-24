import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SimpRaidenEi',
    short_name: 'SimpRaidenEi',
    description: 'Design by SimpRaidenEi',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: 'https://i.pinimg.com/200x150/03/fe/31/03fe31dfb42991dae86f9a326b6eaaec.jpg',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
