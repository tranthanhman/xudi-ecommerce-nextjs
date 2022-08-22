import React from 'react'

const Breadscrumb = (props) => {

    const isLast = (index) => {
        return index === props.crumb.length - 1 ? true : false
    }

    return (
        <nav className="flex h-10 mt-4 items-center" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                {props.crumb.map((crumb, index) => {
                    const disabled = isLast(index) ? 'text-gray-300' : ''
                    return (
                        <li key={index} className="inline-flex items-center">
                            <Link href="#">
                                <a  className={`${disabled} inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white`}>
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                    {crumb}
                                </a>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}

export default Breadscrumb