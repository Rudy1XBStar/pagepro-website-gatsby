import React from 'react'
import { storiesOf } from '@storybook/react'

import Testimonials from './Testimonials'
import Avatar1 from '../../assets/images/avatar-1.png'

storiesOf('Testimonials', module)
  .addDecorator(storyFn => <div style={{
     maxWidth: '232px'
  }}>{storyFn()}</div>)
  .add('default', () => (
    <Testimonials
      name="Ilona Filipi"
      src={Avatar1}
      alt="Picture"
      profession="Managing Director"
      agency="Moove, London"
      quote="“Chris and his team are very talented front-end developers them
      as a trusted partner. The level of commitment, quality and sercice lebel
      that they provide is hard to find. We highly recommend this tea.”"
    />
  ))