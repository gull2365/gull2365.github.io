import React, { FunctionComponent } from 'react'
import { ProfileImageWrapper } from './styles'

const PROFILE_IMAGE_LINK =
  '<https://avatars.githubusercontent.com/u/93335464?s=400&u=428d81df3a e124bd92b2ec0d2a7b3a826da0b3d9&v=4>'

export const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="profile Image" />
}
