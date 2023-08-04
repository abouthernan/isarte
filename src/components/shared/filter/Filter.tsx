import { useEffect, type FC, useState } from 'react'
import './filter.css'
import { annotate } from 'rough-notation';
import { Gallery } from '../../gallery/Gallery'

// categories
import { Categories } from '../../../constants';


export interface FilterProps { }

export const Filter: FC<FilterProps> = () => {

  const [selected, setSelected] = useState('all')

  useEffect(() => {
    const btns = document.querySelectorAll('.btn')
    btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const filter = e.target.dataset.filter
        if (filter) {
          setSelected(filter)
        }
      })
    })
  }, [])

  useEffect(() => {
    const element = document.querySelector('.active')
    if (!element) return

    const annotation = annotate(element, { type: 'highlight', color: '#f9d71c' })
    annotation.show()

    return () => {
      annotation.remove()
    }
  }, [selected])



  return (
    <>
      <ul className='container mt' >
        {
          Categories.map(({ name, value }) => (
            <button
              type="button"
              data-filter={value}
              key={value}
              className={`btn ${value} ${selected === value ? 'active' : ''}`}
            >
              {name}
            </button>
          ))
        }
      </ul >

      <Gallery selected={selected} />
    </>
  )
}

export default Filter