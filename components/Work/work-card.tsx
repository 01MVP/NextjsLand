'use client';

import React from 'react'

export function WorkCard({ 
  title, 
  description, 
  step, 
  hide = true, 
  icon = '📋' 
}: { 
  title: string, 
  description: string, 
  step: number, 
  hide?: boolean,
  icon?: string
}) {

  return (
    <div className="group relative my-8 flex w-full lg:mx-8 lg:flex-col p-6">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
        {/* 图标和步骤 */}
        <div className="relative mb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
            <span className="text-xl">{icon}</span>
          </div>
          <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 dark:bg-slate-100">
            <span className="text-xs font-medium text-white dark:text-slate-900">{step}</span>
          </div>
        </div>
        
        {/* 内容 */}
        <div className="flex-1">
          <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-slate-100">
            {title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      {/* MOBILE - HOW IT WORKS LINE */}
      {hide === true ? <svg
        className="absolute -bottom-[48px] left-[28px] lg:hidden text-fd-foreground"
        width="12"
        height="70"
        viewBox="0 0 12 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Step connector line"
        role="img"
      >
        <title>Step connector</title>
        <path
          d="M6 0.226497L0.226497 6L6 11.7735L11.7735 6L6 0.226497ZM6 94.7735L11.7735 89L6 83.2265L0.226497 89L6 94.7735ZM5 6V10.15H7V6H5ZM5 18.45V26.75H7L7 18.45H5ZM5 35.05L5 43.35H7V35.05H5ZM5 51.65L5 59.95H7L7 51.65H5ZM5 68.25L5 76.55H7L7 68.25H5ZM5 84.85L5 89H7V84.85H5Z"
          fill="currentColor"
        />
      </svg> : null}
      {/* DESKTOP - HOW IT WORKS LINE */}
      {hide === true ? <svg
        className="absolute right-0 top-7 hidden lg:block text-fd-foreground"
        width="170"
        height="12"
        viewBox="0 0 170 12"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Step connector line"
        role="img"
      >
        <title>Step connector</title>
        <path
          d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM169.773 6L164 0.226497L158.227 6L164 11.7735L169.773 6ZM6 7H9.95V5H6V7ZM17.85 7H25.75V5H17.85V7ZM33.65 7H41.55V5H33.65V7ZM49.45 7H57.35V5H49.45V7ZM65.25 7H73.15V5H65.25V7ZM81.05 7H88.95V5H81.05V7ZM96.85 7H104.75V5H96.85V7ZM112.65 7H120.55V5H112.65V7ZM128.45 7H136.35V5H128.45V7ZM144.25 7H152.15V5H144.25V7ZM160.05 7H164V5H160.05V7Z"
          fill="currentColor"
        />
      </svg> : null}
    </div>)
}

/*
 *       <svg
        className="absolute -bottom-[48px] left-[28px] lg:hidden"
        width="12"
        height="70"
        viewBox="0 0 12 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 0.226497L0.226497 6L6 11.7735L11.7735 6L6 0.226497ZM6 94.7735L11.7735 89L6 83.2265L0.226497 89L6 94.7735ZM5 6V10.15H7V6H5ZM5 18.45V26.75H7L7 18.45H5ZM5 35.05L5 43.35H7V35.05H5ZM5 51.65L5 59.95H7L7 51.65H5ZM5 68.25L5 76.55H7L7 68.25H5ZM5 84.85L5 89H7V84.85H5Z"
          fill="black"
        ></path>
      </svg>

      <svg
        className="absolute right-0 top-7 hidden lg:block"
        width="170"
        height="12"
        viewBox="0 0 170 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM169.773 6L164 0.226497L158.227 6L164 11.7735L169.773 6ZM6 7H9.95V5H6V7ZM17.85 7H25.75V5H17.85V7ZM33.65 7H41.55V5H33.65V7ZM49.45 7H57.35V5H49.45V7ZM65.25 7H73.15V5H65.25V7ZM81.05 7H88.95V5H81.05V7ZM96.85 7H104.75V5H96.85V7ZM112.65 7H120.55V5H112.65V7ZM128.45 7H136.35V5H128.45V7ZM144.25 7H152.15V5H144.25V7ZM160.05 7H164V5H160.05V7Z"
          fill="black"
        />
      </svg>

 * */
