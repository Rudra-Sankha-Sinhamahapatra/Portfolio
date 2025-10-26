"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export interface TabItem {
  label: string
  content: React.ReactNode
  icon?: React.ReactNode
}

interface TabsComponentProps {
  tabs: TabItem[]
  className?: string
  variant?: 'default' | 'underline' | 'pills'
}

export function TabsComponent({ 
  tabs, 
  className = '', 
  variant = 'default' 
}: TabsComponentProps) {
  const [activeTab, setActiveTab] = useState(0)

  const tabVariants = {
    default: {
      tabStyle: 'px-4 py-2 rounded transition-colors',
      activeStyle: 'bg-brand/10 text-brand',
      inactiveStyle: 'hover:bg-background/50 text-foreground/70'
    },
    underline: {
      tabStyle: 'px-4 py-2 relative',
      activeStyle: 'text-brand',
      inactiveStyle: 'text-foreground/70'
    },
    pills: {
      tabStyle: 'px-4 py-2 rounded-full transition-colors',
      activeStyle: 'bg-brand text-white',
      inactiveStyle: 'hover:bg-background/50 text-foreground/70'
    }
  }

  const currentVariant = tabVariants[variant]

  return (
    <div className={`space-y-4 ${className}`}>

      <div className="flex space-x-2 overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`
              flex items-center space-x-2 
              ${currentVariant.tabStyle} 
              ${activeTab === index 
                ? currentVariant.activeStyle 
                : currentVariant.inactiveStyle
              }
            `}
          >
            {tab.icon && <span className="mr-2">{tab.icon}</span>}
            {tab.label}
            {variant === 'underline' && activeTab === index && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand"
              />
            )}
          </button>
        ))}
      </div>

      <div className="tab-content">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          {tabs[activeTab].content}
        </motion.div>
      </div>
    </div>
  )
}

export default TabsComponent