import React, { useState } from 'react'
import '../styles/NavigationBar.css'

function NavigationBar() {
  const [activeTab, setActiveTab] = useState("trang chủ")
  const [activeLan, setActiveLan] = useState("Tiếng Việt")
  const [toggleLan, setToggleLan] = useState(true)
  const tabs = [
    'mục đăng ký',
    'giới thiệu nghề',
    'đặc sắc trò chơi',
    'thông báo tin tức'
  ];

  const lanList = [
    '中文',
    'English',
    'ภาษาไทย',
    'Tiếng Việt'
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }
  const toggleLanList = () => {
    setToggleLan(!toggleLan)
  }

  return (
    <div className='NavigationBar'>
      <a href="https://draconiasaga.hhgame.vn/" className='logo'></a>
      <div className="nav">
        <span
          className={activeTab === 'trang chủ' ? 'active' : ''}
          onClick={() => handleTabClick('trang chủ')}
        >
          trang chủ
        </span>
        <a href="https://sea.sugarfungame.com/next/recharge/index.html#/pointcard?name=lzgwy" target='_blank'>Trung Tâm Nạp</a>

        {tabs.map((tab) => {
          return (
            <span
              key={tab}
              className={activeTab === tab ? 'active' : ''}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </span>
          )
        })}
      </div>

      <div className="langue" onClick={() => toggleLanList()}>
        <i className="fa-solid fa-globe" />
        <span>{activeLan}</span>
        <ul className={`lan-list ${toggleLan ? 'hide' : null} `}>
          {lanList.map((lan) => {
            return (
              <li
                key={lan}
                className={activeLan === lan ? 'active' : null}
                onClick={() => setActiveLan(lan)}
              >
                {lan}
              </li>
            )
          })}
        </ul>
      </div>

    </div>
  )
}

export default NavigationBar