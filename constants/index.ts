import { ReactNode } from "react";

export const sidebarLinks = [
    {
      imgURL: '/icons/Home.svg',
      route: '/',
      label: 'Dashboard',
    },
  
    {
      imgURL: '/icons/upcoming.svg',
      route: '/upcoming',
      label: 'Sheduled',
    },
    {
      imgURL: '/icons/previous.svg',
      route: '/previous',
      label: 'Previous',
    },
    {
      imgURL: '/icons/Video.svg',
      route: '/recordings',
      label: 'Recordings',
    },
    {
      imgURL: '/icons/add-personal.svg',
      route: '/personal-room',
      label: 'Personal Room',
    },
  ];
  
  export const avatarImages = [
    '/images/avatar-1.jpeg',
    '/images/avatar-2.jpeg',
    '/images/avatar-3.png',
    '/images/avatar-4.png',
    '/images/avatar-5.png',
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
