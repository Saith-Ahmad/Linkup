import {  CalendarCheck, CalendarHeartIcon, CircleFadingPlus, LayoutDashboard, Video } from "lucide-react";
import { ReactNode } from "react";

export const sidebarLinks = [
    {
      imgURL: LayoutDashboard,
      route: '/',
      label: 'Dashboard',
    },
  
    {
      imgURL: CalendarHeartIcon,
      route: '/upcoming',
      label: 'Sheduled',
    },
    {
      imgURL: CalendarCheck,
      route: '/previous',
      label: 'Previous',
    },
    {
      imgURL: Video,
      route: '/recordings',
      label: 'Recordings',
    },
    {
      imgURL: CircleFadingPlus,
      route: '/personal-room',
      label: 'Personal Room',
    },
  ];
  
  export const avatarImages = [
    '/images/avatar-1.png',
    '/images/avatar-2.jpg'
  ];



  
export interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  handleClick?: () => void;
  buttonText?: string;
  instantMeeting?: boolean;
  image?: string;
  buttonClassName?: string;
  buttonIcon?: string;
}


export interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

export type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right';
