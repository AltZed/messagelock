import React from 'react'
import { SvgSearch } from '@/shared'
import { Link } from 'react-router-dom'
import { GrGroup } from "react-icons/gr"
import { AiOutlineShop } from "react-icons/ai"
import { PiChats } from "react-icons/pi"
import { RiAccountCircleLine, RiGroup2Line } from "react-icons/ri"
import { LuWallet } from "react-icons/lu"
import { IoSettingsOutline } from "react-icons/io5"
import { LiaDoorOpenSolid } from "react-icons/lia"
import { MdDynamicFeed } from "react-icons/md"

import './Panel.scss'

/**
 * Описание компонента панели.
 * 
 * Для перехода используется {@link Link | `<Link>`}.
 * Панель разделена на два блока:
 * - .social:
 *   - /profile
 *   - /friends
 *   - /messages
 *   - /groups
 *   - /feed
 * - .pay:
 *   - /market
 *   - /pay
 * - .settings:
 *   - settings
 *   - exit
 * - .info:
 *   - Доп.ссылки на прочую информацию.
 */

function Panel() {
  return (
    <div className="block-panel">  
      <div className="search-block">
          <div className="icon"><SvgSearch /></div>
          <input placeholder="Поиск..." />
      </div>

      <div className="main-panel">
          <div className="social column">
            <Link className='panel-link' to="/profile"> <RiAccountCircleLine /> Профиль</Link>
            <Link className='panel-link' to="/friends"> <RiGroup2Line /> Друзья</Link>
            <Link className='panel-link' to="/messages"> <PiChats /> Сообщения</Link>
            <Link className='panel-link' to="/groups"> <GrGroup /> Сообщества</Link>
            <Link className='panel-link' to="/feed"> <MdDynamicFeed /> Рекомендации</Link>
          </div>

          <div className="pay column">
            <Link className='panel-link' to="/market"> <AiOutlineShop /> Маркет</Link>
            <Link className='panel-link' to="/pay"> <LuWallet /> Кошелёк</Link>
          </div>
          
          <div className="settings column">
            <Link className='panel-link' to="/settings"> <IoSettingsOutline /> Настройки</Link>
            <Link className='panel-link' to="/exit"> <LiaDoorOpenSolid /> Выйти</Link>
          </div>
      </div>

      <div className="info">
        <Link className='info-link' to="about">Как это устроено?</Link>
        <Link className='info-link' to="about/updates">Узнать про обновления</Link>
        <Link className='info-link' to="security">Вопросы безопасности\конфедециальности</Link>
      </div>
    </div>
  )
}

export default Panel
