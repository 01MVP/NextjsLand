'use client';

import React from 'react'
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function Testimonial() {
  const t = useTranslations('Testimonial');
  const testimonialData = t.raw('testimonials') as Array<{
    key: number;
    name: string;
    title: string;
    message: string;
    company: string;
  }>;
  
  const testimonial = testimonialData.map((item, index) => ({
    ...item,
    image: [
      "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg",
      "https://images.pexels.com/photos/5439472/pexels-photo-5439472.jpeg",
      "https://images.pexels.com/photos/12437056/pexels-photo-12437056.jpeg",
      "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg",
      "https://images.pexels.com/photos/2883383/pexels-photo-2883383.jpeg"
    ][index] || "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg",
    rating: 5
  }))

  return (
    <section className="relative py-16">
      
      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800">
            {t('badge')}
          </div>
          
          <h2 className="mx-auto mb-6 w-full max-w-3xl text-center text-3xl font-bold md:mb-8 md:text-5xl text-slate-900 dark:text-slate-100">
            {t('title')}
          </h2>
          
          <p className="mx-auto mb-8 w-full max-w-2xl text-center text-lg text-slate-600 dark:text-slate-400">
            {t('description')}
          </p>
          
          {/* 统计数据 */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">1000+</div>
              <div className="text-sm text-slate-500 dark:text-slate-500">{t('stats.activeUsers')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">99%</div>
              <div className="text-sm text-slate-500 dark:text-slate-500">{t('stats.satisfaction')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">24/7</div>
              <div className="text-sm text-slate-500 dark:text-slate-500">{t('stats.support')}</div>
            </div>
          </div>
        </div>

        {/* 评价墙 */}
        <div className="mb-8 py-4 md:mb-12 lg:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            testimonial.map((item, index) => (
              <div key={item.key}>
                <Item 
                  title={item.title} 
                  message={item.message} 
                  name={item.name} 
                  image={item.image}
                  rating={item.rating}
                  company={item.company}
                />
              </div>
            ))
          }
          </div>
        </div>
      </div>
    </section>
  )
}


function Item({ 
  title, 
  message, 
  name, 
  image, 
  rating = 5, 
  company 
}: { 
  name: string; 
  message: string; 
  title: string; 
  image: string;
  rating?: number;
  company?: string;
}) {
  return (
    <div className="mb-6 p-6 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-950">
      {/* 公司信息 */}
      <div className="flex justify-end mb-4">
        <div className="text-xs text-slate-500 dark:text-slate-500 font-medium">
          {company}
        </div>
      </div>
      
      {/* 评价内容 */}
      <blockquote className="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
        {message}
      </blockquote>
      
      {/* 用户信息 */}
      <div className="flex items-center">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="mr-3 inline-block h-10 w-10 object-cover rounded-full"
        />
        <div className="flex flex-col">
          <h6 className="text-sm font-medium text-slate-900 dark:text-slate-100">
            {name}
          </h6>
          <p className="text-xs text-slate-500 dark:text-slate-500">
            {title}
          </p>
        </div>
      </div>
    </div>
  )
}
