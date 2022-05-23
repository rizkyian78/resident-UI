import React from 'react'
import { Button, Col, Row, Carousel, Typography } from 'antd'
import Title from '@nexys/components/Typography/Title'
import Text from '@nexys/components/Typography/Text'
import Image from 'next/dist/client/image'
import Link from 'next/link'

const contentStyle: React.CSSProperties = {
  color: '#fff',
  textAlign: 'center',
  borderRadius: 30
};

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

function Welcome() {
  return (
    <>
    <Typography.Title style={{alignItems: "center"}} level={1}>Japanese Box House (On Design)</Typography.Title>
      <Carousel afterChange={onChange} autoplay>
      <div>
        <div style={contentStyle}>
          <Image
          width={900}
          height={700}
          src={'/static/images/rumah_jepang_depan.jpeg'}
          alt={'tampak depan'}
        />
        </div>
      </div>
      <div>
      <div style={contentStyle}><Image
          width={900}
          height={700}
          src={'/static/images/rumah_jepang_tampak_dalam.webp'}
          alt={'tampak dalam'}
        /></div>
      </div>
      <div>
      <div style={contentStyle}><Image
         width={900}
         height={700}
          src={'/static/images/rumah_jepang_dapur.webp'}
          alt={'tampak dapur'}
        /></div>
      </div>
      <div>
      <div style={contentStyle}>
        <Image
          width={900}
          height={700}
          src={'/static/images/rumah_jepang_tampak_ruang_depan.jpeg'}
          alt={'tampak ruang depan'}
        />
        </div>
      </div>
      <div>
      <div style={contentStyle}>
        <Image
          width={900}
          height={700}
          src={'/static/images/rumah_jepang_tampak_westafel.jpeg'}
          alt={'tampak westafel'}
        />
        </div>
      </div>
      <div>
      <div style={contentStyle}>
        <Image
          width={900}
          height={700}
          src={'/static/images/rumah_jepang_tampak_toilet.jpeg'}
          alt={'tampak toilet'}
        />
        </div>
      </div>
      
    </Carousel>
    </>
  )
}

export default Welcome
