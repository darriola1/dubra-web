import React from 'react'
import HeroSection from '@/components/HeroSection';
import ProfileCard from '@/components/ProfileCard';
import HistoryCard from '@/components/HistoryCard';

const ProfilePage = () => {
  return (
    <div className='h-full'>
        <HeroSection
          extraComponent={<div className='flex w-full flex-col items-center justify-center gap-2'><ProfileCard/> <HistoryCard/></div>}
          customHeight=' h-full '
          centerContent={false}
          textColor={'text-dubraPrimary'}/>
    </div>
  )
}

export default ProfilePage