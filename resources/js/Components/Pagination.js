import { Link } from '@inertiajs/inertia-react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

export default function Pagination ({ links }) {
  function getClassName (active) {
    if (active) {
      return 'mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:boder-indigo-700 hover:bg-white hover:text-indigo-700 focus:border-indigo-700 focus:text-indigo-700 bg-indigo-700 text-white mx-2'
    } else {
      return 'mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-indigo-700 focus:text-indigo-700 mx-2'
    }
  }

  function buildArrows (label) {
    switch (label) {
      case '&laquo; Previous':
        return <ChevronLeftIcon />
      case 'Next &raquo;':
        return <ChevronRightIcon />
      default:
        return label
    }
  }

  return (
    links.length > 3 && (
      <div className='inline-flex items-center -space-x-px'>
        {links.map((link, key) =>
          link.url === null
            ? (
              <div key={key} className='mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded '>
                {buildArrows(link.label)}
              </div>
              )
            : (
              <Link
                className={getClassName(link.active)}
                href={link.url}
                key={key}
              >
                {buildArrows(link.label)}
              </Link>
              )
        )}
      </div>
    )
  )
}
