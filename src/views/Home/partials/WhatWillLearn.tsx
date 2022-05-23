import React from 'react'
import { Button, Card, Col, Row, Carousel } from 'antd'
import Title from '@nexys/components/Typography/Title'
import { CardProps } from 'antd/lib/card'
import Link from 'next/link'
import LazyImgwrapper from '@nexys/components/LazyImgWrapper'
import Image from 'next/dist/client/image'

interface LearnItemProps extends CardProps {
  urlTitleIcon?: string
  urlDocumentation?: string
  urlExample?: string
  title?: string | React.ReactNode
  totalFiles?: number
  directory?: string
  image?: any[]
}

function LearnItem(props: LearnItemProps) {
  const {
    style,
    bodyStyle,
    urlTitleIcon,
    children,
    title,
    urlDocumentation,
    urlExample,
    totalFiles,
    directory,
    image,
    ...restProps
  } = props

  const contentStyle: React.CSSProperties = {
    // height: '160px',
    color: '#fff',
    // lineHeight: '160px',
    textAlign: 'center',
    // background: '#364d79',
  };

  const curUrlExample =
    urlExample || (totalFiles > 1 ? `/examples/${directory}` : null)

  return (
    <Card
      {...restProps}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        ...style,
      }}
      bodyStyle={{
        flex: 1,
        ...bodyStyle,
      }}
      actions={
        [curUrlExample, urlDocumentation].find((value) => value) &&
        [
          urlDocumentation && (
            <Link href={urlDocumentation}>
              <a
                target={'_blank'}
                rel={'noopener noreferrer'}
                style={{ display: 'inline' }}
              >
                <Button>Get Brochure</Button>
              </a>
            </Link>
          ),
        ].filter((item) => Boolean(item))
      }
      title={
        <div>
          {urlTitleIcon && (
            <React.Fragment>
              <LazyImgwrapper height={24}>
                <img alt={title as string} width={24} src={urlTitleIcon} />
              </LazyImgwrapper>
              &nbsp;
            </React.Fragment>
          )}

          {title}
        </div>
      }
    >
      <Carousel style={{
        height: 500
      }}>
      {image && image.length > 0 && image.map((v, i) => {
        return (
      <div>
      <div style={contentStyle}><Image
       width={500}
       height={600}
        src={v.source}
        alt={'tampak dapur'}
      /></div>
    </div>

        )
      })}
      </Carousel>
    </Card>
  )
}

interface WhatWillLearnProps {
  data: LearnItemProps[]
}

function WhatWillLearn(props: WhatWillLearnProps) {
  const { data } = props
  return (
    <Row>
      <Col xs={24} style={{ textAlign: 'center' }}>
        <Title size={30}>Tipe Rumah</Title>
      </Col>
      <Col xs={24}>
        <Row gutter={[20, 20]} justify={'center'}>
          {data.map((learnItem) => {
            return (
              <Col xs={24} md={12} key={learnItem.urlDocumentation}>
                <LearnItem {...learnItem} />
              </Col>
            )
          })}
        </Row>
      </Col>
    </Row>
  )
}

export default WhatWillLearn
