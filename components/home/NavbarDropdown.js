import React from 'react'
import classes from './navbar.module.css'
const NavbarDropdown = ({ name, list, list2 }) => {
    const firstlist = list?.map(l => <li key={l} className=""><a className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href={l.link}>{l.name}</a></li>)
    const secondlist = list2 ? list2?.map(list => {
        return <li key={list} className=""><a className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href={list.link}>{list.name}</a></li>
    }) : ''
    return (
        <div className="">
            <div className={`${classes.dropdown} inline-block relative`}>
                <button className=" font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span className="mr-1">{name}</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                </button>
                {
                    list2 ? <ul className={`${classes.dropdown_menu_with_list2} z-[100]  fixed top-10 hidden text-gray-700 pt-1`}><div className='flex flex-col'>
                        {firstlist}  </div> <div className='flex flex-col'>{secondlist} </div>
                    </ul> : <ul className={`${classes.dropdown_menu} z-[100]  fixed top-10 hidden text-gray-700 pt-1`}>
                        {firstlist}
                    </ul>
                }

            </div>

        </div>
    )
}

export default NavbarDropdown