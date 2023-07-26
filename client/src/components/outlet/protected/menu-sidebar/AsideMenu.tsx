import { Link } from 'react-router-dom'
import { AiOutlineFileAdd, AiOutlineOrderedList } from 'react-icons/ai'
import { BsFillPersonLinesFill, BsClipboard2Data } from 'react-icons/bs'
import { BiPlanet } from 'react-icons/bi'

const AsideMenu = () => {
    return (
        <aside className="drawer md:drawer-open z-10">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="my-drawer" className="drawer-overlay" />
                <ul className="menu w-80 h-full text-base-content bg-base-300"
                >
                    <li
                        className="my-2"
                    ><Link to='/dashboard'>< BsClipboard2Data />Dashboard</Link></li>
                    <li
                        className="my-2 "
                    ><Link to='newtask' className='rounded-none text-base '><AiOutlineFileAdd />New task</Link></li>
                    <li
                        className="my-2 "
                    ><Link to='/dashboard/account'><BsFillPersonLinesFill />Account</Link></li>
                    <li
                        className="my-2 "
                    ><Link to='/dashboard/listing'><AiOutlineOrderedList />Listing</Link></li>
                    <li
                        className="my-2 "
                    ><Link to='/dashboard/workspaces'><BiPlanet />WorkSpaces</Link></li>
                </ul>
            </div>
        </aside>
    )
}

export default AsideMenu