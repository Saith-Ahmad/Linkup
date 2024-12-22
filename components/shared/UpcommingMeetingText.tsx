'use client'
import { useGetCalls } from '@/hooks/useGetCalls';
import React, { useEffect } from 'react'


function UpcommingMeetingText() {
    const {  upcomingCalls ,isLoading } = useGetCalls();
    useEffect(()=>{
    }, ["length",upcomingCalls.length])
  return (
    <div>{upcomingCalls.length > 0 ? "Upcoming Meeting Soon" : "No Upcoming Meeting"}</div>
  )
}

export default UpcommingMeetingText