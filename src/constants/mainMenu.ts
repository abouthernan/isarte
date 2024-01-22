import galleryPicture from '../assets/images/nav/gallery.webp'
import awardsPicture from '../assets/images/nav/awards.webp'
import exhibitionsPicture from '../assets/images/nav/exhibitions.webp'
import eventsPicture from '../assets/images/nav/events.webp'
import workshopsPicture from '../assets/images/nav/workshops.webp'

export interface MainMenuProps {
  path: string
  name: string
  picture: string
  external?: boolean
  disabled?: boolean
}

export const mainMenu = [
  {
    path: '/galeria',
    name: 'Galería',
    picture: galleryPicture
  },
  {
    path: '/exposiciones',
    name: 'Exposiciones',
    picture: awardsPicture
  },
  {
    path: 'https://tienda.isabelrengifo.art',
    name: 'Tienda',
    picture: exhibitionsPicture,
    external: false
  },
  {
    path: '#',
    name: 'Talleres',
    picture: eventsPicture,
    disabled: true
  },
  {
    path: '#',
    name: 'Reconocimientos',
    picture: workshopsPicture,
    disabled: true
  }
]
