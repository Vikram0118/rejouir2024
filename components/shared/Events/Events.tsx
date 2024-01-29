"use client"

import React from 'react'
import SelectInput from './SelectInput'
import { eventsOptions, categoryOptions } from '@/constants/index';
import { eventCard } from "@/constants/eventCardConstant"
import { HoverEffect } from '@/components/ui/card-hover-effect';

export const Events = () => {
  return (
    <section className=''>
      <div className='flex flex-col md:flex-row md:items-center text-left justify-between max-w-7xl px-10 py-10 mx-auto text-5xl font-extrabold'>
        <p>Events</p>

        <div className='flex flex-col md:flex-row gap-2 mt-10 md:mt-0'>
          <SelectInput
            label="Events"
            name="eventName"
            placeholder="Select event"
            options={categoryOptions}
          />
          <SelectInput
            label="Events"
            name="eventName"
            placeholder="Select event"
            options={eventsOptions}
          />
        </div>
        
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <HoverEffect items={eventCard} />
      </div>
    </section>
  )
}
