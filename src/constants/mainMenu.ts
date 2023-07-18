import galleryPicture from '../assets/images/nav/gallery.webp'
import awardsPicture from '../assets/images/nav/awards.webp'
import exhibitionsPicture from '../assets/images/nav/exhibitions.webp'
import eventsPicture from '../assets/images/nav/events.webp'
import workshopsPicture from '../assets/images/nav/workshops.webp'

export interface MainMenuProps {
  path: string
  name: string
  picture: string
}

export const mainMenu = [
  {
    path: '/galeria',
    name: 'Galería',
    picture: galleryPicture
  },
  {
    path: '#',
    name: 'Exposiciones',
    picture: awardsPicture
  },
  {
    path: '#',
    name: 'Tienda',
    picture: exhibitionsPicture
  },
  {
    path: '#',
    name: 'Talleres',
    picture: eventsPicture
  },
  {
    path: '#',
    name: 'Reconocimientos',
    picture: workshopsPicture
  }
]
